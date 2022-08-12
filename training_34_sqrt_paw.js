/**
 * cutCube - take volume and number, find out is length of a cube integer
 * @param  {number, number} 2 numbers
 * cut the volume by number given, check if its integer or not,
 * return boolean value
 */

const cutCube = (volume, n) => Math.cbrt(n) % 1 !== 0 ? false : Number.isInteger(Math.cbrt(volume / n));
