/**
 * maxMin - take two arrays of numbers, returning array of numbers
 * @param  {Array[number]}
 * @param  {Array[number]}
 * find difference between to values of itch element, then find max and min of result array
 */

const maxMin = (arr1, arr2) => {
  const difference = [];

  for (let i = 0; i < arr1.length; i++) {
    difference.push(Math.abs(arr1[i] - arr2[i]));
  }
  return [Math.max(...difference), Math.min(...difference)];
}

const minMax = (arr1, arr2) => {
  const difference = arr1.map((el, i) => Math.abs(el - arr2[i]));
  return [Math.min(...difference), Math.max(...difference)];
}