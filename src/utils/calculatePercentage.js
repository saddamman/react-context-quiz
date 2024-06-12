function calculatePercentage(part, total, decimalPlaces = 2) {
  if (total < 0) return 0;
  const percentage = (part / total) * 100;
  return percentage.toFixed(decimalPlaces);
}

export default calculatePercentage;
