module.exports = concatArrays

function concatArrays () {
  var concatenated = []
  var array
  var index = 0

  for (var a = 0, alen = arguments.length; a < alen; a++) {
      array = arguments[a]
      if (!(array && array.length)) continue
      for (var b = 0, blen = array.length; b < blen; b++) {
          concatenated[index++] = array[b]
      }
  }

  return concatenated
}
