const app = document.querySelector('.container');
const btn = document.querySelector('.loadData');
const clear = document.querySelector('.clear');
const URL = 'https://catfact.ninja/facts';

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

btn.addEventListener('click', getFacts);
clear.addEventListener('click', clearFacts);