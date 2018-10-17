// if...else
// =========
function ifElse(firstArg, secondArg) {
  if (secondArg) {
    return secondArg
  } else {
    return firstArg
  }
}

// console.log(ifElse('Jack'))
// console.log(ifElse('Jack', 'Jill'))

// ternary operator
// =================

function ternaryOp(firstArg, secondArg) {
  return secondArg ? secondArg : firstArg
}

// console.log(ternaryOp('Jack'))
// console.log(ternaryOp('Jack', 'Jill'))


/* &&
This will check the left side and if it's falsy, it will return the first value. If the first value is truthy,
it will return the second value. This functionality let's it work as part of an `if` conditional
*/

function doubleAmpersand(firstArg, secondArg) {
  secondArg && console.log('&& - secondArg ', secondArg)
  firstArg && console.log('&& - firstArg ', firstArg)

  if (firstArg && secondArg) {
    console.log('Received two args')
  } else {
    console.log('Did not receive two args')
  }
}

// doubleAmpersand('Jack')
// doubleAmpersand('Jack', 'Jill')

/* ||
This will check from left to right and return the first truthy value.
This also let's it work as part of an `if` conditional
*/

function doublePipe(firstArg, secondArg) {
  if (firstArg || secondArg) {
    console.log('Received at least one arg')
  } else {
    console.log('received no args')
  }

  console.log('Second or first: ', secondArg || firstArg)
}

// doublePipe('Jack')
// doublePipe('Jack', 'Jill')


