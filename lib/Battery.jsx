import styles from './styles/styles.jsx';

const render = ({ output }) => {
  if (!output) return;
  const percentage = output.percentage;
  const isCharging = output.charging;
  const remainingTime = output.remaining;

  const isFullBattery = percentage > 90 && !isCharging;
  const isLowBattery = percentage < 10 && !isCharging;

  // TODO: There are even more battery icons states on FA
  let iconClassName = 'far fa-battery-half';

  if (isCharging) {
    iconClassName = 'far fa-battery-bolt';
  } else if (isFullBattery) {
    iconClassName = 'far fa-battery-full';
  } else if (isLowBattery) {
    iconClassName = 'far fa-battery-empty';
  }

  const hasWarning = isLowBattery ? { color: styles.colors.red } : null;

  return (
    <div style={hasWarning}>
      <i className={iconClassName} />
      {percentage}%
    </div>
  );
};

export default render;
