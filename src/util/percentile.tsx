export function findPercentileScore(
  data: { x: number; y: number }[],
  percentile: number
) {
  data.sort((a, b) => a.x - b.x);
  const totalFrequency = data.reduce((sum, point) => sum + point.y, 0);
  const rank = (percentile / 100) * totalFrequency;

  let cumulativeFrequency = 0;
  for (let i = 0; i < data.length; i++) {
    cumulativeFrequency += data[i].y;

    // When cumulative frequency meets or exceeds the rank, return the score
    if (cumulativeFrequency >= rank) {
      return data[i].x;
    }
  }
  return null;
}

export function getPercentile(data: { x: number; y: number }[], score: number) {
  data.sort((a, b) => a.x - b.x);
  const totalFrequency = data.reduce((sum, point) => sum + point.y, 0);

  let cumulativeFrequency = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].x <= score) {
      cumulativeFrequency += data[i].y;
    } else {
      break;
    }
  }

  // Calculate the percentile
  const percentile = (cumulativeFrequency / totalFrequency) * 100;
  return percentile;
}

export function getAverageScore(data: { x: number; y: number }[]) {
  const weightedSum = data.reduce((sum, point) => sum + point.x * point.y, 0);
  const totalFrequency = data.reduce((sum, point) => sum + point.y, 0);

  // Calculate the mean
  const mean = weightedSum / totalFrequency;
  return Math.round(mean);
}
