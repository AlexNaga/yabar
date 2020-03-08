const render = ({ output }) => {
  if (!output) return;

  const status = output.status;
  const percentage = output.percentage;

  if (status === 'inactive') return null;

  return <div>{percentage}%</div>;
};

export default render;
