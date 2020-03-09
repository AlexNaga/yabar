import styles from './styles/styles.jsx';

const render = ({ output }) => {
  if (!output) return;
  const percentage = output.percentage;
  const isCharging = output.charging;
  const remainingTime = output.remaining;

  const isFullBattery = percentage > 90 && !isCharging;
  const isLowBattery = percentage < 10 && !isCharging;

  // TODO: There are even more battery icons states on FA
  const batteryIcon = <i className="far fa-battery-half" />;
  const fullBatteryIcon = <i className="far fa-battery-full" />;
  const lowBatteryIcon = <i className="far fa-battery-empty" />;
  const chargingIcon = <i className="far fa-battery-bolt" />;
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
