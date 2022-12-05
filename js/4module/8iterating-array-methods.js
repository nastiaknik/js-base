// 1. грязна ф-я
/* const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};
const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2); */
/* console.log(numbers); // [2, 4, 6, 8, 10] */

// 2. чиста ф-я
/* const pureMultiply = (array, value) => {
  const newArray = [];
  array.forEach(element => {
    newArray.push(element * value);
  });
  return newArray;
};
const doubledNumbers = pureMultiply(numbers, 2); */
/* console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubledNumbers); // [2, 4, 6, 8, 10] */

// 3. масив .map(callback) - може змінити кожен елемент масиву.
const planets = ['Земля', 'Марс', 'Венера', 'Юпітер'];
const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
/* console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпітер'] */

// 4. може перебрати масив об'єктів, і в колбек-ф-ї повернути знач власт кожного з них.
const results = [
  { name: 'Манго', score: 83 },
  { name: 'Аякс', score: 37 },
  { name: 'Ківі', score: 94 },
];
const names = results.map(result => result.name);
/* console.log(names); // ['Манго', 'Аякс', 'Ківі'] */

// 5. Метод .flatMap(callback) розгладжує масив об'єктів/масивів (тільки 1 вкладеність)
const students = [
  { name: 'Манго', score: 83, courses: ['математика', 'фізика'] },
  { name: 'Полі', score: 59, courses: ['інформатика', 'математика'] },
  { name: 'Аякс', score: 37, courses: ['фізика', 'біологія'] },
  { name: 'Ківі', score: 94, courses: ['література', 'інформатика'] },
];
/* console.log(students.map(student => student.courses)); // [['математика', 'фізика'],
// ['інформатика', 'математика'], ['фізика', 'біологія']] - не розгладжує масив масивів
console.log(students.flatMap(student => student.courses)); // ['математика', 'фізика',
// 'інформатика', 'математика', 'фізика', 'біологія'] */

// 6. Метод .filter(callback) - фільтрує масив, коли необхідно вибрати 1+ елементів
// з колекції за певним критерієм.
const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter(value => value >= 0);
/* console.log(positiveValues); // [51, 27, 21, 42] */

const negativeValues = values.filter(value => value < 0);
/* console.log(negativeValues); // [-3, -68, -37] */

const bigValues = values.filter(value => value > 1000);
/* console.log(bigValues); // [] */

// 7. фільтрує унікальні елем
const uniqueCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index);
/* console.log(uniqueCourses); // [ "мат", "фізика", "інформатика", "біологія", "літра" ] */

// 8.
const LOW_SCORE = 50;
const HIGH_SCORE = 80;

const best = students.filter(student => student.score >= HIGH_SCORE);
/* console.log(best); // [{ name: "Манго" ... }, {name: "Ківі" ...}] */

const worst = students.filter(student => student.score < LOW_SCORE);
/* console.log(worst); // [{ name: "Аякс"...}] */

// В колбек-функції зручно деструктуризувати властивості об'єкта
const average = students.filter(({ score }) => score >= LOW_SCORE && score < HIGH_SCORE);
/* console.log(average); // [{ name: "Полі"}...] */

// 9. метод .find(callback) дозволяє знайти і повернути перший відповідний елемент
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
];
colorPickerOptions.find(option => option.label === 'blue'); // { label: 'blue', color: '#2196F3' }
colorPickerOptions.find(option => option.label === 'white'); // undefined

// 10. Метод .findIndex(callback) - заміна методу .indexOf()
colorPickerOptions.findIndex(option => option.label === 'blue'); // 2
colorPickerOptions.findIndex(option => option.label === 'white'); // -1

// 11. Метод .every() Перевіряє, чи проходять всі елементи масиву тест колбек-функції.
// Повертає true або false.
[1, 2, 3, 4, 5].every(value => value >= 0); // true (Усі елементи > або = 0?)
[1, 2, 3, -10, 4, 5].every(value => value >= 0); // false (Усі елементи > або = 0?

// 12. Метод .some() Перевіряє, чи проходить хоча б 1 елемент масиву тест колбек-функції
// Повертає true або false.
[-7, -20, 3, -10, -14].some(value => value >= 0); // true
// (Чи є хоча б один елемент, що > або = 0 ?)
[1, 2, 3, 4, 5].some(value => value < 0); // false

// 13. метод .reduce(callback, initialValue) поелементо перебирає оригінальний масив.
const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);
/* console.log(total); // 32 */

// 14.
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);
const averageScore = totalScore / students.length;

// 15. Метод .sort() сортує елементи вихідного масиву за замовч за зростанням
const scores = [27, 2, 41, 4, 7, 3, 75];
scores.sort();
/* console.log(scores); // [2, 27, 3, 4, 41, 7, 75] // сортує по символах */

// 16. сортує за алфавітом, але великі літери > малі
const letters = ['b', 'B', 'a', 'A', 'c', 'C'];
letters.sort();
/* console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c'] */

