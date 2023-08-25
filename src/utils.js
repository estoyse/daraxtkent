export function decimalToDMS(coords) {
  let results = [];
  let a = 'N';

  for (let i = 0; i < coords.length; i++) {
    if (i == 1) a = 'E';
    const degrees = Math.floor(coords[i]);
    const minutes = Math.floor((coords[i] - degrees) * 60);
    const seconds = ((coords[i] - degrees - minutes / 60) * 3600).toFixed(2);

    results.push(degrees + '°' + minutes + "'" + seconds + '"' + a);
  }

  return results.join(', ');
}
