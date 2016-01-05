var assert = require('assert')
var concat = require('./')

// Does not modify original array
var arr = [1, 2]
assert.notEqual(concat(arr), arr)

// Correctly concatenates arrays
assert.deepEqual(concat([1, 2], [3, 4]), [1, 2, 3, 4])
assert.deepEqual(concat([1, 2], [], []), [1, 2])
assert.deepEqual(concat([1, 2], undefined), [1, 2])
assert.deepEqual(concat([1, 2], {}), [1, 2])

// Works with argument arrays
;(function () {
  assert.deepEqual(concat(arguments, ['c']), ['a', 'b', 'c'])
})('a', 'b')

// Does not flatten arrays
assert.deepEqual(concat(['a', ['b', 'c']], ['d']), ['a', ['b', 'c'], 'd'])

// Please only use the concat with strings
// It just iterates through the arguments
assert.deepEqual(concat([1, 2], 'foo'), [1, 2, 'f', 'o', 'o'])

process.on('exit', function (exitCode) {
  if (!exitCode) console.log('All tests succeeded.')
})
