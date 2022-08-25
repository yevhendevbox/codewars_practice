const regex = /\b(\w)(\w)?(\w)?\w?\3\2\1\b/ig;

console.log('aa bbb cccc'.match(regex));
console.log('aaa bcccd'.match(regex));
console.log('_x_x_ --- ~~|~~'.match(regex));
console.log('ABCDCBA ABABABA'.match(regex));
console.log('121 1221 13577531 11211'.match(regex));