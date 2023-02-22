/**
 * Напишите функцию flatten(array)
 * которая делает вложенный массив плоским
 *
 * Пример:
 *
 * flatten([1, [2, 3]]) === [1, 2, 3]
 * flatten([1, [2, [3, 4]]]) === [1, 2, 3, 4]
 *
 * @param {Array.<number|[]>} array
 * @returns {number[]}
 */
function flatten(array) {
  return array.reduce((res, item) =>
    Array.isArray(item) ? res.concat(flatten(item)) : res.concat(item), []);
}

const a = [1, 2, 3, 4, 5, [4, 5, 6], 5, 6, 7, [0, 1, 2]]

console.log(flatten(a))
