// 1. 1)
const alex = {
  username: 'Alex',
  showName() {
    console.log(this.username);
  },
};

/* alex.showName(); // Alex */

// 2)
const bookShelf = {
  authors: ['Бернард Корнуелл', 'Роберт Шеклі'],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};
/* console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі"]
bookShelf.addAuthor('Лі Таніт');
console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі", "Лі Таніт"] */

// 2.
function showThis() {
  console.log('this in showThis: ', this);
}

/* showThis(); // this in showThis: undefined */

const user = {
  username: 'Mango',
};

user.showContext = showThis;

/* user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ} */

// 3.
/* console.log(this); // undefined  */

// 4.
/* showThis.call(bookShelf); // object bookShelf,
// аргументи через кому після об'єкта можемо передати
showThis.apply(bookShelf); // то саме, тільки аргументи в []
showThis.bind(bookShelf)(); // ств копію, а не викликає відразу
// як еплай і кол, тому() вкінці, щоб викликати,
// аргументи можна передати через кому після */

// 5.
/* const fnA = function () {};
const fnB = fnA;
console.log(fnB === fnA); // true */

// 6. замикання ф-ї
function createCalcFunct() {
  return function () {
    console.log(100 * n);
  };
}
createCalcFunct(42);

// 7. Калькулятор
// Створіть об'єкт calculator з трьома методами:
// 1) read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// 2) add() - повертає суму збережених значень.
// 3) mult() - перемножує збережені значення та повертає результат.
const calculator = {
  read(a = 0, b = 0) {
    if (!isNaN(a) && !isNaN(b)) {
      this.a = Number(a);
      this.b = Number(b);
    } else {
      alert('Будь-ласка вкажіть значення a та b');
    }
  },

  add() {
    return this.a + this.b;
  },

  mult() {
    return this.a * this.b;
  },
};

// 8.
Number.isNaN();
isNaN();
// console.log(Number(a),isNaN(a));
