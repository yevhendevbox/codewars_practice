const last = num => +num.toString().slice(-1);
const first = num => +num.toString().slice(0, 1);


const tailAndHead = arr => {
  let temp = [];
  for (let i = 0; i < arr.length - 1; i++) {
    temp.push(last(arr[i]) + first(arr[i + 1]));
  }
  return temp.reduce((acc, el) => acc * el);
}

