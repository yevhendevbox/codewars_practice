const list = document.querySelector('ul');
const firstItem = [...document.querySelectorAll('.firstAndLast > li:first-child')];
const lastItem = [...document.querySelectorAll('.firstAndLast > li:last-child')];
const fruitList = ['apple', '<div>banana</div>', 'tomato'];

fruitList.forEach(el => {
  const item = document.createElement('li');
  item.innerHTML = el;
  list.appendChild(item);
});

firstItem.forEach(el => el.textContent = 'first');
lastItem.forEach(el => el.textContent = 'last');



