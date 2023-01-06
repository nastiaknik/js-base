// 1.
/* console.log(document); // HTMLDocument http://127.0.0.1:5500/js/6module/dom.html

const list = document.body.firstElementChild;
console.log(list); // 1-а дитина-вузол баді (ul)

const listItems = list.children; // лішки (діти ul)
console.log(listItems); //  { 0: li, 1: li, 2: li, 3: li, 4: li, length: 5 } */

// 2.
/* const listWithId = document.querySelector('#menu');
listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '24px';
console.log(listWithId);

const listWithClass = document.querySelector('.menu');
console.log(listWithClass);

const menuItemsByTagName = document.querySelectorAll('li');
console.log(menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll('.menu-item');
console.log(menuItemsByClass);

const firstMenuItem = document.querySelector('.menu-item');
firstMenuItem.style.color = 'tomato';
console.log(firstMenuItem); */

// 3.
/* const text = document.querySelector('.article-text');
console.log(text.textContent); // text inside p.article-text

const title = document.querySelector('.article-title');
title.textContent = 'Welcome to Bahamas!'; */

// 4.
/* const text = document.querySelector('#paragraph');

text.classList.forEach(cls => {
  console.log(cls); // text, red, new-class
});
 */

// 5.
/* const dishes = document.querySelectorAll('.dishes > li');
dishes.forEach(dish => {
  console.log(dish.dataset.id);
}); */

// 6.
/* const article = document.querySelector('.article');
console.log(article.innerHTML);

const title = document.querySelector('.article .title');
console.log(title.innerHTML);

const text = document.querySelector('.article .text');
console.log(text.innerHTML);

const link = document.querySelector('.article .link');
console.log(link.innerHTML);
 */

// 7. список продуктів
/* import products from './data/products.js';

const productsContainerEl = document.querySelector('.js-products');

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement('article');
  productEl.classList.add('product');
  // console.log(productEl); // <article class="product">
  const nameEl = document.createElement('h2');
  nameEl.textContent = name;
  nameEl.classList.add('product__name');

  const descrEl = document.createElement('p');
  descrEl.textContent = description;
  descrEl.classList.add('product__descr');

  const priceEl = document.createElement('p');
  priceEl.textContent = `Цена: ${price} кредитов`;
  priceEl.classList.add('product__price');

  productEl.append(nameEl, descrEl, priceEl);

  return productEl;
};

const elements = products.map(makeProductCard);

console.log(elements); // [ article.product, article.product, article.product, article.product ]
productsContainerEl.append(...elements); */

// 8.
/* productsContainerEl.innerHTML = '';
console.log(productsContainerEl); // <div class="js-products"> */

// 9.
/* import transactionHistory from './data/transactions.js';

const makeTransactionTableRowMarkup = transaction => {
  const { id, amount, date, business, type, name, account } = transaction;

  return `
  <tr>
    <td>${id}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${business}</td>
    <td>${type}</td>
    <td>${name}</td>
    <td>${account}</td>
  </tr>
  `;
};

const tableEl = document.querySelector('.js-transaction-table');
const transactionTableRowsMarkup = transactionHistory.map(makeTransactionTableRowMarkup).join('');

tableEl.insertAdjacentHTML('beforeend', transactionTableRowsMarkup);
tableEl.innerHTML = ''; */

// 10.
/* const list = document.querySelector('.js-list');
let markup = '';
const lastItem = Number(list.lastElementChild.textContent);
for (let i = 1; i <= 5; i += 1) {
  markup += `<li class="js-item">${lastItem + i}</li>`;
}
console.log(markup);
list.insertAdjacentHTML('beforeend', markup); */
