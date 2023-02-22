const callbacks = []
for (var i = 0; i < 5; i++) {
  callbacks.push(function() {
    return i
  })
}

for (let i = 0; i < callbacks.length; i++) {
  console.log(callbacks[i]())
}
