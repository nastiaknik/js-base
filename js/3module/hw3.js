// part 1
// 1 i 2 ств об'єкта
/* const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
}; */

/* console.log(apartment); // { imgUrl: "https://via.placeholder.com/640x480",
// descr: "Spacious...", rating: 4, price: 2153, tags: (3)[…], owner: {… } } */

// 3. доступ до властивості об'єкта через крапку
/* const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;
console.log(aptRating); // 4
console.log(aptDescr); // "Spacious apartment in the city center"
console.log(aptPrice); // 2153
console.log(aptTags); // [ "premium", "promoted", "top" ] */

// 4. через крапку i через ['']
/* const ownerName = apartment.owner.name; // = apartment['owner']['name'];
const ownerPhone = apartment.owner.phone; // = apartment['owner']['phone'];
const ownerEmail = apartment.owner.email; // = apartment['owner']['email'];
const numberOfTags = apartment.tags.length; // = apartment['tags']['length'];
const firstTag = apartment.tags[0]; // = apartment['tags'][0];
const lastTag = apartment.tags[apartment.tags.length - 1];
// = apartment['tags'][apartment['tags'].length - 1];*/
/* console.log(ownerName); // 'Henry'
console.log(ownerPhone); // '982-126-1588'
console.log(ownerEmail); // 'henry.carter@aptmail.com'
console.log(numberOfTags); // 3
console.log(firstTag); // premium
console.log(lastTag); // top */

// 5.
/* const aptRating = apartment['rating'];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags']; */

// 6. зміна значень властивостей
/* apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = 'Henry Sibola';
apartment.tags.push('trusted'); */

// 7. додавання нових властивостей
/* apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: 'Jamaica',
  city: 'Kingston',
}; */

// 8. короткі властивості
/* const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  name,
  price,
  image,
  tags,
}; */
// 9. обчислювальні властивості
/* const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  [emailInputName]: 'henry.carter@aptmail.com',
  [passwordInputName]: 'jqueryismyjam',
}; */

// 10. Перебери об'єкт apartment, використовуючи цикл for...in,
// і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.
/* const keys = [];
const values = [];

for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}
console.log(keys); // [ "imgUrl", "descr", "rating", "price", "tags", "owner",
// "area", "rooms", "location" ]
console.log(values); // [ "https...", "Spacious...", 4.7, 5000, […], {…}, 60, 3, {…} ] */

// 11. додаємо в цикл for...in перевірку на власну властивість.
/* for (const key in apartment) {
  if (apartment.hasOwnProperty(key)) {
    keys.push(key);
    values.push(apartment[key]);
  }
} */

// 12. ф-я countProps(object), яка рахує і повертає к-сть власних властивостей
// об'єкта в параметрі object.
/* function countProps(object) {
  let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  return propCount;
} */

// 13. Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment,
// і додай в масив values всі значення його властивостей.
/* const values = [];
const keys = Object.keys(apartment);
for (const key of keys) {
  values.push(apartment[key]);
} */

// 14. рефакторинг функції countProps(object)
/* function countProps(object) {
  let propCount = 0;
  const keys = Object.keys(object);
  for (const key of keys) {
    propCount += 1;
  }
  return propCount;
} */

// 15.
/* const keys = Object.keys(apartment);
const values = Object.values(apartment); */

// 16. Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат,
// де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата.
// Функція повинна розрахувати загальну суму зарплат співробітників і повернути її.
/* function countTotalSalary(salaries) {
  let totalSalary = 0;
  const values = Object.values(salaries);

  for (const salary of values) {
    // XD не ін а оф
    totalSalary += salary;
  }
  return totalSalary;
}
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); //330
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); //400
console.log(countTotalSalary({})); //0 */

// 17. Перебери масив об'єктів colors. Додай у масив hexColors значення властивостей hex,
// а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.
/* const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex); // color, not colorS!
  rgbColors.push(color.rgb);
}
console.log(hexColors);
console.log(rgbColors); */

