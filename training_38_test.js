const firstLetter = str => str.split(' ').map(el => el.replace(/^./, x => x.toUpperCase())).join(' ');

const firstLetter2 = str => str.replace(/\b./g, x => x.toUpperCase());

const findSimilarity = (str, word) => {
  const regExp = word.replace(/./g, '.').replace(/^./, word[0]).replace(/.$/, word.slice(-1));
  const sample = new RegExp('^' + regExp + '$');
  return str.split(' ').filter(el => sample.test(el)).join(' ');
}
