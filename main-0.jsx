import Battery from './lib/Battery.jsx';
import Cpu from './lib/Cpu.jsx';
import Date from './lib/Date.jsx';
import Time from './lib/Time.jsx';
import WifiName from './lib/WifiName.jsx';
import WifiStrength from './lib/WifiStrength.jsx';
import Divider from './lib/Divider.jsx';
import Icons from './lib/Icons.jsx';
import styles from './lib/styles/styles.jsx';

const renderClass = `
  .status-container {
      display: flex;
      padding: 0 22px;
      position: fixed;
      top: 8px;
      right: 0px;
      color: ${styles.colors.dim};
      font-family: ${styles.fontFamily};
      font-size: ${styles.fontSize};
      line-height: ${styles.lineHeight};
      font-weight: ${styles.fontWeight};
      --ggs: ${styles.iconSize};

      div {
          display: flex;
          align-items: center;
      }

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

const command = 'bash yabar/lib/scripts/get_status.sh';

const render = ({ output }) => {
  if (!output) return;
  const data = JSON.parse(output);

  return (
    <div className="status-container">
      <Icons />
      <Cpu output={data.cpu} />
      <WifiName output={data.wifi} />
      <WifiStrength output={data.wifi} />
      <Battery output={data.battery} />

      <Divider />
      <Date output={data.date} />

      <Divider />
      <Time output={data.time} />
    </div>
  );
};

export { command, refreshFrequency, renderClass as className, render };
