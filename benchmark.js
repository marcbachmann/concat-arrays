/* eslint-disable no-console */
const concat = require('./')
benchmark('concat-arrays', function () { concat(['a', 'd'], [1], [2]) })
benchmark('native concat', function () { [].concat(['a', 'd'], [1], [2]) })

console.log('END')

function benchmark (name, method) {
  const start = process.hrtime()
  for (let i = 0; i < 100000000; i++) method()
  const end = process.hrtime(start)

  const ns = (end[0] * 1e9) + end[1]
  const ms = ns / 1e6

  console.log('%s took %s milliseconds', name, ms)
}