// part 2
// 18. Функція шукає об'єкт продукту з таким ім'ям в масиві products
// і повертає його ціну(властивість price).
// Якщо продукт з такою назвою не знайдений, функція повинна повертати null.
/* const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const { name, price } of products) {
    if (productName === name) {
      return price;
    }
  }
  return null;
} */

// 19. Напиши функцію, яка приймає один параметр propName - ім'я (ключ) властивості.
// Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного
// об'єкта в масиві products.Якщо в об'єктах відсутні властивості
// з таким ім'ям, функція повинна повернути порожній масив.

/* const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  const values = [];

  for (const product of products) {
    if (product[propName]) {
      values.push(product[propName]);
    }
  }
  return values;
}

console.log(getAllPropValues('name')); // ["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues('quantity')); // [4, 3, 7, 9]
console.log(getAllPropValues('price')); // [1300, 2700, 400, 1200]
console.log(getAllPropValues('category')); // [] */

// 20. Функція повинна повернути загальну вартість товару з таким ім'ям з масиву products.
/* const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  let totalPrice = 0;

  for (const product of products) {
    if (product.name === productName) {
      totalPrice += product.price * product.quantity;
    }
  }
  return totalPrice;
} */

// 21. деструктуризація властивостей об'єкта
/* const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
const { yesterday, today, tomorrow } = highTemperatures;
// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
const meanTemperature = (yesterday + today + tomorrow) / 3; */

// 22. значення за замовчуванням для icon
/* const {
  yesterday,
  today,
  tomorrow,
  icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;

const meanTemperature = (yesterday + today + tomorrow) / 3; */

// 23. Заміна назв властивостей
/* const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;

const meanTemperature = (highYesterday + highToday + highTomorrow) / 3; */

// 24.
/* const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

for (const { hex, rgb } of colors) {
  // const { hex, rgb } = colors;
  hexColors.push(hex);
  rgbColors.push(rgb);
} */

// 25.
/* const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
} = forecast; */

// 26.
/* function calculateMeanTemperature(forecast) {
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
} */

// 27. У змінній scores зберігається масив результатів тестування.
// Використовуючи розподіл і методи Math.max() і Math.min(), доповни код таким чином,
// щоб у змінній bestScore був найвищий бал, а у worstScore - найнижчий.
/* const scores = [89, 64, 42, 17, 93, 51, 26];

const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores); */

// 28. У змінних зберігаються результати тестування окремих груп.
// У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.
/* const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores); */

// 29.
/* const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = { ...defaultSettings, ...overrideSettings }; */

// 30. Напиши функцію, яка приймає 1 параметр data - об'єкт з властивостями:
// 1) text - текст завдання.
// 2) category - категорія завдання.
// 3) priority - пріоритет завдання.
// Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму
// параметр data.У новому об'єкті повинна бути властивість completed,
// значення якої зберігається в однойменній локальній змінній.
// В параметрі data гарантовано буде тільки властивість text, а category і priority,
// можуть бути відсутніми. Тоді, в новому об'єкті завдання, у властивостях category
// і priority повинні бути значення за замовчуванням, що зберігаються в однойменних
// локальних змінних.

/* function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  const oldData = { category, priority, completed };
  const newData = { ...oldData, ...data };
  return newData;
}
console.log(makeTask({})); // { category: 'General', priority: 'Normal', completed: false }
console.log(makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }));
// { category: 'Homemade', priority: 'Low', text: 'Take out the trash', completed: false }
console.log(makeTask({ category: 'Finance', text: 'Take interest' }));
// { category: 'Finance', priority: 'Normal', text: 'Take interest', completed: false }
console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));
// { category: 'General', priority: 'Low', text: 'Choose shampoo', completed: false }
console.log(makeTask({ text: 'Buy bread' }));
// { category: 'General', priority: 'Normal', text: 'Buy bread', completed: false } */

