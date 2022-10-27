'use strict';
// 1st lesson
// 1. Change code below this line
/* const productName = 'Droid';
console.log(productName); // 'Droid'
const pricePerItem = 2000;
console.log(pricePerItem); // 2000 */

// 2. Change code below this line
/* let productName = 'Droid';
let pricePerItem = 2000;
productName = 'Repair droid';
pricePerItem = 3500;
console.log(productName); // 'Repair droid'
console.log(pricePerItem); // 3500 */

// 3. Change code below this line
/* const topSpeed = 160;
const distance = 617.54;
const login = 'mango935';
const isOnline = true;
const isAdmin = false;
console.log(topSpeed); // 160
console.log(distance); // 617.54
console.log(login); // 'mango935'
console.log(isOnline); // true
console.log(isAdmin); // false */

// 4. Change code below this line
/* const pricePerItem = 3500; // (ціна однієї одиниці товару)
const orderedQuantity = 4; // (к-сть одиниць товару в замовленні)
const totalPrice = pricePerItem * orderedQuantity;
console.log(totalPrice); // 14000 (вираз для підрахунку загальної суми замовлення) */

// 5. Change code below this line
/* const productName = 'Droid';
const pricePerItem = 3500;
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
console.log(message); */

// 6. Change code below this line
/* const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
console.log(totalPrice); // 4850
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
console.log(message); // "You ordered droids worth 4850 credits. Delivery (50 credits) is included in total price."
 */

// 7. Change code below this line
/* function sayHi() {
  console.log('Hello, this is my first function!');
}
sayHi();
 */

// 8. Change code below this line
/* function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
}
add(15, 27, 10); // Addition result equals 52
add(10, 20, 30); // Addition result equals 60
add(5, 10, 15); // Addition result equals 30 */

// 9. Change code above this line
/* function add(a, b, c) {
  return a + b + c;
}
add(2, 5, 8); // 15
console.log(add(15, 27, 10)); // 52
console.log(add(10, 20, 30)); // 60
console.log(add(5, 10, 15)); // 30 */

// 10. Change code below this line
/* function makeMessage(name, price) {
  const message = `You picked ${name}, price per item is ${price} credits`;
  return message;
} */

// 11. Change code below this line
/* function calculateTotalPrice (orderedQuantity, pricePerItem) {
  const totalPrice = orderedQuantity * pricePerItem;
  return totalPrice;
}; */

// 12. Change code below this line
/* function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
  console.log(message);
  return message;
}
console.log(makeOrderMessage(3, 2000, 50)); //6050 */

// 12.2. Change code below this line
/* function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  const message = `You ordered droids worth ${
    orderedQuantity * pricePerDroid + deliveryFee
  } credits. Delivery (${deliveryFee} credits) is included in total price.`;
  console.log(message);
  return message;
} */

// 13. Change code below this line
/* function isAdult(age) {
  const passed = age >= 18; // перевіряє чи користувач повнолітній
  return passed;
}
console.log(isAdult(19)); //true
console.log(isAdult(17)); // false
 */

// 14.  Change code below this line
/* function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  const isMatch = password === SAVED_PASSWORD;
  return isMatch;
}
console.log(isValidPassword('mango1903')); //false
console.log(isValidPassword('jqueryismyjam')); // true
 */

// 2nd lesson
// 15. Change code below this line
