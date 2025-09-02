export function isValidSensorValue(value: number): boolean {
  return value >= 0 && value <= 100;
}
