const render = ({ output }) => {
  if (!output) return;

  const status = output.status;
  const percentage = output.percentage;
  const wifiName = output.name;

  const noWifi = status === 'inactive';
  const isGoodWiFi = percentage > 75;
  const isBadWiFi = percentage < 10;

  let iconClassName = 'far fa-wifi-2'; // Default medium WiFi strength

  if (noWifi) {
    iconClassName = 'far fa-wifi-slash';
  } else if (isGoodWiFi) {
    iconClassName = 'fas fa-wifi';
  } else if (isBadWiFi) {
    iconClassName = 'far fa-wifi-1';
  }

  return (
    <div>
      <i className={iconClassName} />
      {noWifi ? 'No WiFi' : wifiName}
    </div>
  );
};

export default render;
