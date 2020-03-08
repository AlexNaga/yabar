import styles from './styles.jsx';

const render = ({ output }) => {
  if (!output) return;
  const percentage = output.percentage;
  const isCharging = output.charging;
  const remainingTime = output.remaining;

  const isFullBattery = percentage > 90 && !isCharging;
  const isLowBattery = percentage < 10 && !isCharging;

  const batteryIcon = <i className="gg-battery" />;
  const fullBatteryIcon = <i className="gg-battery-full" />;
  const lowBatteryIcon = <i className="gg-battery-empty" />;
  const chargingIcon = <i className="gg-bolt" />;
  let icon = batteryIcon;

  if (isCharging) {
    icon = chargingIcon;
  } else if (isFullBattery) {
    icon = fullBatteryIcon;
  } else if (isLowBattery) {
    icon = lowBatteryIcon;
  }

  const hasWarning = isLowBattery ? { color: styles.colors.red } : null;

  return (
    <div style={hasWarning}>
      {icon}
      {percentage}%
    </div>
  );
};

export default render;
