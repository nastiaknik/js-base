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
let stepX = [];
let stepO = [];
let player = 'X';
let steps = [];

let scoresX = 0;
let scoresO = 0;
let ties = 0;

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
  // if (event.target === event.currentTarget) {
  // return; // по дівчику клікати незя (необов'язково)
  // }
  if (event.target.textContent) {
    return; // якщо клітинка вже заповнена (має текстовий контент)
  }
  const currentId = Number(event.target.dataset.id);

  let result = false;

  if (player === 'X') {
    stepX.push(currentId);
    result = isWinner(stepX);
    event.target.style.color = 'red';
    steps.push(currentId);
  } else {
    stepO.push(currentId);
    result = isWinner(stepO);
    event.target.style.color = 'blue';
    steps.push(currentId);
  }

  event.target.textContent = player;

  if (result) {
    chempion(player);
    return;
  } else {
    if (steps.length === 9) {
      setTimeout(() => {
        alert('It is a tie!');
        ties += 1;
        const tiesCounter = document.querySelector('.ties');
        tiesCounter.textContent = `Ties: ${ties}`;
        tiesCounter.style.color = 'grey';
        createMarkup();
        resetHistory();
      }, 250);
    }
  }

  player = player === 'X' ? 'O' : 'X';
}

function isWinner(array) {
  if (array.length < 3) {
    return;
  }
  const win = wins.some(item => item.every(id => array.includes(id)));
  return win;
}

function chempion(player) {
  setTimeout(() => {
    alert(`${player} won!`);
    createMarkup();
  }, 250);
  if (player === 'X') {
    scoresX += 1;
    const scoreXCounter = document.querySelector('.scoreX');
    scoreXCounter.textContent = scoresX;
    scoreXCounter.style.color = 'red';
  } else if (player === 'O') {
    scoresO += 1;
    const scoreOCounter = document.querySelector('.scoreO');
    scoreOCounter.textContent = scoresX;
    scoreOCounter.style.color = 'blue';
  }
  resetHistory();
}

const resetBtn = `<button class="resetBtn" type="reset" data-action="reset">Reset</button>`;
document.querySelector('.container').insertAdjacentHTML('beforeend', resetBtn);

document.querySelector('.resetBtn').addEventListener('click', onResetBtnClick);

function onResetBtnClick(event) {
  createMarkup();
  resetHistory();
}

function resetHistory() {
  stepO = [];
  stepX = [];
  steps = [];
  player = 'X';
  result = false;
}

const counter = `<div class="counter">
<p class="scores counter__el"><span class="scoreX">${scoresX}</span> <span class="colon">:</span><span class="scoreO"> ${scoresO}</span></p> 
<p class="ties counter__el">Ties: ${ties}</p>
</div>`;

document.querySelector('.container').insertAdjacentHTML('beforebegin', counter);
