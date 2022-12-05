// 1. return
/* function checkAge(age) {
  if (age >= 18) {
    return 'You are an adult'; // раннє повернення, якщо умова трушна
  }
  return 'You are a minor'; // якщо умова - false
} */

// 2. [] - літерал масиву
/* const fruits = ['apple', 'plum', 'pear', 'orange']; */

// 3. Індексація
/* const firstElement = fruits[0]; // 1ий ел
const secondElement = fruits[1]; // другий елемент масиву
const lastElement = fruits[fruits.length - 1]; // ост елемент (від довжини віднімаємо 1) */

// 4. можна змінити значення елементів
/* fruits[1] = 'peach';
fruits[3] = 'banana'; */

// 5. функція getExtremeElements(array), яка приймає 1 параметр array - масив елементів.
// Функція повертає масив з 2ох елементів - 1ого і ост елемента параметра array.
/* function getExtremeElements(array) {
  const fireFirst = array[0];
  const fireLast = array[array.length - 1];
  const fireEnd = [fireFirst, fireLast];
  return (array = fireEnd);
}
console.log(getExtremeElements([1, 2, 3, 4, 5])); // [1, 5] */

// 6. split(delimiter) - розділяє слова роздільником (рядок => масив)
function splitMessage(message, delimiter) {
  let words;
  words = message.split(delimiter);
  return words;
}

// 7. функція, яка б рахувала ціну гравірування, залежно від к-сті слів і ціни за слово.
// функція приймає рядок, що складається зі слів, розділених лише пробілами (message)
// та ціну гравірування одного слова(параметр pricePerWord).
/* function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(' ');
  const lettersAmount = words.length;
  const totalPrice = lettersAmount * pricePerWord;
  return totalPrice;
}
console.log(calculateEngravingPrice('JavaScript is in my blood', 10)); // 50
console.log(calculateEngravingPrice('JavaScript is in my blood', 20)); // 100 */

// 8. .join() - масив -> рядок (з'єднує едементи масиву в рядок)
/* function makeStringFromArray(array, delimiter) {
  let string;
  string = array.join(delimiter);
  return string;
} */

// 9. SLUG
/* function slugify(title) {
  const slug = title.toLowerCase().split(' ').join('-');
  return slug;
}
console.log(slugify('English for developer'));
console.log(slugify('Ten secrets of JavaScript'));
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); */

// 10. firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів
/* const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(-3);
console.log(firstTwoEls); // ['apple', 'plum']
console.log(nonExtremeEls); // ['plum', 'pear', 'orange']
console.log(lastThreeEls); // ['pear', 'orange', 'banana'] */

// 11.
/* function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray);
  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength); // обрізає до максим довжини
  }
  return newArray;
} */

// 12.
/* const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) {
  console.log(i);
} */

// 13. ф-я приймає ціле число (параметр number) і повертає суму всіх цілих чисел
// від одиниці і до цього числа.
/* 
function calculateTotal(number) {
  let firstNumbers = 0;
  for (let i = 0; i <= number; i += 1) {
    firstNumbers += i;
  }
  return firstNumbers;
}
console.log(calculateTotal(1)); // 1
console.log(calculateTotal(3)); // 6 = 1+2+3
console.log(calculateTotal(7)); // 1+2+3+4+5+6+7= 28 */

// 14. ф-я яка знаходить найдовше слово в рядку
/* function findLongestWord(string) {
  let words = string.split(' ');
  let longestWord = words[0];
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // jumped
console.log(findLongestWord('Google do a roll')); // google
console.log(findLongestWord('May the force be with you')); // force */

// 15. створює масив від мін числа до макс числа включно
/* function createArrayOfNumbers(min, max) {
  const numbers = [];
  for (let i = min; i <= max; i += 1) {
    numbers.push(min);
    min += 1;
  }
  return numbers;
}
console.log(createArrayOfNumbers(1, 3)); // [1,2,3]
console.log(createArrayOfNumbers(14, 17)); // [14,15,16,17]
console.log(createArrayOfNumbers(29, 34)); // [29,30,31,32,33,34]
 */

// 16. (23) замість += метод пуш()
// ф-я приймає масив чисел (параметр numbers) і повертає новий масив,
// в якому будуть тільки ті елементи масиву numbers, які більші за value(число).
function filterArray(numbers, value) {
  let newArray = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
}

// 17. повертає масив зі спільними елементами
function getCommonElements(array1, array2) {
  const newArray = [];
  for (const element of array1) {
    if (array2.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
}

// 18. (28)
const a = 3 % 3; // 0
const b = 4 % 3; // 1
const c = 11 % 8; // 3
const d = 12 % 7; // 5
const e = 8 % 6; // 2

// 19. (29) ф-я повертає масив усіх парних чисел від start до end.
function getEvenNumbers(start, end) {
  const numbers = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      numbers.push(i);
    }
  }
  return numbers;
}

// 20. намбер = 10
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

// 21. 1е число яке ділиться на дівайзер без остачі
function findNumber(start, end, divisor) {
  for (let i = start; i <= end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }
}

// 22. ф-я includes(array, value), яка робить те саме, що і метод масиву
// масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value,
// повертаючи true, якщо присутнє, і false в іншому випадку.
function includes(array, value) {
  for (let element of array) {
    if (element === value) {
      return true;
    }
  }
  return false;
}
