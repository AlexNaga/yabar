import styles from './styles/styles.jsx';

const render = ({ output }) => {
  if (!output) return;

  const cpuLoad = output.loadAverage;
  const cpuLimits = [
    { limit: 3.3, icon: 'far fa-tachometer-fastest' },
    { limit: 2.8, icon: 'far fa-tachometer-fast' },
    { limit: 2.5, icon: 'far fa-tachometer' },
    { limit: 2, icon: 'far fa-tachometer-average' },
    { limit: 1.8, icon: 'far fa-tachometer-slow' },
    { limit: 1.5, icon: 'far fa-tachometer-slowest' }
  ];
  const highCpuLoadLimit = cpuLimits[0].limit;

  const getNearestValue = (array, value) => {
    let result, lastDelta;

    array.some(item => {
      const delta = Math.abs(value - item.limit);
      if (delta > lastDelta) return true;

      result = item;
      lastDelta = delta;
    });
    return result;
  };

  const iconClassName = getNearestValue(cpuLimits, cpuLoad).icon;

  const highLoadWarning = cpuLoad > highCpuLoadLimit ? { color: styles.colors.red } : null;

  return (
    <div style={highLoadWarning}>
      <i className={iconClassName} />
      {output.loadAverage}
    </div>
  );
};

export default render;
