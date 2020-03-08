const render = ({ output }) => {
  if (!output) return;

  const status = output.status;
  const wifiName = output.ssid;
  const style = {
    display: 'flex',
    alignItems: 'center'
  };

  if (status === 'inactive') {
    return (
      <div>
        <i className="gg-smile-sad" />
      </div>
    );
  }

  return (
    <div style={style}>
      <i className="gg-data" />
      {wifiName}
    </div>
  );
};

export default render;
