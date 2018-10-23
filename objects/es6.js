const NAME = 'name';
const LOCATION = 'location';
const GET_NAME = 'getName';

const person_es6 = {
  [NAME]: 'Jack',
  [LOCATION]: {
    city: 'Missoula',
    state: 'Montana'
  },
  [GET_NAME]() {
    console.log('Name ', this.name)
  },
  getLocation() {
    for (let key in this.location) {
      console.log(`${key} : ${this.location[key]}`)
    }
  }
}
// console.log('person_es6  name', person_es6.name)

// person_es6.getLocation()

const name_es6 = 'jack'
const lastName_es6 = 'peterson'

const newPerson_es6 = {
  name_es6,
  lastName_es6,
}

newPerson_es6.name_es6
