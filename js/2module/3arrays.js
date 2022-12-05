// 1. Оголошення масиву
/* const clients = ['Mango', 'Poly', 'Ajax']; */

// 2. Індексація починається з 0
/* console.log(clients[0]); // Mango */

// 3. Елементи масиву можна змінювати, звернувшись до них за індексом і присвоївши інше значення
/* clients[1] = 'Kiwi';
console.log(clients); // Array(3) [ "Mango", "Kiwi", "Ajax" ] */

// 4. Довжина масиву = к-сть елементів у масиві
/* console.log(clients.length); // 3 */

// 5. Індекс останнього елемента
/* const lastElementIndex = clients.length - 1;
console.log(lastElementIndex); // 2
console.log(clients[lastElementIndex]); // "Ajax" */

// 6. Ітерація по масиву (перебирання масиву поелементно) цикл фор
/* for (let i = 0; i < clients.length; i += 1) {
  console.log(clients[i]); // Mango Poly Ajax;
} */

// 7. фор ... оф ...
/* for (const client of clients) {
  console.log(client);
}
const string = 'javascript';
for (const character of string) {
  console.log(character);
} */

// 8. continue - виведення тільки чисел, які більші за певне значення.
/* const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue; // менші числа гудбай
  }
  console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
} */

// 9. Присвоєння примітивні типи
/* let a = 5; // Присвоєння за значенням, в пам'яті буде створена ще 1 комірка, в яку буде скопійоване значення
let b = a;
console.log(a); // 5
console.log(b); // 5

a = 10;
console.log(a); // 10
console.log(b); // 5 // Значення b не змінилося, оскільки це окрема копія */

// 10. Присвоєння складні типи
// в b записується посилання на вже існуючий масив в пам'яті. Тепер a і b вказують на той самий масив.
/* const a = ['Mango'];
const b = a;
console.log(a); // ["Mango"]
console.log(b); // ["Mango"]
a.push('Poly'); // Змінимо масив, додавши ще один елемент, використовуючи вказівник з a
console.log(a); // ["Mango", "Poly"]
console.log(b); // ["Mango", "Poly"] // b також змінилось, тому що містить посилання на те ж саме місце в пам'яті */

// 11. Метод .split()
/* const name = 'Mango';
console.log(name.split('')); // ["M", "a", "n", "g", "o"]

const message = 'JavaScript - це цікаво';
console.log(message.split(' ')); // ["JavaScript", "-", "це", "цікаво"] */

// 12. .push(шо добавить в кінець) - додає елем в кінець масиву
/* const numbers = []; // - пустий масив
numbers.push(1);
console.log(numbers); // [1]
numbers.push(3);
console.log(numbers); // [1, 3] */

// 13. .pop() - видаляє ост елемент
/* console.log(numbers.pop()); //  3
console.log(numbers); // [1] */

// 14. .shift() - видаляє перший елемент
/* console.log(numbers.shift()); // 1
console.log(numbers); // [] - порожній масивчик
console.log(numbers.shift()); // undefined
console.log(numbers); // []

const newNumbers = [3, 2, 1];
console.log(newNumbers.shift()); // 3
console.log(newNumbers); // [2, 1] */

// 15. .unshift(що добавить в поч) - додає елемент в початок масиву
/* console.log(newNumbers.unshift(3));
console.log(newNumbers); // [3, 2, 1] */

// 16. .slice(begin, end) - обрізає, але ств копію масиву
/* console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]
// Якщо begin і end не зазначені, буде створена повна копія вихідного масиву.
console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]
// Якщо не зазначено end, копіювання буде зі start і до кінця вихідного масиву.
console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// Якщо значення start від'ємне, а end не зазначено - будуть скопійовані останні start елементи
console.log(clients.slice(-2)); // ["Poly", "Kiwi"] */

// 17. .splice(position, num) - видаляє з position індексу, num - к-сть видалених елементів
/* const scores = [1, 2, 3, 4, 5];
const deletedScores = scores.splice(0, 3);
console.log(scores); // [4, 5] // Тепер масив scores містить два елементи
console.log(deletedScores); // [1, 2, 3] // А масив deletedScores містить три видалені елементи */

// 18. .splice(position, 0, new_element_1, new_element_2, ...) - додає 1+ елем
// Аргумент position вказує початкову позицію в масиві, куди будуть вставлені нові елементи.
// Другий аргумент - це нуль, він говорить методу не видаляти елементи в місці додавання нових.
// Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.

/* const colors = ['red', 'green', 'blue'];
colors.splice(2, 0, 'purple');
console.log(colors); // ["red", "green", "purple", "blue"] */

// 19. .splice(position, num, new_element_1, new_element_2, ...) - заміняє елем
// position - вказує на позицію (індекс) першого елемента для видалення
// num - визначає кількість елементів, що видаляються
// Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.
/* const languages = ['C', 'Python', 'Java', 'JavaScript'];
// Заміняємо один елемент (з індексом 2) на декілька
languages.splice(2, 1, 'C#', 'Swift', 'Go');
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"] */

