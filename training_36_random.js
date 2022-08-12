
const rndCode = () => {
  const alpha = "ABCDEFGHIJKLM";
  const special = "~!@#$%^&*";
  let result = '';
  for (let i = 0; i < 8; i++) {
    if (i <= 1) {
      result += alpha[Math.floor(Math.random()*alpha.length)];
    } else if(i > 5) {
      result += special[Math.floor(Math.random()*special.length)];
    } else {
      result += Math.floor(Math.random()*10);
    }
  }
  return result;
}

console.log(rndCode());