// 1. ф-я, яка приймає масив чисел, і повертає масив проміжкових сум попередніх елементів
// 1) з пуш
/* function getSum(array) {
  return array.reduce((acc, element, index) => {
    if (index === 0) {
      acc.push(element);
      return acc;
    }
    acc.push(element + acc[index - 1]);
    return acc;
  }, []);
}

console.log(getSum([1, 2, 3, 4, 5])); // [1, 3, 6, 10, 15] */

// 2)
/* function getSum(array) {
  return array.reduce((acc, element, index) => {
    if (index === 0) {
      return [...acc, element];
    }
    return [...acc, element + acc[index - 1]];
  }, []);
}
console.log(getSum([1, 2, 3, 4, 5])); // [1, 3, 6, 10, 15] */

// 3)
const getSum = array =>
  array.reduce(
    (acc, element, index) => (index === 0 ? [element] : [...acc, element + acc[index - 1]]),
    [],
  );
/* console.log(getSum([1, 2, 3, 4, 5])); // [1, 3, 6, 10, 15] */

// 2.
const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory...`);
    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory...`);
    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}...`);
  action.call(this, itemName);
};

/* invokeInventoryAction.call(inventory, 'Medkit', inventory.add); */
// Invoking action on Medkit...
// Adding Medkit to inventory...
// console.log(inventory.items); // [ "Knife", "Gas mask", "Medkit" ]
/* invokeInventoryAction.apply(inventory, ['Gas mask', inventory.remove]); */
// Invoking action on Gas mask...
// Removing Gas mask from inventory...
// console.log(inventory.items); // [ "Knife", "Medkit" ]

// 3.
class Student {
  #name;
  #email;
  #hwResults = [];

  constructor(name, email) {
    this.#name = name;
    this.#email = email;
  }

  get name() {
    return this.#name;
  }
  get email() {
    return this.#email;
  }
  get hwResults() {
    return this.#hwResults;
  }
  addHwResults(topic, success) {
    /*     this.#hwResults.push(`${topic}: ${success}`);
     */
    const point = {
      topic,
      success,
    };
    this.#hwResults.push(point);
  }
}

/* const laila = new Student('Laila', 'laila@gmail.com');
console.log(laila.name); // Laila
console.log(laila.email); // laila@gmail.com
console.log(laila.addHwResults('prototypes', true)); // [{ topic: "prototypes", success: true }]
console.log(laila.hwResults); */
