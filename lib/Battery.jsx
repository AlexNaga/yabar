import styles from './styles/styles.jsx';

const render = ({ output }) => {
  if (!output) return;
  const percentage = output.percentage;
  const isCharging = output.charging;
  const remainingTime = output.remaining;

  const isFullBattery = percentage > 90 && !isCharging;
  const isLowBattery = percentage < 10 && !isCharging;

  let iconClassName = 'far fa-battery-half';

  if (isCharging) {
    iconClassName = 'far fa-battery-bolt';
  } else if (isFullBattery) {
    iconClassName = 'far fa-battery-full';
  } else if (isLowBattery) {
    iconClassName = 'far fa-battery-empty';
  }

  const highLoadWarning = isLowBattery ? { color: styles.colors.red } : null;

  return (
    <div style={highLoadWarning}>
      <i className={iconClassName} />
      {percentage}%
    </div>
  );
};

export default render;
