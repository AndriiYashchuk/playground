/**
 *
 * These helpers requires extra effort for us to remember how to use them, while Immer takes another approach which might be easier to use.
 *
 * For example, we have a base state as below.
 *
 * const state = [
 *   {
 *     name: 'BFE',
 *   },
 *   {
 *     name: '.',
 *   }
 * ]
 * We can use produce() to patch our modification and get a new state.
 *
 * const newState = produce(state, draft => {
 *   draft.push({name: 'dev'})
 *   draft[0].name = 'bigfrontend'
 *   draft[1].name = '.' // set with the same value
 * })
 * Unchanged parts are not cloned.
 *
 * expect(newState).not.toBe(state);
 * expect(newState).toEqual(
 *   [
 *     {
 *       name: 'bigfrontend',
 *     },
 *     {
 *       name: '.',
 *     },
 *     {
 *       name: 'dev'
 *     }
 *   ]
 * );
 * expect(newState[0]).not.toBe(state[0])
 * expect(newState[1]).toBe(state[1])
 * expect(newState[2]).not.toBe(state[2])
 * Please implement your produce().
 *
 * This is not to recreate Immer, test cases only cover the basic usage.
 * You only need to support basic usage on plain object and array, things like Map/Set, Auto freezing .etc are out of scope.
 * You need to make sure unchanged parts are not cloned.
 */


const getImmutableObj = source => {
  let proxy;
  const handler = {
    set(obj, prop, value){
      debugger
      const newState = { ...proxy, [prop]: value }

      proxy = new Proxy(newState, handler);

      return true
    }
  }

  proxy = new Proxy(source, handler);
  return proxy;
}

const produce = (base, recipe) => {

  const handler = {
    get: (target, prop, receiver) => {
      if (prop === 'push') {
        return newItem => {
          const newState = [...target, newItem];
          proxy = new Proxy(newState, handler)
        }
      }

      const value = Reflect.get(target, prop, receiver);
      const isObject = typeof value === 'object';

      return isObject ? new Proxy(value, handler) : value;
    },

    set(obj, prop, value) {

      debugger
      // The default behavior to store the value
      obj = { ...proxy , [prop]: value };

      // Indicate success
      return true;
    },
  };

  let proxy = new Proxy(base, handler);
  recipe(proxy);

  return proxy;
}

const state = [
  {
    name: 'BFE',
  },
  {
    name: '.',
  }
]

const newState = produce(state, draft => {
  draft.push({name: 'dev'})
  draft[0].name = 'bigfrontend'
  draft[1].name = '.' // set with the same value
})

// console.log(newState);
//
//
// console.log(newState[0] === state [0])
// console.log(newState[1] === state [1])


const obj = getImmutableObj({ a: 1 });
const obj1 = obj;
obj1.a = 2;

console.log(obj === obj1)
