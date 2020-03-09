const render = ({ output }) => {
  if (!output) return;

  const status = output.status;
  const wifiName = output.name;

  if (status === 'inactive') {
    return (
      <div>
        <i className="far fa-wifi-slash" />
        No WiFi
      </div>
    );
  }

  // TODO: There are even more wifi icons states on FA

  return (
    <div>
      <i className="fas fa-wifi" />
      {wifiName}
    </div>
  );
};

export default render;
