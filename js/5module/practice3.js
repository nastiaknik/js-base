// 1.
/* console.log(typeof null); // object
console.log(typeof undefined); // undefined */

// 2. переведіть текст з кебабу у верблюда кейс
/* const camelize = (string, callback) => {
  return string
    .split('-')
    .map((item, index) => (index === 0 ? item : callback(item)))
    .join('');
  // return string.split('-'); // [ "background", "color" ]
};

function capitalize(string) {
    return `${string[0].toUpperCase()}${string.slice(1)}`;
  // без пробілу між шаблонними рядками!
}

console.log(camelize('background-color', capitalize));
console.log(camelize('-webkit-transition', capitalize));
console.log(camelize('list-style', capitalize)); */

// 3. замкнута ф-я викор для зберігання чогось
// ф - я, яка приймає пароль і повертає внутр ф - ю, що приймає рядок і повертає тру,
// якщо рядок збігається з паролем і фолз, якщо не збігається

const savePassword = password => {
  return function (userPassword) {
    return password === userPassword;
  };
};
/* console.log(savePassword('qwerty')('asdsfdf')); // false
console.log(savePassword('qwerty')('qwerty')); // true */
