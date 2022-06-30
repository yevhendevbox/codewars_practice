/**
 * mirrorImage - take arr of numbers, returning the array of looklikes
 * @param  {array[number]} array of numbers
 * check every element to be equal with next elemet, or
 * equal with next element mirror reflection
 * return pare array or [-1, -1] instead
 */

const checkNum = (prev, next) => {
  if (prev === undefined || next === undefined) return false;
  if (prev === next) return true;
  if (prev.toString() === next.toString().split('').reverse().join('')) return true;
  return false;
};

const mirrorImage = arr => {
  let prev = 0;
  let next = 0;
  let final = arr.some((_, i) => {
    prev = arr[i];
    next = arr[i + 1];
    return checkNum(prev, next);
  })
  return final ? [prev, next] : [-1, -1];
}
