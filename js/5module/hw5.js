// 1.
const pizzaPalace = {
  pizzas: ['Supercheese', 'Smoked', 'Four meats'],
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);
    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }
    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};
/* console.log(pizzaPalace.order('Smoked')); // "Order accepted, preparing «Smoked» pizza"
console.log(pizzaPalace.order('Four meats')); // "Order accepted, preparing «Four meats» pizza"
console.log(pizzaPalace.order('Big Mike')); // "Sorry, there is no pizza named «Big Mike»"
console.log(pizzaPalace.order('Viennese')); // "Sorry, there is no pizza named «Vie */

// 2.
const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
};
/* customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"] */

// 3.
const historyService = {
  orders: [
    { email: 'jacob@hotmail.com', dish: 'Burrito' },
    { email: 'solomon@topmail.net', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'solomon@topmail.net', dish: 'Apple pie' },
    { email: 'jacob@hotmail.com', dish: 'Taco' },
  ],
  getOrdersLog() {
    return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(' - ');
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
};
/* console.log(historyService.getEmails()); // ["jacob@hotmail.com", "solomon@topmail.net",
// "artemis@coldmail.net"] */

// 4. об'єкт parent став прототипом для об'єкта у змінній сhild
const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish',
};

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

// 5.
/* const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};

const parent = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;

const child = Object.create(parent);
child.name = "Jason";
child.age = 27; */

// 6. оголоси клас Car з порожнім тілом.
/* class Car {} */

// 7.метод constructor, який приймає три параметри. Клас Car повинен створювати об'єкт
// з однойменними властивостями brand, model і price
/* class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
} */

// 8. Деструктуризуй об'єкт в сигнатурі (підписі) конструктора.
/* class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
} */

// 9. Додай класу Car два методи:
// 1) getPrice() - повертає значення властивості price з об'єкта,
// 2) changePrice(newPrice) - оновлює значення властивості price в об'єкта

/* class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  getPrice() {
    return this.price;
  }
  changePrice(newPrice) {
    this.price = newPrice;
  }
} */

// 10.клас, який буде ств об'єкти для управління складом товарів.
// Клас очікує тільки 1 аргумент - початковий масив товарів,
// який записується у властивість items об'єкта, що створюється.
// Оголоси наступні методи класу:
// 1) getItems() - повертає масив поточних товарів у властивості items об'єкта
// 2) addItem(newItem) - приймає новий товар і додає його в масив товарів у властивості items об'єкта
// 3) removeItem(itemToRemove) - приймає товар і видаляє його з масиву товарів у властивості items об'єкта

/* class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(newItem) {
    if (!this.items.includes(newItem)) {
      this.items.push(newItem);
    }
  }
  removeItem(itemToRemove) {
    const index = this.getItems().indexOf(itemToRemove);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
} */

/* const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"] */

// 11. Напиши клас StringBuilder, який приймає один параметр initialValue
// - довільний рядок, який записується у властивість value об'єкта, що створюється.
// Оголоси наступні методи класу:
// 1) getValue() - повертає поточне значення властивості value.
// 2) padEnd(str) - отримує параметр str і додає його в кінець значення властивості value об'єкта
// 3) padStart(str) - отримує параметр str і додає його на початок значення властивості value об'єкта
// 4) padBoth(str) - отримує параметр str і додає його на початок і в кінець значення властивості value об'єкта

/* class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }
  getValue() {
    return this.value;
    // console.log(this); // Object { value: "." }
    // console.log(this.value); // 
  }
  padEnd(str) {
    this.value += str;
  }
  padStart(str) {
    this.value = str + this.value; // XD not str += this.value;
  }
  padBoth(str) {
    this.value = str + this.value;
    this.value += str;
  }
} */

/* const builder = new StringBuilder('.');
console.log(builder.getValue()); // "." yep
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^=" */

// 12. Інкапсуляція (приватні властивості)
/* class Car {
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand() {
    return this.#brand;
  }
  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
} */

// 13.
class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}
/* 
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]
 */

// 14.
class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value += str;
  }
  padStart(str) {
    this.#value = str + this.#value;
  }
  padBoth(str) {
    this.padStart(str); // викликаємо наші вже створені методи, щоб не повторятися
    this.padEnd(str);
  }
}

// 15.
/* class Car {
  #brand;
  #model;
  #price; // не через кому, а окремо через крапку з комою всі прив власт
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }
  set brand(newBrand) {
    this.#brand = newBrand;
  }
  get model() {
    return this.#model;
  }
  set model(newModel) {
    this.#model = newModel;
  }
  get price() {
    return this.#price;
  }
  set price(newPrice) {
    this.#price = newPrice;
  }
} */

// 16. Додай публічну статичну властивість MAX_PRICE
// зі значенням 50000 - максимально допустима ціна автомобіля.
// перевіркa значення параметра newPrice, що передається:
// Якщо воно більше за MAX_PRICE, сеттер нічого не робить,
// а якщо менше або дорівнює, то перезаписує ціну автомобіля.

/* class Car {
  static MAX_PRICE = 50000;

  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car.MAX_PRICE) {
      this.#price = newPrice;
    }
  }
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000
audi.price = 49000;
console.log(audi.price); // 49000
audi.price = 51000;
console.log(audi.price); // 49000 */

// 17. публічний статичний метод
class Car {
  static #MAX_PRICE = 50000;

  static checkPrice(price) {
    if (price > Car.#MAX_PRICE) {
      return 'Error! Price exceeds the maximum';
    }
    return 'Success! Price is within acceptable limits';
  }

  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });
/* console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum" */

// 18. публічнa статичнa властивість AccessLevel (рівень доступу),
// значення якої — це об'єкт
/* class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };
} */

// 19.
/* class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  constructor({ email, accessLevel }) {
    super(email); // в конструкторі для власт email викор звернення до
    // конструктора батьківського класу
    this.accessLevel = accessLevel;
  }
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };
} */

/* const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
}); */

/* console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser" */

// 20. Додай класу Admin:
// 1) Публічну властивість blacklistedEmails для зберігання чорного списку емейлів
// (знач за замовч — порожній масив)
// 2) Публічний метод blacklist(email) для додавання пошти у чорний список.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку.

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  blacklistedEmails = [];

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

/* console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted('mango@mail.com')); // false
console.log(mango.isBlacklisted('poly@mail.com')); // true */
