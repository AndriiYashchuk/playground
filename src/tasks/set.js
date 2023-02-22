
/**
 * @param {object} obj
 * @param {string | string[]} path
 * @param {any} value
 *
 *
 *
 * _.set(object, path, value) is a handy method to updating an object without checking the property existence.
 *
 * Can you create your own set()?
 *
 * const obj = {
 *   a: {
 *     b: {
 *       c: [1,2,3]
 *     }
 *   }
 * }
 * set(obj, 'a.b.c', 'BFE')
 * console.log(obj.a.b.c) // "BFE"
 *
 * set(obj, 'a.b.c.0', 'BFE')
 * console.log(obj.a.b.c[0]) // "BFE"
 *
 * set(obj, 'a.b.c[1]', 'BFE')
 * console.log(obj.a.b.c[1]) // "BFE"
 *
 * set(obj, ['a', 'b', 'c', '2'], 'BFE')
 * console.log(obj.a.b.c[2]) // "BFE"
 *
 * set(obj, 'a.b.c[3]', 'BFE')
 * console.log(obj.a.b.c[3]) // "BFE"
 *
 * set(obj, 'a.c.d[0]', 'BFE')
 * // valid digits treated as array elements
 * console.log(obj.a.c.d[0]) // "BFE"
 *
 * set(obj, 'a.c.d.01', 'BFE')
 * // invalid digits treated as property string
 * console.log(obj.a.c.d['01']) // "BFE"
 *
 *
 */
function set(obj, path, value) {
  const isPathString = typeof path === 'string'
  const paths = isPathString ? path.split('.') : path;

  return paths.reduce((ob, p, i) => {
    const updateArray = p.match(/\[\d+\]/);
    if(ob){
      let index;
      let prop;

      if(updateArray){
        index = Number(updateArray[0].match(/\d+/)[0]);
        prop = p.replace(updateArray[0], '');
      }

      if(paths.length === (i + 1)){
        if(!updateArray){
          ob[p] = value;
        } else {
          if(prop && ob[prop]){
            ob[prop][index] = value;
            return;
          } else{
            if(!ob[prop]){
              ob[prop] = [value]
              return;
            }

            ob[index] = value;
          }
        }
      }


      if(!ob[p] && !updateArray){
        ob[p] = {};
      }

      return ob[p];
    }

    return value;
  }, obj);

}

const obj = {
  a: {
    b: {
      c: [1,2,3]
    }
  }
}

// set(obj, 'a.b.c', 'BFE')
// set(obj, 'a.b.c.0', 'BFE')
// set(obj, 'a.b.c[1]', 'BFE')
// set(obj, ['a', 'b', 'c', '2'], 'BFE')
// set(obj, 'a.b.c[3]', 'BFE')
// set(obj, 'a.c.d[0]', 'BFE')
// set(obj, 'a.c.d.01', 'BFE')
set(obj, 'a.b.c[1]', 'BFE');
console.log(obj.a );



