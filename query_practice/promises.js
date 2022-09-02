// //? 1. Promise Constructor
// console.log('start'); // 1

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);  // 2
// });

// console.log('end'); // 3

// //? 2. .then()
// console.log('start'); // 1

// const promise2 = new Promise((resolve, reject) => {
//   console.log(1); // 2
//   resolve(2); // 4
// });

// promise2.then(res => console.log(res));
// console.log('end');  // 3

// //? 3.
// console.log('start'); // 1

// const promise3 = new Promise((resolve, reject) => {
//   console.log(1); // 2
//   resolve(2); // 5
//   console.log(3); // 3
// });

// promise2.then(res => console.log(res));
// console.log('end');  // 4

// //? 4.
// console.log('start')

// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success')
// }))

// console.log('middle')

// fn().then(res => {
//   console.log(res)
// })

// console.log('end');
const pizzaPromise = new Promise((resolve, reject) => resolve('🍕'));
console.log(pizzaPromise);