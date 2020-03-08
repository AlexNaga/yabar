import styles from './styles.jsx';

const render = ({ output }) => {
  if (!output) return;

  const cpuLimit = 3;
  const isHighLoad = output.loadAverage > cpuLimit;

  const hasWarning = isHighLoad ? { color: styles.colors.red } : null;

  return (
    <div style={hasWarning}>
      <i className="gg-performance" />
      {output.loadAverage}
    </div>
  );
};

export default render;
