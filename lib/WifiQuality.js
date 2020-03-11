const isInteger =
  Number.isInteger ||
  function(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
  };

const getQuality = dBm => {
  return parseFloat(((2 * (dBm + 100)) / 100).toFixed(2));
};

module.exports = dBm => {
  if (!isInteger(dBm)) throw new Error('dBm must be an integer');
  const quality = dBm <= -100 ? 0 : dBm >= -50 ? 100 : getQuality(dBm);
  return quality;
};
