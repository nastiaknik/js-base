// 1. Створення/оголошення об'єкта ({} - літерал об'єкта)
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};

// 2. Вкладені властивості (об'єкт в об'єкті?)
const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: {
    country: 'Jamaica',
    city: 'Ocho Rios',
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

// 3. доступ до властивості через крапку або через [""]
/* console.log(book.title); // 'The Last Kingdom'
console.log(book['genres']); // ['historical prose', 'adventurs'] */

// 4. Якщо не знайдено такої властвості - андефайнд
/* const bookPrice = book.price;
console.log(bookPrice); // undefined */

//5. доступ до вкладених властивостей через . / [""]
/* console.log(user.location.country === user['location']['country']); // true */

// 6. key без лапок в []! (спец слово-значення)
/* for (const key in book) {
  console.log(key); // title, author, genres, rating
  console.log(book[key]); // The Last Kingdom, Bernard Cornwell,
  // ["historical prose", "adventure"], 8.38
} */

// 7. зміна властивості
/* book.rating = 9; // змінює рейтинг
book.genres.push('драма'); // додає в масив ще один жанр
console.log(book.rating); // 9
console.log(book.genres); // [ "historical prose", "adventure", "драма" ] */

// 8. додавання властивості
/* book.isPublic = true; */

// 9. коротка властивість
/* const student = {
  name, // то саме, що name: name,
  age: age, // = age,
}; */

// 10. коли не знаємо назви властивості?
/* const propName = 'name'; // property name
const kahootUser = {
  age: 25,
  [propName]: 'nugget',
};
console.log(user.name); // 'nugget' */

// 11. моделі/методу об'єкту
/* const bookShelf = {
  books: ['The Last Kingdom'],
  getBooks() {
    return this.books; // this замість getBooks (методу, що викликає)
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
}; */

// 12. Масив об'єктів (список об'єктів) з однаковими наборами властивостів
/* 
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'На березі спокійних вод',
    author: 'Роберт Шеклі',
    rating: 8.51,
  },
];

for (const book of books) {
  console.log(book); // об'єкт
  console.log(book.title); // назва
  console.log(book.rating); // рейтинг
}
 */

// 13. перебираємо об'єкт з циклом for ... in
/* for (const key in book) {
  console.log(key); // властивості
  console.log(book[key]); // значення
} */

// 14. Метод hasOwnProperty()
/* const animal = {
  legs: 4,
};
const dog = Object.create(animal); // зв'язує об'єкт сабаку з об'єктом твариною
dog.name = 'Mango';

console.log(dog); // {name: 'Манgо'}
console.log(dog.name); // 'Манgо' - власна власт
console.log(dog.legs); // 4 - невласна власт

console.log('name' in dog); // true, не важливо чи власна властивість
console.log('legs' in dog); // true

console.log(dog.hasOwnProperty('name')); // true, важливо чи власна власт
console.log(dog.hasOwnProperty('legs')); // false

for (const key in book) {
  if (book.hasOwnProperty(key)) {
    // Якщо це власна властивість - виконуємо тіло if
    console.log(key);
    console.log(book[key]);
  }
  // Якщо це невласна властивість - бездєлнічаєм
} */

// 15. Метод Object.keys() повертає масив ключів його власних властивостей
/* const keys = Object.keys(book);
for (const key of keys) {
console.log(key); // ['title', 'author', 'genres', 'rating']
  console.log(book[key]); // [The Last Kingdom, Bernard Cornwell, ["historical prose", "adventure"], 8.38]
} */

// 16. Метод Object.values() повертає масив значень його власних властивостей
/* const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'rating']
const values = Object.values(book);
console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38] */

// 17. Метод Object.entries() повертає масив масивів з 2ох елементів: властивості і значення
/* const entries = Object.entries(book);
console.log(entries); */
// [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// 18. Задача кенти
/* const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: true },
];
console.table(friends); */

// 1) шукаєм друга по імені
/* const findFriendByName = function (allFriends, friendName) {
  for (const friend of allFriends) {
    if (friend.name === friendName) {
      return 'found :)';
    }
  }
  return 'not found :(';
};

console.log(findFriendByName(friends, 'Poly')); // found :)
console.log(findFriendByName(friends, 'Chelsy')); // not found :( */

// 2) масив імен друзів
/* const getAllNames = function (allFriends) {
  const names = [];

  for (const friend of allFriends) {
    names.push(friend.name);
  }
  return names;
};

console.log(getAllNames(friends)); // [ "Mango", "Kiwi", "Poly", "Ajax" ] */

// 3) Масив імен друзів, які онлайн
/* const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    if (friend.online) {
      onlineFriends.push(friend.name); // якщо без .нейм буде масив з об'єктами
    }
  }
  return onlineFriends;
};
console.log(getOnlineFriends(friends)); */

// 4) Масив імен друзів, які офлайн
/* const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];

  for (const friend of allFriends) {
    if (!friend.online) {
      offlineFriends.push(friend.name);
    }
  }
  return offlineFriends;
};
console.log(getOfflineFriends(friends)); */

// 5) створити 2 масива онлайн і офлайн
/* const getFriendsByStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend.name);
      continue;
    }
    friendsByStatus.offline.push(friend.name);
  }
  return friendsByStatus;
};

console.log(getFriendsByStatus(friends)); */
