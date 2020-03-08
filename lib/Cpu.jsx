import styles from './styles.jsx';

const render = ({ output }) => {
  if (!output) return;

  const cpuLimit = 3;
  const isHighLoad = output.loadAverage > cpuLimit;
  const isWarning = isHighLoad ? { color: styles.colors.red } : null;

  return (
    <div style={isWarning}>
      <span>
        <i className="gg-performance" /> {output.loadAverage}
      </span>
    </div>
  );
};

export default render;
