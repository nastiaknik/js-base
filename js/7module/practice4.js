// 1. залишає лиш трушні значення

const data = [0, 1, false, 2, undefined, '', 3, null];

function compact(data) {
  // 1)
  return data.filter(item => item);
  // 2)
  // return data.filter(Boolean);
}

/* console.log(compact(data)); // [1, 2, 3] */

// 2. скорочує слова: залишає 1-у і ост букву а між ними кладе число - к-сть видалених
// букв, слова менше за 4 букви не скорочуємо
function shortSentence(str) {
  const arr = str.split(' ');
  return arr.map(word => {
    if (word.length < 4) {
      return word;
    } else {
      return `${word[0]}${word.length - 2}${word[word.length - 1]}`;
    }
  });
}
/* console.log(shortSentence('Why are you doing it at night, weirdo?'));
// [ "Why", "are", "you", "d3g", "it", "at", "n4,", "w5?" ] */

// 3. отримуємо інціали з речення

function getInitials(str) {
  return str
    .split(' ')
    .map(name => name[0]) // name -> ([firstLetter, secondLetter]) (деструктуризація з рядка)
    .join('');
}

console.log(getInitials('Why are you doing it at night, weirdo?')); // Waydianw
