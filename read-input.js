const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('How are you today? ', (answer) => {
  var a = 5;
  debugger; 
  console.log(`I understand that you are ${answer}`)

  rl.close()
})
