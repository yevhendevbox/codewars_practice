const app = document.querySelector('.container');
const btn = document.querySelector('.loadData');
const clear = document.querySelector('.clear');
const usersList = document.querySelector('.users-list');
const URL = 'https://catfact.ninja/facts';
const USERS = 'https://jsonplaceholder.typicode.com/users';


// fetch request
function getFacts() {
  fetch(URL).then(
    response => response.json()
  ).then(
    data => renderFacts(data)
  ).catch(err => console.log(err));
}

function renderFacts(list) {
  const listOfFacts = [...list.data];
  listOfFacts.forEach( el => {
    const card = document.createElement('p');
    card.textContent = el.fact;
    app.appendChild(card);
  });
}

function clearFacts() {
  app.innerHTML = '';
}

// XMLHttp request
function loadUsers() {
  const request = new XMLHttpRequest();
  request.open('GET', USERS);
  request.addEventListener('readystatechange', () => {
    if (request.readyState !== request.DONE) { return };
    const response = JSON.parse(request.responseText);
    const ul = document.createElement('ul');
    usersList.appendChild(ul);

    response.forEach(({name}) => {
      console.log('💩');
      const li = document.createElement('li');
      li.textContent = name;
      ul.appendChild(li);
    });
  });
  request.send();
}

btn.addEventListener('click', loadUsers);
clear.addEventListener('click', clearFacts);