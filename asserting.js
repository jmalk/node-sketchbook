const assert = require('assert')

const test = function (a, b) {
  try {
    assert.strictEqual(a, b)
    console.log('Test passed')
  }
  catch (e) {
    console.log('Test failed')
    console.log(e)
  }
}

console.log('Should fail')
test(1, 2)
console.log('Should pass')
test(1, 1)
