// 1. Оголошення функції
/* function verb() {} */

// 2. Виклик функції
/* verb(); // 'Це лог на момент виклику функції multiply' */

// 3. Оголошення параметрів x, y, z
/* function multiply(x, y, z) {
  console.log(x * y * z); // параметри
} */

// 4. Передача аргументів
/* multiply(2, 3, 5); // 2*3*5 = 30 // аргументи
multiply(4, 8, 12); // 384 */

// 5. return
/* function multiplyElements(x, y, z) {
  return x * y * z; // Повертаємо результат виразу множення, код у ф-ї після не виконується
}
console.log(multiplyElements(2, 3, 5)); // 30 */

// 6. Параметри за замовчуванням
/* function count(countFrom = 0, countTo = 10, step = 1) {
  for (let i = countFrom; i <= countTo; i += step) {
    console.log(i);
  }
}
count(); // 1 2 3 4 5 6 7 8 9 10 // якщо нічого не передати - виведуться дефолтні знач
count(1, 5); // 1 2 3 4 5 // можна змінювати значення
count(7); // 7 8 9 10 // можна передати тільки 1е значення */

// 7. Псевдомасив arguments
/* function multiply() {
  let total = 1;
  for (const argument of arguments) {
    total *= argument;
  }
  return total;
}
console.log(multiply(1, 2, 3)); //  6 */

// 8. 1) if ... else
/* function withdraw(amount, balance) {
  if (amount === 0) {
    console.log("Для проведення операції введіть суму більшу за нуль");
  } else if (amount > balance) {
    console.log("Недостатньо коштів на рахунку");
  } else {
    console.log("Операція зняття коштів проведена успішно");
  }
} */

// 2) return
/* function withdraw(amount, balance) {
  // Якщо умова виконується, викликається console.log і вихід із функції. Код після тіла if не виконається.
  if (amount === 0) {
    console.log('Для проведення операції введіть суму більшу за нуль');
    return;
  }
  // Якщо умова першого if не виконалась, його тіло пропускається та інтерпретатор доходе до 2-го if.
  if (amount > balance) {
    console.log('Недостатньо коштів на рахунку');
    return;
  }
  // Якщо жоден із попередніх if не виконався, інтерпретатор виконує його.
  console.log('Операція зняття коштів проведена');
} */

// 9. Функція, яка рахує суму елементів 2ох масивів
/* function addition(array1, array2) {
  let total = 0;

  const numbers = array1.concat(array2); // об'єднюємо масиви
  for (const number of numbers) {
    total += number;
  }
  return total;
}
console.log(addition([5, 10, 15, 20], [10, 20, 30])); // 110 */

// 10. Напиши функцію findSmallesNumber(numbers) для пошуку найменшого числа в масиві
/* 
const findSmallesNumber = function (numbers) {
  let smallestNumber = numbers[0];

  for (const number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }

  return smallestNumber;
};
console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8 */

// 11. Ф-я filterNumbers(array [, number1, ...]), яка вертає новий масив, в якому
// будуть тільки ті аргументи, які є в двох масивах
/* const filterNumbers = function (array, ...rest) {
  console.log('array: ', array);
  console.log('rest: ', rest);
  const elementsInBothArrays = [];

  for (const element of array) {
    if (rest.includes(element)) {
      elementsInBothArrays.push(element);
    }
  }
  return elementsInBothArrays;
};

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200] */
