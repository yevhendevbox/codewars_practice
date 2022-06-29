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
