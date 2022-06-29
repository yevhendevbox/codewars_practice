const swapLetter = str => {
  let position;
  let newStr;
  if (str.length % 2 !== 0) {
    position = Math.floor(str.length / 2);
    newStr = str.slice(0, position) + '|' + str.slice(position + 1);
    return newStr;
  }
  position = str.length / 2;
  newStr = str.slice(0, position) + '|' + str.slice(position);
  return newStr;
}

const isolateIt = arr => arr.map(el => swapLetter(el));
