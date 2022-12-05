// 1. у змінній result був результат виконання функції makePizza,
// а у змінній pointer було посилання на функцію makePizza.
/* function makePizza() {
  return 'Your pizza is being prepared, please wait.';
}
const result = makePizza(); // результат ф-ї: Your pizza is being prepared, please wait.
const pointer = makePizza; // посилання на ф-ю: function makePizza() */

// 2.колбек
/* function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}
function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName); // ??
}
console.log(makeMessage('Royal Grand', makePizza)); // 'Pizza Royal Grand is being prepared, please wait...'
console.log(makeMessage('Ultracheese', deliverPizza)); // 'Delivering Ultracheese pizza.' */

// 3.
/* makePizza('Ultracheese', function eatPizza(pizzaName) {
  return `Eating pizza ${pizzaName}`;
}); */

// 4. колбеки
const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {
    for (let i = 0; i < this.pizzas.length; i += 1) {
      if (pizzaName === this.pizzas[i]) {
        return onSuccess(pizzaName);
      }
    }
    return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
  },
};

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

/* console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// Your order is accepted. Cooking pizza Smoked.
console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// Error! There is no pizza with a name Big Mike in the assortment.
console.log(pizzaPalace.order('Vienna', makePizza, onOrderError)); */

// 5. .forEach замість фора
// Ф-я приймає 1 параметр orderedItems - масив чисел, і розраховує загальну суму його
// елементів, яка зберігається у змінній totalPrice і повертається як результат
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  /* for (let i = 0; i < orderedItems.length; i += 1) {
    totalPrice += orderedItems[i];
  } */

  orderedItems.forEach(function (num, index) {
    totalPrice += num;
  });

  return totalPrice;
}

// 6. Ф-я filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив,
// в якому будуть тільки ті елементи оригінального масиву, які більші за значення value.
function filterArray(numbers, value) {
  const filteredNumbers = [];

  /*   for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]);
    }
  } */

  numbers.forEach(function (num, index) {
    if (num > value) {
      filteredNumbers.push(num);
    }
  });

  return filteredNumbers;
}

// 7. Ф-я приймає 2 масиви в параметри, і повертає новий масив їхніх спільних елементів,
// тобто тих, які присутні в обох масивах.
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  /*   for (let i = 0; i < firstArray.length; i += 1) {
    if (secondArray.includes(firstArray[i])) {
      commonElements.push(firstArray[i]);
    }
  } */

  firstArray.forEach(function (number, index) {
    if (secondArray.includes(number)) {
      commonElements.push(number);
    }
  });

  return commonElements;
}

// 8. звичайна ф-я -> стрєлочна ф-я
/* function calculateTotalPrice(quantity, pricePerItem) {
  return quantity * pricePerItem;
} */
const calculateTotalPrice1 = (quantity, pricePerItem) => quantity * pricePerItem;

const calculateTotalPrice2 = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};

// 9.
// Оголошення функції
/* numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
});

// Анонімна стрілочна функція
numbers.forEach((number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
}); */

// 10.
/* const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach(item => (totalPrice += item));

  return totalPrice;
}; */

// 11.
/* const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}; */

// 12.
/* const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach(element => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  return commonElements;
}; */

// 13. грязна ф-я -> чиста ф-я
// Ф-я changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент,
// значення якого - це парне число, додаючи до нього значення параметра value.

const changeEven = (numbers, value) => {
  const newArray = [];
  numbers.forEach(element => {
    if (element % 2 === 0) {
      newArray.push((element += value));
    } else {
      newArray.push(element);
    }
  });
  return newArray;
};

/* console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]
console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // [12, 18, 3, 7, 14, 16]
console.log(changeEven([17, 24, 68, 31, 42], 100)); // [17, 124, 168, 31, 142]
console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // [144, 13, 81, 192, 136, 154] */

// 14. масив довжин назв планет
const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
const planetsLengths = planets.map(planet => planet.length);
/* console.log(planetsLengths); // [ 5, 4, 5, 7 ] */

// 15. масив назв книг
/* const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    genres: ['adventure', 'history'],
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    genres: ['fiction', 'mysticism'],
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    genres: ['horror', 'mysticism', 'adventure'],
  },
]; */

/* const titles = books.map(book => book.title); */

// 16. масив усіх жанрів книг (викор флетМеп, бо жанри це масив у об'єкті)
/* const genres = books.flatMap(book => book.genres); */

// 17. ф-я повертає масив імен користувачів (властивість name) з масиву об'єктів
// в параметрі users.
/* const getUserNames = users => {
  return users.map(user => user.name);
}; */

// 18. масив поштових адрес користувачів
/* const getUserEmails = users => {
  return users.map(user => user.email);
}; */

// 19. масив парних чисел i масив непарних чисел
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);

// 20.
/* const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((genres, index, array) => array.indexOf(genres) === index);
console.log(allGenres); // [ "adventure", "history", "fiction", "mysticism",
// "horror", "mysticism", "adventure" ]
console.log(uniqueGenres); // [ "adventure", "history", "fiction", "mysticism",
// "horror" ] */

