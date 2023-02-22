// This is a JavaScript coding problem from BFE.dev

/**
 * @param {Array<any>} list

 Given an array of integers, move zeros to the end while keeping the order of the rest.

 You should make the in-place change.

 const list = [1,0,0,2,3]
 moveZeros(list)
 console.log(list) // [1,2,3,0,0]
 What is the time & space complexity of your approach?

 */

function moveZeros(list) {
  let counter = 0;
  let i = 0;
  for(; i < list.length - counter; i++){
    if(list[i] === 0){
      list.splice(i, 1);
      list.push(0)
      counter+=1;
      i -= 1;
    }
  }

  return list
}

console.log(moveZeros([0,0,0]))