// 20. Метод concat() - об'єднює масиви
/* const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Monkong', 'Singu'];
const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]
const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]
console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients); // ["Monkong", "Singu"] */

// 21. Скрипт який підраховує суму тільки парних чисел в масиві
/* let total = 0;
const numbers = [1, 5, 8, 9, 12, 4]; */

// 1) using for
/* for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 === 0) {
    total += numbers[i];
  } else if (numbers[i] % 2 !== 0) {
    continue;
  }
}
console.log(total); */

// 2) using for ... of
/* for (const number of numbers) {
  // DO NOT FORGET ABOUT CONST!!!
  if (number % 2 === 0) {
    total += number;
  } else if (number % 2 !== 0) {
    continue;
  }
}
console.log(total); */

// 22. Скрипт пошуку логіну в базі даних
/* const logins = ['mangoDoge', 'polyiscute', 'aj4x', 'kiwi'];
const loginToFind = 'polyiscute'; */
// 1) for
/* for (let i = 0; i < logins.length; i += 1) {
  if (loginToFind !== logins[i]) {
    console.log(`User ${logins[i]} is not found.`);
    continue;
  } else if (loginToFind === logins[i]) {
    console.log(`User ${logins[i]} is found!`);
  }
} */
// 2) for (const) variable of iterable
/* for (const login of logins) {
  // DO NOT FORGET ABOUT CONST!!!
  if (loginToFind !== login) {
    console.log(`User ${loginToFind} is not found.`);
    continue;
  } else if (loginToFind === login) {
    console.log(`User ${loginToFind} is found!`);
  }
} */
// 3) ternarnik if (condition) ? expression if true : expression if false;
/* for (const login of logins) {
  const isFound =
    loginToFind === login
      ? console.log(`User ${loginToFind} is found.`)
      : console.log(`User ${loginToFind} is not found.`);
} */
// 4) .includes()
/* const message = logins.includes(loginToFind)
  ? `User ${loginToFind} is found!`
  : `User ${loginToFind} is not found.`;
console.log(message); */

// 23. Виведення таблиці масиву (індекс - значення)
/* console.table(logins);  */

// 24. Порахувати загальну суму
/* const cart = [54, 28, 105, 92, 17];
let total = 0; */

// 1) for
/* for (let i = 0; i < cart.length; i += 1) {
  total += cart[i];
} */

// 2) for variable of iterable
/* for (const value of cart) {
  total += value;
}

console.log(total); // 296 */

// 25. Скрипт пошуку найменшого числа в масиві

/* const numbers = [51, 0, 7, 17, 3, 24, 19, 85, -1];
let smallestNumber = numbers[0]; // - перше ліпше

for (const num of numbers) {
  if (num < smallestNumber) {
    smallestNumber = num;
  }
}
console.log(smallestNumber); // -1 */

// 26. Скрипт для пошуку найбільшого числа в масиві

/* let biggestNumber = numbers[0];

for (const number of numbers) {
  if (number > biggestNumber) {
    biggestNumber = number;
  }
}
console.log(biggestNumber); // 85 */

// 27. Скрипт, що об'єднює едементи масиву в рядок
/* const names = ['Mango', 'Kiwi', 'Poly'];
let string = ''; */
// 1) for (const variable of iterable)
/* for (const name of names) {
  string += name + ', ';
}
string = string.slice(0, string.length - 1); */

// 2) method .join()
/* string = names.join(', '); */

/* console.log(string); */

// 28. Скрипт, який змінює в слові регістр на протилежний

/* const string = 'JavaScript';
const letters = string.split('');
let invertedString = '';

for (const letter of letters) { */
/*   invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase(); */
// то саме, що
// if (letter === letter.toLowerCase()) {
// invertedString += letter.toUpperCase();
// } else {
// invertedString += letter.toLowerCase();
// }
/* } */
/* console.log(invertedString); // jAVAsCRIPT */

// 29. slug в URL з назви статті (http://dev.to/where-to-find-a-job) - slug
/* const title = 'Where to find a Job';

const normalizedTitle = title.toLowerCase();
const words = normalizedTitle.split(' ');
const slug = words.join('-');
console.log(slug);

const sameSlug = title.toLowerCase().split(' ').join('-');
console.log(sameSlug); // where-to-find-a-job
 */

// 30. Скрипт, який рахує суму елементів 2ох масивів
/* const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

const numbers = array1.concat(array2); // об'єднюємо масиви

for (const number of numbers) { // додаємо елементи
  total += number;
}
console.log(total); // 110
 */

// 31. масив в масиві
/* const x = [1, 2, [3, 4]]; */

// 32.
/* let array = [1, 2, 3];
console.log(array);
array.length = 0;
console.log(array); // [] - пустий масивчик
console.log(array.length); // 0
array[2] = 1;
console.log(array); // [empty slot, empty slot, 1] */
