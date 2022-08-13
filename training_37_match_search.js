/**
 * countAnimals - take sting of animals, and array of animals to check from string
 * @param  {string, string[]} string, and array of strings
 * count all matches from array in string
 */

const countAnimals = (str, animals) => {
  const results = [];
  for (let el of animals) {
    let regExp = new RegExp(el, 'gi');
    let counter = (str.match(regExp)||[]).length;
    results.push(counter);
  }
  return results;
}
