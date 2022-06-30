/**
 * countGrade - take arr of numbers, returning the object
 * @param  {array[number]} array of numbers
 * filter the grades depends of condition
 * and add counter to exac key in final object
 */

const countGrade = arr => {
  return {
    S: arr.filter(el => el === 100).length,
    A: arr.filter(el => el < 100 && el >= 90).length,
    B: arr.filter(el => el < 90 && el >= 80).length,
    C: arr.filter(el => el < 80 && el >= 60).length,
    D: arr.filter(el => el < 60 && el >= 0).length,
    X: arr.filter(el => el < 0).length,
  }
}
