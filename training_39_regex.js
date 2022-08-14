const strings = ["90000", "-90000", "900000000", "91230000", "-91230000"];
const strings2 = ["90001", "9000", "91230", "1-90000", "-90000123"];
const regex = /^-?9.*?0{4}$/;

// strings.forEach(el => console.log(regex.test(el)));
strings2.forEach(el => console.log(regex.test(el)));