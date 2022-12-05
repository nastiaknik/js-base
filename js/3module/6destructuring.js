// 1. пошук найменшої/найбільшої температури (...spread)
/* const temps = [19, 14, 12, 21, 17, 29, 24];

console.log(Math.min(...temps)); // 12
console.log(Math.max(...temps)); // 29
console.log(Math.min(temps)); // Nan (очікує числа не масив!) */

// 2. склеює масиви в 1 новий (ств копію масивів); працює як concat i splite
/* const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const allArrays = [...array1, ...array2, ...array3];
console.log(allArrays); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] */

// 3. зливає властивості об'єктів в 1 новий
/* const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 }; // однакові властивості перевизначаються останніми

const c = { ...a, ...b };
console.log(c); // { x: 0, y: 2, z: 3 } */

// 4. Деструктуризація
/* const userProfile = {
  name: 'nugget',
  location: 'Warsaw, Poland',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
const {
  name,
  location,
  stats: { followers, views, likes },
} = userProfile;

console.log(name, location, followers, views, likes); */

// 5. Деструктуризація масивів
/* const rgb = [255, 100, 80];
const [red, green, blue] = rgb; */

// 6. Задача корзина
/* const cart = {
  items: [],

  getItems() {
    return this.items;
  },

  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }
    const newProduct = {
      ...product,
      quantity: 1,
    };
    this.items.push(newProduct);
  },

  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const item = items[i];

      if (productName === item.name) {
        console.log('видаляю ', productName, '...');
        items.splice(i, 1);
      }
    }
  },

  clear() {
    console.log('очищую корзину...');
    this.items = [];
  },

  countTotalPrice() {
    const { items } = this;
    let total = 0;

    for (const { price, quantity } of items) {
      total += price * quantity;
    }
    return total;
  },

  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
        return;
      }
    }
  },

  decreaseQuantity(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const item = items[i];

      if (item.name === productName) {
        item.quantity -= 1;

        if (item.quantity <= 0) {
          console.log('видаляю ', productName, '...');
          items.splice(i, 1);
        }
      }
    }
  },
};

console.log(cart.getItems()); // []

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice()); // Total:  560 

cart.remove('🍇'); // видалити:  🍇
console.table(cart.getItems()); 

console.log('Total: ', cart.countTotalPrice()); // Total:  500 

console.table(cart.getItems());
cart.increaseQuantity('🍎');
cart.decreaseQuantity('🍋');
cart.decreaseQuantity('🍋');
console.table(cart.getItems());

cart.clear();
console.log(cart.getItems());
 */

// 7.
