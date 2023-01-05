const content = document.querySelector('.content'); // do not forget a dot!
const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
const stepX = [];
const stepO = [];
let player = 'X';

function createMarkup() {
  let markup = '';
  for (let i = 1; i <= 9; i += 1) {
    markup += `<div class="item" data-id="${i}"></div>`;
  }
  content.innerHTML = markup;
}

createMarkup();

content.addEventListener('click', onClick);
function onClick(event) {
  if (!event.target.classList.contains('item')) {
    return; // якщо не клітинка, то бувай
  }
  if (event.target === event.currentTarget) {
    return; // по дівчику клікати незя (необов'язково)
  }
  if (event.target.textContent) {
    return; // якщо клітинка вже заповнена (має текстовий контент)
  }
  const currentId = Number(event.target.dataset.id);

  let result = false;

  if (player === 'X') {
    stepX.push(currentId);
    result = isWinner(stepX);
  } else {
    stepO.push(currentId);
    result = isWinner(stepO);
  }

  event.target.textContent = player;

  if (result) {
    chempion(player);
    return;
  }

  player = player === 'X' ? 'O' : 'X';
}

function isWinner(array) {
  return wins.some(item => item.every(id => array.includes(id)));
}

function chempion(player) {
  setTimeout(() => {
    alert(`${player} is winner!`);
    createMarkup();
  }, 250);
}
