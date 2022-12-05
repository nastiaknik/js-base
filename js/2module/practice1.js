// 05.11.2022

// 1. Напишіть код, який запитуватиме логін за допомогою prompt і буде виводити результат
// в консоль браузера. Якщо користувач вводить "Admin", то prompt запитує пароль.
// Якщо нічого не ввели або натиснута клавіша Esc вивести рядок "Cancel"
// Інакше вивести рядок "I don't know you"

//Пароль перевіряти так: Якщо введено пароль "I am admin", то вивести рядок "Hello!",
// інакше виводити рядок "Wrong password!"

/* const login = prompt('Enter login');

if (login === 'admin') {
  const password = prompt('Enter password');

  if (password === 'I am admin') {
    console.log('Hello!');
  } else {
    console.log('Wrong password!');
  }
} else if (login === null || login === '') {
  console.log('Cancel');
} else {
  console.log("I don't know you");
} */

/* console.log(login); */

// 2. У змінній min лежить число від 0 до 60.
// Визначте, в яку чверть години потрапляє це число(у першу, другу, третю чи четверту).

/* const min = 10;

if (min >= 0 && min <= 15) {
  console.log('1-st');
} else if (min > 16 && min <= 30) {
  console.log('2-nd');
} else if (min > 31 && min <= 45) {
  console.log('3-rd');
} else if (min > 46 && min <= 60) {
  console.log('4-th');
} else {
  console.log('Wrong number!');
} */

// 3. // Напишіть через світч пошук автора мови програмування
// Пишемо назву мови у шаблонному рядку отримує відповідь: мова та автор
// PHP Расмус Лердорф
// C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
// Swift Кріс Латтнер
// JS Брендан Ейх
// Java Джеймс Гослінг
// Python Гвідо ван Россум

/* const language = prompt('Enter programm language!')?.toLowerCase();

switch (language) {
  case 'php':
    console.log('PHP Расмус Лердорф');
    break;
  case 'c#':
    console.log(
      'C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота',
    );
    break;
  case 'swift':
    console.log('Swift Кріс Латтнер');
    break;
  case 'js':
    console.log('JS Брендан Ейх');
    break;
  case 'java':
    console.log('Java Джеймс Гослінг');
    break;
  case 'python':
    console.log('Python Гвідо ван Россум');
    break;
} */

// 4. Напишіть цикл, який виводить у консоль
// 1). числа від max до min за спаданням
// 2). Виведіть у консоль усіх парні числа від min до max
// 3). За допомогою циклу for додайте всі парні числа від min до max

/* const max = 90;
const min = 33;
let total = 0;

for (let i = max; i > min; i -= 1) {
    // do not forget about let!
    console.log(i);
if (i % 2 === 0) {
  // для парних чисел
  console.log(i);
  total += i;
}} */
/*   if (i % 2 !== 0) {
    continue;
  } */

// 5. Напишіть цикл, який пропонує ввести число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не введе число більше 100,
// або натисне кнопку cкасування в prompt

/* let num = 0;

while (num < 100) {
  num = prompt('Enter a number greater than 100!');
  if (num === null) {
    break;
  }
} */

// 6. Введіть рядок в prompt. Виведіть кількість голосних букв в цьому рядку
/* const string = prompt('Enter a sentence!');
let countVowels = 0;

for (let i = 0; i < string.length; i += 1) { // .length (x) do noy use ()!
    console.log(string[i]);
    const letter = string[i].toLocaleLowerCase();
    if (letter === "a" || letter === "i" || letter === "o" || letter === "e" || letter === "u") {
        countVowels += 1;
    }
}
    console.log(countVowels); */

// 7. Напишіть програму для заміни кожного символу в заданому рядку символом,
// що йде наступним за ним в алфавіті

/* const string = prompt('Enter a string');
let nextLetterInString = '';

for (let i = 0; i < string.length; i += 1) {
  const nextLetter = string[i].charCodeAt() + 1;
  nextLetterInString += String.fromCharCode(nextLetter); }
console.log(nextLetterInString); */

// 8. Перевіряє чи просте число (ділиться тільки на себе і на 1)
/* const num = prompt('Enter a number');
let isPrime = true;

for (let i = 2; i < num; i += 1) {
  // DO NO FORGET ABOUT LET!!!
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime); */

// 9. При завантаженні сторінки користувачеві пропонується в prompt ввести число.
// Після введення число додається до значення змінної total.
// 1) Операція введення числа продовжується доти, поки користувач не натисне Cancel

// 2) Після того як користувач припинив введення, натиснувши на кнопку Cancel,
// показати рядок "Загальна сума введених чисел дорівнює [число]."

// 3) Зробити перевірку, що користувач ввів саме число, а не довільний набір символів.

/* let num;
let total = 0;

do {
  num = prompt('Enter a number');
  if (isNaN(Number(num))) {
    // якщо не число
    continue;
  }
  total += Number(num);
} while (num !== null);
console.log(total); */
