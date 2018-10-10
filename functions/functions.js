// Function expressions vs declarations
// =====================================

// logFunction_Expression()
// logFunction_Declaration()
// function_Expression()
// function_Expression_Named()

var logFunction_Expression = function() {
  console.log('logFunction_Expression')
  // throw Error
}

function logFunction_Declaration () {
  console.log('logFunction_Declaration')
  // throw Error
}

const function_Expression = function function_Expression_Named() {
  console.log('function_Expression')
  // throw Error
}

const fatArrow_Expression = () => {
  console.log('fatArrow_Expression')
  throw Error
}

// logFunction_Expression()
// logFunction_Declaration()
// function_Expression()
// fatArrow_Expression()


// Default Params
// ==============
// ES5
function addAtLeastOne(x, y) {
  y = y || 1
  return x + y
}
// console.log('old: 3 ', addAtLeastOne(3))
// console.log('old: 3+5 ', addAtLeastOne(3, 5))

//ES6
function addAtLeastOneNew(x, y = 1) {
  return x + y
}

// console.log('new: 3 ', addAtLeastOneNew(3))
// console.log('new: 3+5 ', addAtLeastOneNew(3, 5))

function addOneDestructure (options) {
  const { x, y } = options;
  return x + y
}
// console.log(addOneDestructure({ x: 3, y: 5}))

// IIFEs and closures
// ==================

const person = (function createPerson(name, lastName, age) {
  const person = {
    name: name,
    lastName: lastName,
    age: age,
  }

  function getFirstName() {
    return name
  }

  function getLastName() {
    return lastName
  }

  return {
    getAge: function() {
      console.log('I am ', age)
    },

    getFullName: function() {
      console.log(getFirstName() + ' ' + getLastName())
    }
  }
})('Jack', 'Peterson', 28)


// person.getAge()
// person.getFullName()
// person.getFirstName()
// getFirstName()


function sayHello() {
  const say = function () { console.log(hello); }
  // Local variable that ends up within the closure
  const hello = 'Hello, world!';
  return say;
}
const sayHelloClosure = sayHello();
// sayHelloClosure();


// Counter closure
/*
Lets say you want to have some global counter on your page. It's generally bad idea to pollute global
scope with variables so we can use a closure.
*/

//bad
let counter = 0;

function addToCounter(num) {
  counter += num;
  return counter
}

console.log(addToCounter(1)) // 1
console.log(addToCounter(4)) // 5

// good
function addToCounter_Closure(initial) {
  let counter = initial;
  return function(num) {
    counter += num;
    return counter;
  }
}

const addTo3 = addToCounter_Closure(3)
console.log(addTo3(1)) // 4
const addTo12 = addToCounter_Closure(12)
console.log(addTo12(3)) // 15
