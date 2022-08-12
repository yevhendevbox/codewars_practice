/**
 * cutCube - take volume and number, find out is length of a cube integer
 * @param  {number, number} 2 numbers
 * cut the volume by number given, check if its integer or not,
 * return boolean value
 */

const thinkAntTest = (number, base) => number - base**Math.floor(Math.log(number)/Math.log(base));