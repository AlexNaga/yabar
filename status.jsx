import DateTime from './lib/DateTime.jsx.js.js';
import Battery from './lib/Battery.jsx.js.js';
import Cpu from './lib/Cpu.jsx.js.js';
import Wifi from './lib/Wifi.jsx.js.js';
import Dnd from './lib/Dnd.jsx.js.js';
import Error from './lib/Error.jsx.js.js';
import parse from './lib/parse.jsx.js.js';
import styles from './lib/styles.jsx.js.js';

const style = {
  display: 'grid',
  padding: '0 12px',
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

export const refreshFrequency = 10000;

export const command = './nibar/scripts/status.sh';

export const render = ({ output }) => {
  const data = parse(output);
  if (typeof data === 'undefined') {
    return (
      <div style={style}>
        <Error msg="Error: unknown script output" side="right" />
      </div>
    );
  }
  return (
    <div style={style}>
      <Cpu output={data.cpu} />
      <Wifi output={data.wifi} />
      <Battery output={data.battery} />
      <DateTime output={data.datetime} />
      <Dnd output={data.dnd} />
    </div>
  );
};

export default null;
