import rssiQuality from 'plott-rssi-quality';

const render = ({ output }) => {
  if (!output) return;

  const status = output.status;
  const rssi = parseInt(output.rssi);
  const wifiName = output.name;

  const wifiQualityInPercentage = rssiQuality(rssi) * 100;

  const noWifi = status === 'inactive';
  const isGoodWiFi = wifiQualityInPercentage > 75;
  const isBadWiFi = wifiQualityInPercentage < 20;

  let iconClassName = 'fa fa-wifi-2'; // Default medium WiFi strength

  if (noWifi) {
    iconClassName = 'far fa-wifi-slash';
  } else if (isGoodWiFi) {
    iconClassName = 'fas fa-wifi';
  } else if (isBadWiFi) {
    iconClassName = 'fas fa-wifi-1';
  }

  return (
    <div>
      <i className={iconClassName} />
      {noWifi ? 'No WiFi' : wifiName}
    </div>
  );
};

export default render;
