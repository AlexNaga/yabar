import Battery from './lib/Battery.jsx';
import Cpu from './lib/Cpu.jsx';
import DateTime from './lib/DateTime.jsx';
import Wifi from './lib/Wifi.jsx';
import styles from './lib/styles.jsx';

const renderClass = `
  .status-container {
    display: flex;
    padding: 0 22px;
    position: fixed;
    right: 0px;
    top: 0px;
    color: ${styles.colors.dim};
    font-family: ${styles.fontFamily};
    font-size: ${styles.fontSize};
    line-height: ${styles.lineHeight};
    font-weight: ${styles.fontWeight};
    --ggs: ${styles.iconSize};

    div:not(:last-child) {
      margin-right: 20px;
    }

    i {
      margin-right: ${styles.iconSpacing};
    }
  }
`;

// export const refreshFrequency = 10000; // default
const refreshFrequency = 1000; // during testing

const command = 'bash yabar/lib/scripts/status.sh';

const render = ({ output }) => {
  if (!output) return;
  const data = JSON.parse(output);

  return (
    <div className="status-container">
      <Cpu output={data.cpu} />
      <Wifi output={data.wifi} />
      <Battery output={data.battery} />
      <DateTime output={data.datetime} />
    </div>
  );
};

export { command, refreshFrequency, renderClass as className, render };