// 31. ф-я приймає будь-яку кількість аргументів, рахує і повертає їх суму.
/* function add(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i += 1) {
    total += args[i]; // not i (quantity of arguments), but index of args!
  }
  return total;
}
console.log(add(15, 27)); // `add(15, 27)` повертає 42
console.log(add(12, 4, 11, 48)); // `add(12, 4, 11, 48)` повертає 75
console.log(add(32, 6, 13, 19, 8)); // `add(32, 6, 13, 19, 8)` повертає 78
console.log(add(74, 11, 62, 46, 12, 36)); // `add(74, 11, 62, 46, 12, 36)` повертає 241 */

// 32. ф-я рахує суму тільки тих аргументів, які більші за число передано 1-м параметром.
/* function addOverNum(firstArg, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > firstArg) {
      total += arg;
    }
  }
  return total;
} */

// 33. Функція приймає довільну кількість аргументів. Першим аргументом завжди буде
// масив чисел, а решта аргументів будуть просто числами.
// ф-я повертає новий масив matches, в якому будуть тільки ті аргументи,
// починаючи з другого, які є в масиві першого аргументу.

/* function findMatches(array, ...args) {
  // масив, числа
  const matches = []; // елементи які є і там і там

  for (const element of array) {
    // перебираємо елементи масиву
    if (args.includes(element)) {
      // якщо набір чисел має елемент з масиву
      matches.push(element); // запушуємо елемент в масив мачес
    }
  }
  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); // [1, 2]
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); // [17, 89, 2]
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); // [24, 9, 41] */

// 34. Додай об'єкту bookShelf 2 методи, які поки що будуть повертати просто рядки
// за аналогією з getBooks() і addBook(bookName).

// 1) Метод removeBook(bookName) буде видаляти книгу за назвою.
// Повертає рядок "Deleting book <назва книги>" (значення параметра bookName).

// 2) Метод updateBook(oldName, newName) буде оновлювати назву книги на нову.
// Повертає рядок "Updating book <стара назва> to <нова назва>"
/* const bookShelf = {
  books: ['The last kingdom', 'The guardian of dreams'],

  getBooks() {
    return 'Returning all books';
  },

  addBook(bookName) {
    return `Adding book ${bookName}`;
  },

  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },

  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },
}; */

// 35. Використовуй indexOf() для того, щоб знайти потрібний елемент масиву,
// і splice() для того, щоб замінити цей елемент. // do not use for of everywhere!!!
/* const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    const { books } = this;
    books.splice(books.indexOf(oldName), 1, newName);
    return this.books;
  },
}; */

// 36.
/* const atTheOldToad = {
  potions: [],
}; */

// 37.
/* const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
getPotions() {
  return this.potions;
},
}; */

// 38.
/* const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  addPotion(potionName) {
    this.potions.push(potionName);
  },
}; */

// 39. do not use for of everywhere!!!
/* const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  removePotion(potionName) {
    this.potions.splice(this.potions.indexOf(potionName), 1);
  },
}; */

// 40.
/* const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    this.potions.splice(this.potions.indexOf(oldName), 1, newName);
    return this.potions;
  },
};
console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// ["Speed potion", "Polymorth", "Stone skin"] */

// 41.
// 1) before
/* const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  },
  addPotion(newPotion) {
    if (this.potions.includes(newPotion)) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);
    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }
    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);
    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }
    this.potions.splice(potionIndex, 1, newName);
  },
}; */

// 2) after
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    for (const potion of this.potions) {
      if (potion.name === potionName) {
        const potionIndex = this.potions.indexOf(potion);
        if (potionIndex === -1) {
          return `Potion ${potionName} is not in inventory!`;
        }
        this.potions.splice(potionIndex, 1);
      }
    }
  },

  updatePotionName(oldName, newName) {
    const { potions } = this;

    for (let i = 0; i < potions.length; i += 1) {
      const potion = potions[i];

      if (potion.name === oldName) {
        potion.name = newName;
      }
    }
  },
};
