// 1.
class User {
  // назва класу іменник з великої букви
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

const nugget = new User('Nugget', 'nugget@email.com'); // екземпляр класу
/* console.log(nugget); */
// {name: 'Nugget', email: 'nugget@email.com'}

// 2.
nugget.changeEmail('nugget@gmail.com');
/* console.log(nugget); */
// { name: "Nugget", email: "nugget@gmail.com" }

// 3.
const animal = {
  legs: 4,
};

/* const dog = Object.create(animal);
dog.name = 'Mango';
dog.barks = true; */

/* console.log(dog); // { name: 'Mango', __proto__: animal }
console.log(animal.isPrototypeOf(dog)); // true
// перевіряє чи є енімал прототипом для дог
console.log(dog.legs); // 4
console.log(dog.hasOwnProperty('legs')); // false */

// 4.
/* for (const key in dog) {
  console.log(key); // name, barks, legs
} // чекає всі властивості власні і не власні */

// 5.
/* for (const key in dog) {
  if (!dog.hasOwnProperty(key)) continue;
  console.log(key); // name, barks
} // перевіряє тільки власні властивості */

// 6. Метод Object.keys(obj) поверне масив тільки власних властивості
// ключі об'єкта = властивтивості
/* console.log(Object.keys(dog)); // ['name', 'barks'] */

// 7.
class Customer {
  name; // необов'язкове оголошення публічних власт
  #email; // обов'язкове оголошення приватних власт

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }
}
const mango = new Customer({
  name: 'Манго',
  email: 'mango@gmail.com',
});

/* console.log(mango.#email); // Виникне помилка, це приватна властивість
// reference to undeclared private field or method #email */

// 8.
class Buyer {
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // Геттер email
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
    if (newEmail === '') {
      console.error('Помилка! Пошта не може бути порожнім рядком!');
      return;
    }
    this.#email = newEmail;
  }
}

// 9.
class Author {
  // статичні властивості доступні тільки класові
  static Roles = {
    ADMIN: 'admin',
    EDITOR: 'editor',
  };
}

// 10. Наслідування класів
// дочірній клас наслідує властивості
// і методи іншого батьківського класу
/* class Child extends Parent {
  // ...
} */

// 11.
/* const Cat = function (option) {
  animal.apply(this, options);
}; */

class Animal {
  constructor(options) {
    this.name = options.name;
    this.color = options.color;
  }
  voice() {}
}

const dog = new Animal({ name: 'Rex', color: 'black' });
class Cat extends Animal {
  constructor(options) {
    super(options);
    this.type = 'cat';
  }
}

// 12. ???
class Car {
  constructor({ model, price, color, owner } = {}) {
    this.model = model;
    this.price = price;
    this.color = color;
    this.owner = owner;
  }
  get showPrice() {
    return this.price;
  }
  get showModel() {
    return this.model;
  }
  get ownerName() {
    return this.owner;
  }
  set changeOwner(newOwner) {
    this.owner = newOwner;
  }
  set changePrice(newPrice) {
    this.price = newPrice;
  }
}

class Jeep extends Car {
  constructor(config) {
    super();
  }
}

const roscoe = new Jeep({
  model: '1980 Jeep CJ5',
  price: '$38500',
  color: 'robin egg blue color',
  owner: 'Mieczysław Stilinski',
});

/* console.log(jeep.prototype); // undefined??
roscoe.changeOwner('Stiles Stilinski'); //
console.log(jeep.ownerName());
console.log(jeep);
console.log(Car.isPrototypeOf(jeep)); // true */
/* console.log(Object.getPrototypeOf(roscoe)); // Jeep
console.log(Jeep.prototype); // Car */

// 13.
class InstaUser {
  static counter = 0;
  static addUser() {
    this.counter += 1;
  }
  #email;
  constructor(name, email, age) {
    this.name = name;
    this.#email = email;
    this.age = age;
    InstaUser.addUser();
  }
  getName() {
    console.log(this.name);
  }
  get getEmail() {
    const password = prompt('Enter password');
    if (password === 'qwerty' && this.#checkAge()) {
      return this.#email;
    } else {
      console.log('Something went wrong!');
    }
  }

  set getEmail(newEmail) {
    if (newEmail.includes('@') && newEmail.includes('.')) {
      this.#email = newEmail;
    } else {
      console.log('Wrong email!');
    }
  }
  #checkAge() {
    this.getName();
    if (this.age >= 18) {
      return true;
    } else {
      return false;
    }
  }
}
const alex = new InstaUser('alex', 'alex@gmail.com', 18);
/* alex.getName(); // alex */
/* console.log(alex.getEmail); // alex@gmail.com */
/* console.log(InstaUser.counter); // 1 - alex */

// 14. Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер
// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// class User {
//     constructor({
//         name,
//         age,
//         numberOfPosts,
//         topics
//     }) {
//         this.name = name;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }
//     getInfo(){
//         return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`
//     }
//     updatePostCount(value){
//         this.numberOfPosts += value;
//     }
// }

// 15. Напиши клас Storage який створює об'єкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме
// його властивість items.

// class Storage {
//     constructor(products) {
//         this.items = products;
//     }
//     getItems() {
//         return this.items;
//     }
//     addItem(item) {
//         if (!this.getItems().includes(item)) {
//             this.items.push(item)
//         }
//     }
//     removeItem(item) {
//         const idx = this.getItems().indexOf(item)
//         // console.log(!!~idx); // !-1 => !false => true
//         if (!!~idx) {
//             this.items.splice(idx,1)
//         }
//     }
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);
// console.log(storage);
// // const items = storage.getItems();
// // console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]
// storage.addItem('🍌');
// // console.table(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]
// storage.removeItem('🍋');
// storage.removeItem('😎');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
