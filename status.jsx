import Battery from './lib/Battery.jsx';
import Cpu from './lib/Cpu.jsx';
import DateTime from './lib/DateTime.jsx';
import Wifi from './lib/Wifi.jsx';
import styles from './lib/styles.jsx';

const style = {
  display: 'grid',
  padding: '0 22px',
  gridAutoFlow: 'column',
  gridGap: '20px',
  position: 'fixed',
  overflow: 'hidden',
  right: '0px',
  top: '0px',
  color: styles.colors.dim,
  fontFamily: styles.fontFamily,
  fontSize: styles.fontSize,
  lineHeight: styles.lineHeight,
  fontWeight: styles.fontWeight
};

// export const refreshFrequency = 10000; // default
const refreshFrequency = 1000; // during testing

const command = 'bash yabar/lib/scripts/status.sh';

const render = ({ output }) => {
  if (!output) return;
  const data = JSON.parse(output);

  return (
    <div style={style}>
      <Cpu output={data.cpu} />
      <Wifi output={data.wifi} />
      <Battery output={data.battery} />
      <DateTime output={data.datetime} />
    </div>
  );
};

export { command, refreshFrequency, render };
