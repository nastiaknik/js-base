'use strict';
// 1. Інструкція if (трушна умова)
/* let cost = 0;
const subscription = 'pro';
if (subscription === 'pro') {
  // true
  cost = 100;
}
console.log(cost); // 100 */

// 2. If (фальшива умова)
/* let cost = 0;
const subscription = 'free';
if (subscription === 'pro') {
  cost = 100;
}
console.log(cost); // 0 */

// 3. else - якщо жодна умова не підійшла
/* let cost;
const subscription = 'free';
if (subscription === 'pro') {
  cost = 100;
} else {
  cost = 0;
}
console.log(cost); // 0 */

// 4. else ігнорується, якщо умова if правдива
/* let cost;
const subscription = "pro";
if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}
console.log(cost); // 100 */

// 5. Else if - щоб додати більше 1 умови
/* let cost;
const subscription = 'premium';
if (subscription === 'free') {
  cost = 0;
} else if (subscription === 'pro') {
  cost = 100;
} else if (subscription === 'premium') {
  cost = 500;
} else {
  console.log('Invalid subscription type');
}
console.log(cost); // 500 */

// 6. Тернарнік (тернарний оператор)
/* const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type); // "adult" */

// То саме через іф
/* let type;
const age = 20;
if (age >= 18) {
  type = 'adult';
} else {
  type = 'child';
} 
console.log(type); // "adult"
*/

// 7. Switch
/* let cost;
const subscription = "premium";
switch (subscription) {
  case "free":
    cost = 0;
    break;
  case "pro":
    cost = 100;
    break;
  case "premium":
    cost = 500;
    break;
  default:
    console.log("Invalid subscription type");
}
console.log(cost); // 500 */

// 8. Групування в світч (якщо 1 і 2 зірки = 20, 3,4 = 30 і 5 = 50)
/* const stars = 4;
let price;
switch (stars) {
  case 1:
  case 2:
    price = 20;
    break;
  case 3:
  case 4:
    price = 30;
    break;
  case 5:
    price = 50;
    break;
  default:
    console.log('Не існує');
}
console.log(`Price for the room in the hotel per night is $${price}.`);
 */

//9. Скрипт вибору доставки товара 1 - самовивоз, 2 - кур'єр, 3 - почта, різна меседж для різних опцій)
/* const option = 3;
let message = '';
switch (option) {
  case 1:
    message = 'Ви можете забрати товар завтра з 12:00 в нашому офісі.';
    break;
  case 2:
    message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00.";
    break;
  case 3:
    message = 'Посилка буде відправлена сьогодні.';
    break;
  default:
    message = 'Вам передзвонить наш менаджер.';
}
console.log(message); */

// 10. цикл while (перевірка перед виконанням циклу)
/* let counter = 0;
while (counter <= 10) {
  console.log(counter); // виводить в консоль від 0 до 10
  counter += 1; // додає 1 (counter = counter + 1)
} */

// 11. цикл do ... while (перевірка після виконання циклу)
/* let password = '';
do {
  password = prompt('Введіть пароль довший 4-х символів', '');
} while (password.length < 5); // або <= 4
console.log('Ввели пароль: ', password);
 */

// 12. цикл фор (цикл з лічильником)
/* for (let i = 0; i <= 5; i += 1) {
  console.log(i); // 0 1 2 3 4 5
} */

// 13. Остача від ділення за допомогою циклу
/* const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
  // 10 % 0 =  NaN
  // 10 % 1 =  0
  // 10 % 2 =  0
  // 10 % 3 =  1
  // 10 % 4 =  2
  // 10 % 5 =  0
  // 10 % 6 =  4
  // 10 % 7 =  3
  // 10 % 8 =  2
  // 10 % 9 =  1
} */

// 14. оператор  break (перериває цикл)
/* for (let i = 0; i <= 5; i += 1) {
  console.log(i); // 0 1 2 3 

  if (i === 3) { // перериває цикл після 3
    console.log('Знайшли число 3, перериваємо виконання циклу');
    break;
  }
} */

// 15. введення тільки непарних чисел. оператор continue (перериває ітерацію)
/* const number = 10;
for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }
  console.log('Непарнi: ', i); // 1, 3, 5, 7, 9
}
 */

// 16. Скрипт, який рандомить число для зарплати працівників
// 1) зробиити вари
/* const minSalary = 500;
const maxSalary = 5000;
const employees = 5;
let totalSalary = 0;
// 2) перебрати працівників в циклі
for (let i = 1; i <= employees; i += 1) {
  // 3) згенерувати випадкову зп
  const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
  console.log(`Зп працівника номер ${i} - ${salary}`);
  // 4) прибавити до тотальної суми
  totalSalary += salary;
  console.log('Тотальна сума: ', totalSalary);
} */

// 17. Скрипт, який підраховує суму парних чисел в діапазоні від мін до макс
/* const min = 6;
const max = 13;
let total = 0;
for (let i = min; i < max; i += 1) {
  if (i % 2 === 0) { // для парних чисел
    console.log('Парне: ', i);
    total += i;
  }
  console.log('Сума: ', total);
}
for (let i = min; i <= max; i += 1) {
  if (i % 2 !== 0) { 
    continue; // ігнорувати непарні числа
  }
} */

// 18. Баланс рахунку
/* let balance = 10000;
const payment = 2000;
console.log(`Загальна сума вартості ${payment}.`);
if (payment <= balance) {
  console.log('Ок. Знімаємо кошти. Дякуємо за покупку!');
  balance -= payment;
  console.log(`На рахунку залишилось ${balance} гривнів.`);
} else {
  console.log('На рахунку недостатньо коштів для проведення операції!');
}
console.log('Операцію завершено.'); */

// 19.
/* console.log(!null + 1); // 2 // !null + 1 => !0 + 1 => !false + 1 => true + 1 => 1 + 1 => 2
console.log(!0); // true (бо 0 приводиться до фолс) */
