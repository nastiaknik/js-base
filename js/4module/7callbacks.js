// 1. Виводимо ф-ю у консоль, не викликаючи її
/* function greet(name) {
  return `Ласкаво просимо ${name}.`;
}
console.log(greet); // ƒ greet() { return `Ласкаво просимо ${name}.`; }
// function greet(name) length:1 name:"greet" prototype:Object <prototype>:function () */

// мій приклад колбек ф-ї, виводимо ф-ю у консоль не викликаючи її
/* function refresh(status) {
  console.log('Loading... ');
} */
/* console.log(refresh); // function refresh(status)*/

// 2. Колбек-функція
/* function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
} */

// 3. Функція вищого порядку
/* function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
} */
/* registerGuest('Манго', greet); */

// мій приклад ф-ї вищого порядку
/* function deleteStatus(status, callback) {
  console.log(`Deleting your status...`);
  callback(status);
} */
/* deleteStatus("it's all complicated", refresh); // Deleting your status... Loading... */

// 4. Передаємо інлайн функцію у якості колбека
/* registerGuest('Манго', function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
}); */

/* deleteStatus('All complicated...', function refresh(status) {
  // без function на початку!
  console.log('Loading...');
}); */

// 5. Абстрагування повторення
// 1)
/* for (let i = 0; i < 10; i += 1) {
  console.log(i);
}

// 2)
function repeatLog(n) {
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }
}
repeatLog(5);

// 3) ?
function repeat(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
} */

// 6. Метод перебирання forEach
/* const numbers = [5, 10, 15, 20, 25];
 */
// Класичний for
/* for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Індекс ${i}, значення ${numbers[i]}`);
} */

// .forEach
/* numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
}); */

//
/* const usersAge = [17, 5, 12, 24, 19, 45];
for (let i = 0; i < usersAge.length; i += 1) {
  console.log(usersAge[i]); // 17 5 12 24 19 45
}

usersAge.forEach(function (age, num) {
  console.log(num + 1, ': ', age);
}); */

// 7. стрілочна функція
// Звичайне оголошення функції
/* function classicAdd(a, b, c) {
  return a + b + c;
}

// стрілочна функція
const arrowAdd = (a, b, c) => {
  return a + b + c;
};

const add = a => {
  // якщо 1 параметр можна беж дужок ()
  return a + 5;
};

const greet = () => {
  // якщо немає параметрів то тільки ()
  console.log('Привіт!');
}; */

// 8.
/* const nums = [5, 10, 15, 20, 25];

// Оголошення функції
nums.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
});

// Анонімна стрілочна функція
nums.forEach((number, index) => {
  // без function
  console.log(`Індекс ${index}, значення ${number}`);
}); */

// 9. Імперативний підхід
/* const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 3) {
    filteredNumbers.push(numbers[i]);
  }
}
console.log(filteredNumbers); // [4, 5] */

// Декларативний підхід
/* const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(value => value > 3);
console.log(filteredNumbers); // [4, 5] */

// 10.
const doMath = function (a, b, callback) {
  return callback(a, b);
};

// додавання
const add = function (x, y) {
  return x + y;
};

// віднімання
const subtract = (x, y) => x - y;

// множення
const multiply = function (x, y) {
  return x * y;
};

// ділення
const divide = (x, y) => x / y;

/* console.log(doMath(2, 3, add)); // 5
console.log(doMath(9, 3, divide)); // 3
console.log(doMath(6, 9, subtract)); // -3
console.log(doMath(3, 3, multiply)); // 9
console.log(doMath(4, 16, divide)); // 0.25
console.log(doMath(5, 3, subtract)); // 2 */

// 11. const filter = function (array, test) {
const filter = function (array, test) {
  const filteredArray = [];

  for (const el of array) {
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }
  return filteredArray;
};

const callback1 = function (value) {
  return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
/* console.log(r1); // [3, 4, 5] */

const r2 = filter([1, 2, 3, 4, 5, 6], function (value) {
  return value <= 4;
});
/* console.log(r2); // [1, 2, 3, 4] */

// 12. ф-я, яка повертає рядок
const foo = () => 'Mango';

// 13.
const person = {
  name: 'Name',
  surname: 'Surname',
  age: 0,
};

const me = Object.create(person);
me.name = 'Anni';
me.age = 20;
/* console.log(me); // { name: "Anni", age: 20 }
console.log(me.surname); // Surname */
