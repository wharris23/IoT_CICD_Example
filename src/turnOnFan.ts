const fan_mx = 25; // temperature in °C

export function turnOnFan(temp: number): boolean {
  return temp >= fan_mx;
}
