// 1.
/* const button = document.querySelector('.btn');

const handleClick = event => {
  console.log('event: ', event);
  console.log('event type: ', event.type);
  console.log('currentTarget: ', event.currentTarget);
};
// event: click { target: button.btn,  buttons: 0, clientX: 39, clientY: 96, layerX: 39, layerY: 143 }
// event type:  click
// currentTarget:  <button class="btn" type="button">

button.addEventListener('click', handleClick); */

// 2.
/* const form = document.querySelector('.register-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { username, password },
  } = event.currentTarget;
  console.log(username.value, password.value);
}); */

// 3.
/* const clearLogBtn = document.querySelector('[data-action="clear"]');
const logList = document.querySelector('.log-list');
let keypressCounter = 1;

document.addEventListener('keydown', logMessage);
document.addEventListener('keyup', logMessage);
clearLogBtn.addEventListener('click', reset);

function logMessage({ type, key, code }) {
  const markup = `<div class="log-item">
    <span class="chip">${keypressCounter}</span>
    <ul>
      <li><b>Event</b>: ${type}</li>
      <li><b>Key</b>: ${key}</li>
      <li><b>Code</b>: ${code}</li>
    </ul>
  </div>`;

  logList.insertAdjacentHTML('afterbegin', markup);

  if (type === 'keyup') {
    incrementKeypressCounter();
  }
}

function reset() {
  keypressCounter = 1;
  logList.innerHTML = '';
}

function incrementKeypressCounter() {
  keypressCounter += 1;
}
 */

// 4. Закрити модалку по кнопці, ескейп і по кліку на сіре поле
/* const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

// 1) по кліку по кнопці
refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
}

// 2) по кліку на сіре полу (бекдроп)
refs.backdrop.addEventListener('click', onBackdropClick);

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    console.log('Кликнули именно в бекдроп!!!!');
    onCloseModal();
  }
}

// 3) по кліку на esc (escape)
function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
} */
