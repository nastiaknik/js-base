// 1.
/* console.log(_.isEmpty([])); // true
console.log(_.isEmpty([null])); // false */

// 2.
/* console.log(_.union([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5] - без повторень! */

// 3.
const player = { nickname: 'nugget', hoursPlayed: 40, online: true };

// 1)
/* console.log(_.get(player, 'online')); // true
console.log(_.get(player, 'location')); // undefined */

// 2)
/* console.log(player?.nickname); // nugget
console.log(player?.location); // undefined, без ? буде помилка! */

// 3)
/* if (player && player.hoursPlayed) {
  console.log(player.hoursPlayed); // 40
} */

// 4. можна не вказувати поч, тоді від 0 включно, крок за замовч 1
/* console.log(_.range(11, 2)); // [0, 2, 4, 6, 8, 10]
console.log(_.range(1, 9)); // [1, 2, 3, 4, 5, 6, 7, 8] */

// 5.
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
/* console.log(_.sortBy(players, player => player.name)); // [{...},{...},{...},{...},{...}] */

// 6.
/* console.log(_.sum([1, 0, 6, 3, 7])); // 17
console.log(_.sumBy(players, player => player.points)); // 313 */

// 7.
/* console.log(_.min([0, 1, -6, Infinity])); // -6
console.log(_.minBy(players, player => player.timePlayed).name); // Chelsy */

// 8.
/* console.log(_.max([0, 1, -6, Infinity])); // infinity
console.log(_.maxBy(players, player => player.timePlayed).id); // player-2 */

// 9. _.random(від, до, буль - щоб повертались числа з плаваючою комою)
/* console.log(_.random(0, 99)); // 74 */

// 10.
/* console.log(_.uniq([0, 0, 1, 2, 2, 3, 4, 5, 5, 6, 19])); // [ 0, 1, 2, 3, 4, 5, 6, 19 ]
console.log(_.uniqBy(players, player => player.online)); // 1 online and 1 offline XD */

// 11. якщо вже відсортований масив
/* console.log(_.sortedUniq([0, 0, 1, 2, 3, 3, 4, 5, 5])); // [ 0, 1, 2, 3, 4, 5 ] */

// 12.
/* console.log(_.camelCase('what about me')); // whatAboutMe
console.log(_.capitalize('what about me')); // What about me
console.log(_.kebabCase('what about me')); // what-about-me
console.log(_.upperCase('WhAt abOuT mE')); // WH AT AB OU T M E xd
console.log(_.lowerCase('WhAt abOuT mE')); // wh at ab ou t m e wtf */
