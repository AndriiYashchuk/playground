/**
 *
 Luckily we have BigInt in JavaScript so handle big numbers.

 What if we need to do it by ourselves for older browsers?

 You are asked to implement a string addition function, with all non-negative integers in string.

 add('999999999999999999', '1')
 // '1000000000000000000'
 Don't use BigInt directly, it is not our goal here.


 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function add(num1, num2) {
  let one = Array.from(num1),
    two = Array.from(num2);
  const result = [];
  const dif = Math.abs(one.length - two.length);
  const balancedPath = new Array(dif).fill('0');
  if (one.length > two.length) {
    two = balancedPath.concat(two);
  } else {
    one = balancedPath.concat(one);
  }

  let sum = '';
  let extra = false;
  for (let i = 1; i <= two.length; i++){
    let indexOne = one.length - i;
    let indexTwo = two.length - i;

    sum = '' + (parseInt(one[indexOne]) + parseInt(two[indexTwo]) + (extra ? 1 : 0))
    if(sum.length > 1){
      result.unshift(sum[1]);
      extra = true;
    }else{
      result.unshift(sum);
      extra = false;
    }
  }

  return (extra ? [1, ...result] : result).join('')
}

/*
tests:

'0' + '0'
'0' + '1'
'9' + '9'
'999999999999999999999' + '1'
'123456789123456789123456789' + '123456789123456789123456789'

 */
