/**
 *
 * Given a compressed string, return its original form.
 *
 * For example.
 *
 * uncompress('3(ab)') // 'ababab'
 * uncompress('3(ab2(c))') // 'abccabccabcc'
 * a number k followed by a pair of parenthesis, meaning to repeat the substring inside the parenthesis by k times, k is positive integer.
 * inputs are guaranteed to be valid input like above example, there is no numerical digit in original form.
 */

const regexp = /\d+\(\w+\)/

function uncompress(str) {
  let result = str;
  while(result.match(regexp)){
    const mth = result.match(regexp)[0];
    const word = mth.match(/\(\w+\)/)[0].replace('(', '').replace(')', '');
    const number = mth.match(/\d+/)[0];
    const uncompressedString = ''.padStart(Number(number) * word.length, word);

    result = result.replace(mth, uncompressedString)
    debugger
  }

  return result;
}


console.log(uncompress('2(BFE)3(dev)'))
