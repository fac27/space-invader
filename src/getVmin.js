export function getVmin(){
  const dimensions = [window.innerWidth, window.innerHeight];
  const minDimension = dimensions.reduce((a, b) => a - b);
  const vMin = ((minDimension / 100) * 10).toFixed(0);
  return vMin;
}
