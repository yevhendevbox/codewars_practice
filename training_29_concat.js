/**
 * bigToSmal - take arr of numbers, returning the string
 * @param  {array[number]} array of numbers
 * sort the array, reverse it, and join with > sign
 */

const bigToSmall = arr => [].concat(...arr).sort((a, b) => a - b).reverse().join('>');
