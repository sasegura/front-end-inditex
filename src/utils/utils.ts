export function DateTransform(date: string) {
  return new Date(date).toLocaleDateString('es-ES');
}

export function milliSecondsToTime(duration: number) {
  const date = new Date(duration);
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  const realDuration = `${hours}:${minutes}:${seconds}`;

  return realDuration;
}
