var concat = require('./')
benchmark('concat-arrays', function () { concat(['a', 'd'], [1], [2]) })
benchmark('native concat', function () { [].concat(['a', 'd'], [1], [2]) })

console.log('END')

function benchmark (name, method) {
  var start = process.hrtime()
  for (var i = 0; i < 100000000; i++) method()
  var end = process.hrtime(start)

  var ns = end[0] * 1e9 + end[1]
  var ms = ns / 1e6

  console.log('%s took %s milliseconds', name, ms)
}
