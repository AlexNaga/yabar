import styles from './styles.jsx';

const render = ({ output }) => {
  if (!output) return;

  const cpuLimit = 3;
  const isHighLoad = output.loadAverage > cpuLimit;

  const isWarning = isHighLoad ? { color: styles.colors.red } : null;
  const style = {
    ...isWarning,
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <div style={style}>
      <i className="gg-performance" />
      {output.loadAverage}
    </div>
  );
};

export default render;
