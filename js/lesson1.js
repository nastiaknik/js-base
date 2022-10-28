'use strict';
// 1. змінні
/* const yearOfBirth = 2006;
console.log(yearOfBirth);
let age;
console.log(age); // undefined */

// 2. виведення даних
/* const message = 'JavaScript is awesome!';
alert(message); */

// 3. введення даних
/* const isComing = confirm('Please confirm hotel reservation');
console.log(isComing); */
/* const hotelName = prompt('Please enter desired hotel name');
console.log(hotelName); */

// 4. порівняння
/* const x = 5;
const y = 10;
const z = 5;
console.log('x > y:', x > y); // false
console.log('x < y:', x < y); // true
console.log('x <= z:', x <= z); // true
console.log('x === z:', x === z); // true
console.log('x !== y:', x !== y); // true */

// 5. типи даних, оператор typeof
/* const age = 20;
console.log(typeof age); //number */
/* const message = 'JS is cool';
console.log(typeof message); //string */
/* const isAlive = true;
console.log(typeof isAlive); //boolean
let selectedProduct = null;
console.log(typeof selectedProduct); // object */
/* let name;
console.log(typeof name); // undefined */
/* const message = 'JS is cool';
console.log(typeof message); //string
alert(message); */

// 6. то саме що value = value + 10;
/* let value = 2;
value += 10;
console.log(value); // 12

// 7. приведення до числа
const valueB = 'random string';
console.log(Number(valueB)); // Nan
console.log(typeof Number(valueB)); // number
 */

// 8. Парсення (шукає число в строці)
/* console.log(Number.parseInt('5.67px')); // 5 - парсить до крапки або іншого символу, відмінного від числа
console.log(Number.parseFloat('5.67px')); // 5.67 - парсить до символу відмінного від крапки і числа
console.log((3555.678594).toFixed(2)); //3555.68 - округлює число за правилами математики, 
в дужках пишемо к-сть чисел після коми
 */

// 9. Валідація числа, яке вводить користувач
/* const data = prompt('Enter a number');
console.log(data);
const dataToNumber = Number.parseInt(data); - чистить від символів, які може ввести користувач
console.log(dataToNumber);
 */

// 10. 3 спопоби приведення до рядка
/* const num = 12345;

// 1ий спосіб
const str1 = String(num);
console.log(str1);
console.log(typeof str1);

// 2ий спосіб (пришиваємо пустий рядок, навіть без пробілу)
const str2 = num + '';
console.log(str2);
console.log(typeof str2);

// 3ій спосіб
const str3 = num.toString();
console.log(str3);
console.log(typeof str3); */

// 11. Пошук збігів у рядку
/* console.log('mango'.indexOf('nam')); // -1 - немає збігів*/

// 12. ділення на 0 дає нескінченість
/* console.log(5 / 0); // Infinity */

// 13. Оператор степеня **
/* console.log(2 ** 5); //32 */

/* // 14. Скрипт, який просить ввести число і степінь у користувача, обчислює і виводить результат в консоль
// 1) просить ввести число і зберігає в змінну
let base = prompt('Введіть число');
base = Number(base); // - промпт завжди виводить строку, потрібно перетворити в число
console.log('Число: ', base);

// 2) просить ввести степінь і зберігає її у змінну
let power = prompt('Введіть степінь');
power = Number(power); // - перетворення в число
console.log('Степінь: ', power);

// 3) обчислює і виводить результат в консоль
const result = base ** power;
console.log('Результат: ', result); */

// 15. Скрипт, що генерує псевдовипадкове число
/* console.log(Math.random()); // 0.6265283057505341 (від 0 до 1)
const max = 100; // до
const min = 1; // від
const randomNumber = Math.random() * (max - min) + min; // формула для діапазону
console.log(randomNumber); // 50.013379987822056
const randomInteger = Math.round(Math.random() * (max - min) + min); // округлює до цілого числа
console.log(randomInteger); // 79
 */

// 16. Скрипт, псевдорандомного фону
/* const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
const max = colors.length - 1;
const min = 0;
const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index];
console.log(color);
document.body.style.backgroundColor = color; */

// 17. Конкатенація строків
/* const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName = firstName + ' ' + lastName; // у лапках рядок з пробілом
console.log(fullName); // Chelsy Emerald */

// 18. Скрипт, який виводить строку в форматі: «Гість x y заселяється в z номер q»
/* const room = 716;
const type = 'VIP';

const welcomeMsg = `Гість ${firstName} ${lastName} заселяється в ${type} номер ${room}`;
console.log(welcomeMsg); */

// 19. Шаблонні рядки / літерали
/* const name = prompt("What's your name?");
const greeting = `Hey, ${name}!`; // не забувай про скосні лапки!
console.log(greeting); */

// 20.
/* let brand = 'SamSUnG';
console.log(brand[4]); // U (виводить символ з індексом 4)
console.log(brand.slice(1).toLowerCase()); // amsung (виводить з 1ого символа, S - 0)
brand = brand[0] + brand.slice(1).toLowerCase();
console.log(brand); // Samsung*/

// 21. Напиши скрипт який буде перевіряти чи числа знаходяться у відрізках зазначених х1 і х2.
// 1) До x1
// 2) Після x2
// 3) Від x1 до x2
// 4) До x1 або після x2
/* const x1 = 10;
const x2 = 30;
const number = 45;

console.log(`Число ${number} попадає у відрізок до ${x1}?`, number < x1); // 1)
console.log(`Число ${number} попадає у відрізок після ${x2}?`, number > x2); // 2)
const res1 = number > x1 && number < x2;

console.log(`Число ${number} попадає у відрізок від ${x1} до ${x2}? `, res1); // 3)
const res2 = number < x1 || number > x2;
console.log(`Число ${number} попадає у відрізок до ${x1} або після ${x2}? `, res2); // 4) */

//22. Скрипт, який перевіряє можливість відкрити чат з користувачем
// користувач має бути:
// 1) другом
// 2) онлайн
// 3) без режима не турбувати (do not disturb mode)
/* const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log('Можна відкрити чат? ', canOpenChat); */

// 23. Скрипт перевірки підписки корстувача для доступу до контенту
// Є 3 варіації підписки: free, pro i vip
// Доступ є тільки у про і віайпі користувачів
/* const sub = 'free';
const canAccessContent = sub === 'pro' || sub === 'vip';

console.log('Є доступ? ', canAccessContent); // false, бо підписка free */
