/**
 * blackAndWhite - take arr of numbers, returning string
 * @param  {array[number]} array of numbers
 * check if the argument an array
 * return "It's a black arra" if argument array include 5 an 13
 */

const blackAndWhite = arr => {
  if (!Array.isArray(arr)) return "It's a fake array";
  if (arr.includes(5) && arr.includes(13)) return "It's a black array";
  if (!arr.includes(5) || !arr.includes(13)) return "It's a white array";
}