// 21.
/* const MIN_RATING = 8;
const AUTHOR = 'Bernard Cornwell';

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR); */

// 22.
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

// 23.
const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter(user => user.age > minAge && user.age < maxAge);
};

// 24.
const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => user.friends.includes(friendName));
};

// 25.
const getFriends = users => {
  return users
    .flatMap(user => user.friends)
    .filter((friends, index, array) => array.indexOf(friends) === index);
};

// 26. масив онлайн користувачів
const getActiveUsers = users => {
  return users.filter(user => user.isActive);
};

// 27. масив оффлайн користувачів
const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

// 28.
/* const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR = 'Robert Sheckley';

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR); */

// 29.
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

// 30. всі ел парні/непарні
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every(element => element % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(element => element % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(element => element % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(element => element % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(element => element % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(element => element % 2 !== 0);

// 31.
const isEveryUserActive = users => {
  return users.every(user => user.isActive);
};

// 32.
/* const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
 */
const anyElementInFirstIsEven = firstArray.some(element => element % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(element => element % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(element => element % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(element => element % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(element => element % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(element => element % 2 !== 0);

// 33.
const isAnyUserActive = users => {
  return users.some(user => user.isActive);
};

// 34. функціонал підрахунку середнього часу, проведеного в іграх
const players = [
  { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
  { name: 'Poly', playtime: 469, gamesPlayed: 2 },
  { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
  { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
];

const playtimes = Object.values(players); // [1270, 468, 710, 244]
const totalPlayTime = playtimes.reduce((acc, value) => acc + value, 0);
const averagePlayTime = totalPlayTime / playtimes.length;

// 35.
const totalAveragePlaytimePerGame = players.reduce(
  (acc, player) => acc + player.playtime / player.gamesPlayed,
  0,
);

// 36.
const calculateTotalBalance = users => {
  return users.reduce((total, user) => total + user.balance, 0);
};

// 37. рахує к-сть друзів у користувачів
const getTotalFriendCount = users => {
  return users.reduce((acc, user) => [...acc, ...user.friends], []).length;
};

// 38. сортує по зростанню і за алфавітом
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = ['Tanith Lee', 'Bernard Cornwell', 'Robert Sheckley'];

/* const ascendingReleaseDates = [...releaseDates].sort((prev, next) => prev - next); */
const alphabeticalAuthors = [...authors].sort((prev, next) => prev.localeCompare(next));

// 39.
const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b); // зростає
const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a); // спадає

// 40. за алф і зворотному алфавітному порядку
/* const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a)); */

// 41.
/* const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));
const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating); */

// 42. масив користувачів, відсортований за зростанням їх балансу
const sortByAscendingBalance = users => {
  return [...users].sort((a, b) => a.balance - b.balance);
};

// 43. масив користувачів, відсортований за спаданням кількості їхніх друзів
const sortByDescendingFriendCount = users => {
  return [...users].sort((a, b) => b.friends.length - a.friends.length);
};

// 44. масив користувачів, відсортований за їх ім'ям в алфавітному порядку.
const sortByName = users => {
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
};

// 45.
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  {
    title: 'The Dreams in the Witch House',
    author: 'Howard Lovecraft',
    rating: 8.67,
  },
];

const MIN_BOOK_RATING = 8;

/* const names = [...books]
  .filter(book => book.rating > MIN_BOOK_RATING)
  .map(book => book.author)
  .sort((a, b) => a.localeCompare(b));
console.log(names); */

/* const goodBooks = [...books].filter(book => book.rating > MIN_BOOK_RATING);
console.log(goodBooks); // 0: Object { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.38 }

const authorArray = goodBooks.map(book => book.author);
console.log(authorArray); // [ "Bernard Cornwell", "Robert Sheckley", "Howard Lovecraft"]

const sortedArray = authorArray.sort((a, b) => a.localeCompare(b));
console.log(sortedArray); // ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"] */

// 46.
const getNamesSortedByFriendCount = users => {
  return [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
};

// 47.
/* const getSortedFriends = users => {
   return users.map(user => user.friends).filter((friends, index, array) => 
   array.indexOf(friends) === index).sort((a, b) => a.localeCompare(b));
}; */

const getSortedFriends = users => {
  return users
    .map(user => user.friends)
    .flat(1)
    .filter((friends, index, array) => array.indexOf(friends) === index)
    .sort((a, b) => a.localeCompare(b));
};

// 48. повертає загальний баланс користувачів (властивість balance),
// стать яких(властивість gender) збігається зі значенням параметра gender.
const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter(user => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0);
};
/* console.log(
  getTotalBalanceByGender(
    [
      {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        gender: 'male',
      },
      {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        gender: 'female',
      },
      {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        gender: 'male',
      },
      {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        gender: 'female',
      },
      {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
        isActive: true,
        balance: 3951,
        gender: 'male',
      },
      {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
        isActive: false,
        balance: 1498,
        gender: 'male',
      },
      {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        gender: 'female',
      },
    ],
    'female',
  ),
); */
