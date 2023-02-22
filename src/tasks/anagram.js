/**
 * Слова-анаграммы — это слова, записанные одними и теми же буквами в разном порядке,
 * регистр букв при этом игнорируется.
 * Анаграммами, например, являются слова «Волос» и «СЛОВО».
 *
 * Напишите функцию anagram(x, y) проверяющую, являются ли x и y словами-анаграммами.
 *
 * Пример:
 *
 * anagram('Волос', 'Слово') === true
 * anagram('Живу', 'Вижу') === true
 *
 * @param {string} x
 * @param {string} y
 * @returns {boolean}
 */
const sum = x => x.reduce((sum, item) => sum + item.charCodeAt(), 0)

function anagram(x, y) {
  const lowerCaseX = Array.from(x.toLowerCase());
  const lowerCaseY = Array.from(y.toLowerCase());

  if (lowerCaseX.length !== lowerCaseY.length) {
    return false;
  }

  const sum1 = sum(lowerCaseX)
  const sum2 = sum(lowerCaseY)


  return sum1 === sum2;
}


console.log(anagram('Живу', 'Вижу'))
console.log(anagram('Волос', 'Слово'))
