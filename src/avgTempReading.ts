export function averageTemperatureReading(temp: number[]): number {
  if (temp.length === 0) return 0;
  const sum = temp.reduce((acc, val) => acc + val, 0);
  return sum / temp.length;
}
