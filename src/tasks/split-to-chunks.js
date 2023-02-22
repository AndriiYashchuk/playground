/**
 * subset([1,2, 3, 4, 5, 6, 7, 8, 9], 2) -> [[1, 2], [3, 4], [5, 6], [7, 8], [9]]
 */


const getChunk = (source, chunkLength) => {
  return [source, source.splice(chunkLength)]
}

const splitToChunks = (source, chunkLength) => {
  const res = [];

  do{
    const [chunk, restSource] = getChunk(source, chunkLength);
    source = restSource;

    res.push(chunk);
  }while (source.length > chunkLength)
  return res.concat([source])
}

const splitToChunks2 = (source, chunkLength) => {
  const res = [];
  let chunk = [];

  source.forEach((item, index) => {
    chunk.push(item);
    if((index + 1) % chunkLength === 0){
      res.push(chunk);
      chunk = [];
    }
  })
  return res.concat([chunk]);
}

console.log(splitToChunks2([1,2, 3, 4, 5, 6, 7, 8, 9], 2))
