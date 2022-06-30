/**
 * roundIt - take numer, returning rounded number
 * @param  {number}
 * check if left wing bigger then rigth
 */

const roundIt = num => {
  let leftSide = num.toString().split('.')[0].length;
  let rightSide = num.toString().split('.')[1].length;
  if (leftSide === rightSide) return Math.round(num);
  if (leftSide > rightSide) return Math.floor(num);
  return Math.ceil(num);
}

