const render = ({ output }) => {
  if (!output) return;

  const status = output.status;
  const wifiName = output.ssid;

  if (status === 'inactive') {
    return (
      <div>
        <i className="gg-smile-sad" />
      </div>
    );
  }

  return (
    <div>
      <i className="gg-data" />
      {wifiName}
    </div>
  );
};

export default render;
