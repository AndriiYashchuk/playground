/**
 *
 *
 * Given a string, compress the repeating letters with count number
 *
 * compress('a') // 'a'
 * compress('aa') // 'a2'
 * compress('aaa') // 'a3'
 * compress('aaab') // 'a3b'
 * compress('aaabb') // 'a3b2'
 * compress('aaabba') // 'a3b2a'
 *
 * @param str
 * @returns {*}
 */
function compress(str) {
  let result = str;
  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0) ; i++){
    const char = String.fromCharCode(i);
    const regexp = new RegExp(`(${char}+)`, 'gm');
    let match = str.match(regexp);
    if(match){
      match = match.filter((item) => item.length > 1);
      match.forEach((matchItem) => {
        result = result.replaceAll(matchItem, `${char}${matchItem.length}`)
      })
    }
  }
  return result;
}


/**
 * complexCompress('ababab')  -> '3(ab)'
 * complexCompress('abccabccabcc') -> '3(ab2(c))'
 *
 * @param str
 * @returns {*}
 */
function complexCompress(str) {
  let result = str;
  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0) ; i++){
    const char = String.fromCharCode(i);
    const regexp = new RegExp(`(${char}+)`, 'gm');
    let match = str.match(regexp);
    if(match){
      match = match.filter((item) => item.length > 1);
      match.forEach((matchItem) => {
        result = result.replaceAll(matchItem, `${matchItem.length}(${char})`)
      })
    }
  }
  const maxLengthToCompare = Math.floor(result.length / 2);
  for(let i = 2; i < maxLengthToCompare; i++){
    const testString = result.substr(0, i);
    let rest = result.substr(i)
    let repeat = 1;
    while(rest.startsWith(testString)){
      repeat += 1;
      rest = rest.replace(testString, '');
    }


    if(repeat > 1){
      const replace = ''.padStart(3 * testString.length, testString);

      result = result.replace(replace, `${repeat}(${testString})`);
    }
  }
  return result;
}


console.log(uncompress('abccabccabcc'))
