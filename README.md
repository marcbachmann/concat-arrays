# concat-arrays

Concatenates arrays or array-like objects (arguments)

```js
var concat = require('concat')
concat([1, 2], [3, 4], [4]) // returns [1, 2, 3, 4, 4]

// Unlike [].concat, this module also works with arguments
function appendOne () {
    return concat(arguments, [1])
}

appendOne('3', '2') // returns [3, 2, 1]

// It rejects falsy values
concat(null, [], undefined) // returns []



```
