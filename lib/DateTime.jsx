const render = ({ output }) => {
  if (!output) return;

  return (
    <div>
      {output.date}
      &nbsp;
      {output.time}
    </div>
  );
};

export default render;
