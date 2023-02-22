// Let's take a look at following error-first callback.

const callback = (error, data) => {
  if (error) {
    // handle the error
  } else {
    // handle the data
  }
};

const func = (arg1, arg2, callback) => {
  // some async logic
  if (hasError) {
    callback(someError);
  } else {
    callback(null, someData);
  }
};
// You see what needs to be done now. Please implement promisify() to make the code better.



/**
 * @param {(...args) => void} func
 * @returns {(...args) => Promise<any}
 */
function promisify(func) {
  return function(){
    const boundFunction = func.bind(this);
    return new Promise((resolve, reject) => {
      boundFunction(...arguments, (error, data) => {
        if(error) return reject(error);

        resolve(data);
      })
    })
  }
}

const promisedFunc = promisify(func)

promisedFunc().then((data) => {
  // handles data
}).catch((error) => {
  // handles error
});


// TESTS:
/*

should work with error
should work with success
should work with functions of different argument length
should work with functions of 0 argument
should take care of `this`

 */
