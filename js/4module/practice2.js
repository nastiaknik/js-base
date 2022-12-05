// 1. ф-я, яка приймає 1 параметр key і перевіряє чи має об'єкт такий ключ і повертає
// true/false
const obj = {
  name: 'Alex',
  car: 'Lamborgini',
  carColor: 'yellow',
  height: 196,
  age: 23,
  isSingle: true,
};
// 1)
const hasProperty = (obj, key) => Object.keys(obj).includes(key);

// 2)
const checkKey = (obj, key) => key in obj;

/* console.log(checkKey(obj, 'name')); // true
console.log(hasProperty(obj, 'name')); // true
console.log(checkKey(obj, 'location')); // false
console.log(hasProperty(obj, 'location')); // false */

// 2. ф-я для перевірки об'єкту - чи є елемент простим об'єктом чи масивом чи налл
/* console.log(typeof 19); // number
console.log(typeof 'que'); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof Nan); // undefined
console.log(typeof {}); // object
console.log(typeof []); // object 
console.log(typeof null); // object */

const checkType = value => {
  if (typeof value === 'object' && !value) {
    return null;
  } else if (Array.isArray(value)) {
    return Array;
  }
  return typeof value;
};

/* console.log(checkType('que')); // string
console.log(checkType(true)); // boolean
console.log(checkType(undefined)); // undefined
console.log(checkType({})); // object
console.log(checkType([])); // array
console.log(checkType(null)); // null */
/* console.log(checkType(Nan)); // error */

// 3. ф-я, яка ділить всі числові властивості об'єкта на 2

const multiplyNumeric = obj => {
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] /= 2;
    }
  }
  return obj;
};

/* console.log(multiplyNumeric(obj)); // { name: "Alex", car: "Lamborgini", 
// carColor: "yellow", height: 98, age: 11.5, isSingle: true } */

// 4. об'єкт з зарплатами порахуй total, якщо {} об'єкт порожній тотал = 0
const salaries = {
  Mango: 570,
  Poly: 900,
  Ajax: 1500,
};

const calcSalarySum = obj => Object.values(obj).reduce((total, salary) => total + salaries, 0);

// 5. ф-я, яка приймає масив об'єктів і рядок з назвою каменю
// повертає загальну вартість каменя з таким ім'ям

const stones = [
  { name: 'Ruby', price: 460, quantity: 2 },
  { name: 'Diamond', price: 1500, quantity: 10 },
  { name: 'Gem', price: 1000, quantity: 6 },
];

// 1) reduce()
const calcTotalPrice = (stones, stoneName) => {
  return stones.reduce((total, stone) => {
    if (stone.name.toLowerCase() === stoneName.toLowerCase()) {
      return stone.price * stone.quantity;
    }
    return total;
  }, 0);
};
/* console.log(calcTotalPrice(stones, 'Gem')); // 6000 */

// 2) filter()
const calcPrice = (stones, stoneName) => {
  const { price, quantity } = stones.filter(({ name }) => name === stoneName);
  return price * quantity;
};

// 3) find()
const calcTotal = (stones, stoneName) => {
  const { price, quantity } = stones.find(({ name }) => name === stoneName);
  return price * quantity;
};

// 6. код, який видаляє ел з масиву
// 1) for + if
const deleteElement = function (array, elementToRemove) {
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    if (element === elementToRemove) {
      array.splice(i, 1);
    }
  }
  return array;
};

let numbersToDelete = [15, 17, 19, 21, 26, 28];

/* console.log(deleteElement(numbersToDelete, 26)); // [ 15, 17, 19, 21, 28 ] */

// 2) filter()
const deleteItem = function (array, itemToRemove) {
  return array.filter(item => item !== itemToRemove);
};
/* console.log(deleteItem(numbersToDelete, 26)); // [ 15, 17, 19, 21, 28 ] */

let numbers = [15, 17, 19, 21, 28];

// 7. метод, який розбиває масив на частини визначеного розміру
function chunkArray(array, divider) {
  const result = [];
  let index = 0;
  while (index < array.length) {
    const item = array.slice(index, divider + index);
    result.push(item);
    index += divider;
  }
  return result;
}

/* console.log(chunkArray(numbers, 1)); // [[15],[17],[19],[21],[28]]
console.log(chunkArray(numbers, 2)); // [[15,17], [19,21], [28]]
console.log(chunkArray(numbers, 3)); // [[15,17,19], [21, 28]] */

// 8. ф-я, яка об'єднює необмежені масиви, які передаються в параметрах
// 1)
function addArrays(...arg) {
  return arg.flatMap(elem => elem);
}
// 2)
function combineArrays(...arg) {
  let array = [];
  arg.forEach(element => {
    array = array.concat(element);
  });
  return array;
}
/* console.log(addArrays([17, 19], [21, 28])); // [ 17, 19, 21, 28 ]
console.log(combineArrays([17, 19], [21, 28])); // [ 17, 19, 21, 28 ] */

// 9. ф-я, яка рахує к-сть літер в рядку
// 1) регулярний вираз
const letterCount = (string, letter) => {
  const regular = new RegExp(`${letter}`, 'gi');
  return string.match(regular).length;
};
// 2) split -> filter -> length
const calculateLetters = (string, letter) => {
  return string.split('').filter(elem => elem.toLowerCase() === letter).length;
};

// 10. ф-я, яка перевіряє чи слово є паліндромом (читається з 2 сторін однаково)

const palindromCheck = word => word.split('').reverse().join('') === word;

/* console.log(palindromCheck('madam')); // true
console.log(palindromCheck('banan')); // false */
