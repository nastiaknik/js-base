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
console.log(isValidPassword('jqueryismyjam')); // true */

// 2nd lesson
// 15. Change code below this line
/* function checkAge(age) {
  let message;
  if (age >= 18) {
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }
  return message;
} */

// 16.
/* function checkStorage(available, ordered) {
  let message;
  if (ordered > available) { // перевіряє чи к-сть одиниць в замовленні не перевищує к-сть товарів на складі
    message = 'Not enough goods in stock!';
    console.log(message);
  } else {
    message = 'Order is processed, our manager will contact you.';
  }
  return message;
} */

// 17. Комбінований оператор присвоєння
/* let a = 5;
let b = 10;
let c = 15;
let d = 20;

a += 2; // a = a + 2;
b -= 4; // b = b - 4;
c *= 3; // c = c * 3;
d /= 10; // d = d / 10;

console.log(a, b, c, d); // 7 6 45 2 */

// 18.  Перевірка балансу
/* function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = 'Insufficient funds!';
    console.log(message);
  } else {
    const creditsLeft = customerCredits - totalPrice;
    message = `You ordered ${orderedQuantity} droids, you have ${creditsLeft} credits left`;
    console.log(message);
  }
  return message;
}
makeTransaction(3000, 5, 23000); // "You ordered 5 droids, you have 8000 credits left"
makeTransaction(1000, 3, 15000); // "You ordered 3 droids, you have 12000 credits left"
makeTransaction(5000, 10, 8000); // "Insufficient funds!"
makeTransaction(2000, 8, 10000); // "Insufficient funds!"
makeTransaction(500, 10, 5000); // "You ordered 10 droids, you have 0 credits left"
 */
// 19. Перервірка паролю
/* function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  if (password === null) {
    message = 'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) {
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }
  return message;
}
 */

// 20.
/* function checkStorage(available, ordered) {
  let message;
if (ordered === 0) {
  message = "There are no products in the order!";
} else if (ordered > available) {
  message = "Your order is too large, there are not enough items in stock!";
} else {
  message = "The order is accepted, our manager will contact you";
}
  return message;
} */

// 21. Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок
/* function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  return isInRange;
}
isNumberInRange(10, 30, 17); // true
isNumberInRange(10, 30, 5); // false
isNumberInRange(20, 50, 24); // true
isNumberInRange(20, 50, 76); // false
 */

// 22. Перевіряє чи є доступ
/* function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'pro' || subType === 'vip';
  return canAccessContent;
} */

// 23.
/* function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; 
  return isNotInRange;
} */

/// 24.
/* function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0; // 0%
  const BRONZE_DISCOUNT = 0.02; // 2%
  const SILVER_DISCOUNT = 0.05; // 5%
  const GOLD_DISCOUNT = 0.1; // 10%
  let discount;
if (totalSpent >= 5000 && totalSpent < 20000) {
  discount = BRONZE_DISCOUNT;
} else if (totalSpent >= 20000 && totalSpent < 50000) {
  discount = SILVER_DISCOUNT;
} else if (totalSpent >= 5000) {
  discount = GOLD_DISCOUNT;
} else {
discount = BASE_DISCOUNT;
}  
  return discount;
} */

// 25.
/* function checkStorage(available, ordered) {
  let message;
  // 1) 
  message =
    ordered > available
      ? 'Not enough goods in stock!'
      : 'The order is accepted, our manager will contact you';
  // 2) 
  if (ordered > available) {
    message = "Not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }
  return message;
}
 */

// 26.
/* function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
  return message;
} */

// 27.
/* function getSubscriptionPrice(type) {
  let price;

  // 1)
  switch (type) {
    case 'starter':
      price = 0;
      break;

    case 'professional':
      price = 20;
      break;

    case 'organization':
      price = 50;
      break;
  }
  return price;
}

// 2)
if (type === "starter") {
  price = 0;
} else if (type === "professional") {
  price = 20;
} else if (type === "organization") {
  price = 50;
} */

// 28.
/* function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  // 1)
  switch (password) {
    case null:
      message = 'Canceled by user!';
      break;
    case ADMIN_PASSWORD:
      message = 'Welcome!';
      break;
    default:
      message = 'Access denied, wrong password!';
  }
  return message;
}

// 2)
  if (password === null) {
    message = "Canceled by user!";
  } else if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  } */

// 29. Перевіряє можливість і ціни доставки до країни
/* function getShippingCost(country) {
  let message;
  let price;
  let toCountry;
switch (country) {
  case "China":
  toCountry = "China";
  price = 100;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;
  case "Chile":
    price = 250;
    toCountry = "Chile";
    message = `Shipping to ${country} will cost ${price} credits`;
    break;
  case "Australia":
    price = 170;
    toCountry = "Australia";
    message = `Shipping to ${country} will cost ${price} credits`;
    break;
  case "Jamaica":
    price = 120;
    toCountry = "Jamaica";
    message = `Shipping to ${country} will cost ${price} credits`;
    break;
  default: 
    message = "Sorry, there is no delivery to your country"
}
  return message;
} */

// 30.
/* function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; 
  return message;
} */

// 31.
/* const courseTopic = 'JavaScript essentials';
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1]; */

// 32.
/* function getSubstring(string, length) {
  const substring = string.slice(0, length);
  return substring;
} */

// 33.
/* function formatMessage(message, maxLength) {
  let result;
  if (message.length > maxLength) {
    result = message.slice(0, maxLength) + '...';
  } else {
    result = message;
  }
  return result;
} */

// 34.
/* function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // не забувай дужки!!!
  return normalizedInput;
} */

// 35.
/* function checkForName(fullName, name) {
 const result = fullName.includes(name); 
  return result;
} */

//36. Перевірка на спам
/* function checkForSpam(message) {
  let result;
  const normalizedMessage = message.toLowerCase();
  result = normalizedMessage.includes('spam') || normalizedMessage.includes('sale');
  return result;
} */
