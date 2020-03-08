const render = ({ output }) => {
  if (!output) return;

  const status = output.status;
  const wifiName = output.name;

  if (status === 'inactive') {
    return (
      <div>
        <i className="gg-smile-sad" />
        No WiFi
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
