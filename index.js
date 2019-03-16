module.exports = concatArrays

function concatArrays () {
  const concatenated = []
  let array

  for (let a = 0, alen = arguments.length; a < alen; a++) {
    array = arguments[a]
    if (!(array && array.length)) continue
    for (let b = 0, blen = array.length; b < blen; b++) {
      concatenated.push(array[b])
    }
  }

  return concatenated
}
