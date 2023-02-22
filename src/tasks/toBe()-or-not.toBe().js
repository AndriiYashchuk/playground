/**
 *
 *
 * Here are some simple Jest test code.
 *
 * expect(3).toBe(3) // ✅
 * expect(4).toBe(3) // ❌
 * We can reverse it with not.
 *
 * expect(3).not.toBe(3) // ❌
 * expect(4).not.toBe(3) // ✅
 * Please implement myExpect() to support toBe() and also not.
 *
 */


function myExpect(input) {
  const equal = (test) => {

    return Object.is(input, test);
  }
  const not = f => (...args) => !f(...args);

  return {
    toBe: (value) => {if(!equal(value)){
      throw new Error()
    }},
    not: {
      toBe: (value) => {
        if(equal(value)){
          throw new Error()
        }
      }
    }
  }
}

// tests:

/*

myExpect(3).toBe(3)
myExpect(4).toBe(3)
myExpect(null).toBe(undefined)
myExpect(null).not.toBe(undefined)
myExpect(3).not.toBe(3)
myExpect(4).not.toBe(3)
myExpect(0).not.toBe(-0)
myExpect(NaN).toBe(NaN)

 */