// 17. перед сортуванням ств копію масиву і сортуємо його!
const sortedScores = [...scores].sort();
/* console.log(sortedScores); // [ 2, 27, 3, 4, 41, 7, 75 ] */

// 18. массив.sort((a, b) - сортування чисел за нашими правилами
/* const ascendingScores = [...scores].sort((a, b) => a - b); // зростає
console.log(ascendingScores); // [2, 3, 4, 7, 27, 41, 75] a < b -> a, b

const descendingScores = [...scores].sort((a, b) => b - a); // спадає
console.log(descendingScores); // [75, 41, 27, 7, 4, 3, 2] b > a -> b, a */

// 19. firstString.localeCompare(secondString) - сортування рядків за нашими правилами
const teachers = ['Віка', 'Андрій', 'Олег', 'Юля', 'Борис', 'Катя'];
/* const inAlphabetOrder = [...teachers].sort((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']

const inReversedOrder = [...teachers].sort((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій'] */

// 20. ланцюжки методів (забираєм трупи мертвих змінних)
// ств рейтинг - масив імен відсоротованих в залежності від оцінок - від макс до мінімум
const sortedByDescendingScore = [...students].sort((a, b) => b.score - a.score);
const rating = sortedByDescendingScore.map(student => student.name);

/* console.log(rating); // [ "Ківі", "Манго", "Полі", "Аякс" ]
console.log(sortedByDescendingScore); // {name: K}, {name: M}, {name: P}, {name: A} */

// 21. ств масив унікальних відвідуваних предметів (відсортованих за алфавітом)
/* const students = [
  { name: 'Манго', score: 83, courses: ['математика', 'фізика'] },
  { name: 'Полі', score: 59, courses: ['інформатика', 'математика'] },
  { name: 'Аякс', score: 37, courses: ['фізика', 'біологія'] },
  { name: 'Ківі', score: 94, courses: ['література', 'інформатика'] },
]; */
const uniqueCoursesInSchool = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));
/* console.log(uniqueCoursesInSchool); // [ "біологія", "інформатика", "література", 
// "математика", "фізика" ] */

// 22.
const numbers = [5, 10, 15, 20, 25, 30];
/* numbers.forEach(function (number, index, array) {
  array[index] = 20;
}); */
/* console.log(numbers); // [ 20, 20, 20, 20, 20, 20 ] */

// 23. масив імен з масиву об'єктів
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const playerNames = players.map(player => player.name);
/* console.log(playerNames); // [ "Mango", "Poly", "Kiwi", "Ajax", "Chelsy" ] */

// 24. змінити значення властивості по айді одного гравця
const playerToUpdate = 'player-4';
const updatedPlayers = players.map(player =>
  playerToUpdate === player.id
    ? {
        ...player,
        timePlayed: player.timePlayed + 100,
      }
    : player,
);
/* console.table(updatedPlayers); */

// 25. масив імен усіх онлайн гравців
const onlinePlayers = players.filter(player => player.online).map(player => player.name);
/* console.log(onlinePlayers); // [ "Poly", "Kiwi", "Chelsy" ] */

const offlinePlayers = players.filter(player => !player.online).map(player => player.name);
/* console.log(offlinePlayers); // [ "Mango", "Ajax" ] */

// 26.
const totalValue = numbers.reduce((acc, value) => {
  return acc + value;
}, 0);
/* console.log(totalValue); // 120 */

// 27.
const isAllOnline = players.every(player => player.online);
/* console.log(isAllOnline); // false */

const isAnyOnline = players.some(({ online }) => online);
/* console.log(isAnyOnline); // true */

// 28. сума награних годин
const totalTimePlayed = players.reduce((totalTime, player) => totalTime + player.timePlayed, 0);
/* console.log(totalTimePlayed); // 1240 */

// 29. сума в корзині
/* const totalAmount = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0); */

// 30.
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// всі теги з повтореннями

// 1)
const tagStatistics = allTags.reduce((acc, tag) => {
  if (acc[tag]) {
    acc[tag] += 1;
    return acc;
  }
  acc[tag] = 1;
  return acc;
}, {});

// 2) через тернарнік
const tagsStats = allTags.reduce((acc, tag) => {
  return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  };
}, {});
/* console.log(tagsStats); // { js: 3, nodejs: 3, html: 2, css: 2, react: 2 } */

// 31.
const sortedByBestPlayers = [...players].sort((prevPlayer, nextPlayer) => {
  return nextPlayer.timePlayed - prevPlayer.timePlayed;
});
/* console.table(sortedByBestPlayers); */

const sortedByWorstPlayers = [...players].sort((prev, next) => {
  return prev.timePlayed - next.timePlayed;
});
/* console.table(sortedByWorstPlayers); */

// 32. юнікод 'й'
/* console.log('Йод'.charCodeAt(1)); // 1086 */

// 33.
const id = players.map(({ id }) => id);
