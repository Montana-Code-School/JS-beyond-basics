var person = {
  name: 'Jack',
  location: {
    city: 'Missoula',
    state: 'Montana'
  },
  getName: function() {
    console.log('Name ', this.name)
  }
}
person['lastName'] = 'Peterson'
person.age = 26
// console.log('lastName ', person.lastName, person['lastName'])


// person.getName()
// console.log('person keys ', Object.keys(person))

var personArray = ['Ed', 'Missoula', 'Montana']
for (let i = 0; i < personArray.length; i++) {
  const element = personArray[i];

}
// for ... in loop (only loops over enumerable properties)
// ===============

for(const key in person) {
  // console.log('key :', key)
  // console.log('value :', person[key])
}

for(var arrKey in personArray) {
  // console.log('key :', arrKey)
  // console.log('value :', personArray[arrKey])
}

// Checking properties
// ===================

// console.log(personArray.hasOwnProperty('indexOf'))
if ('indexOf' in personArray) {
  // console.log('has indexOf')
}

// delete person[name]
//console.log('person ', person)

// delete personArray[1]
// console.log('personArray ', personArray)


var name = 'jack'
var lastName = 'peterson'

var newPerson = {
  name: name,
  lastName: lastName
}
