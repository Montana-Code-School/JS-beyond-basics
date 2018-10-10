/*
.forEach
.map
.filter
.reduce

.splice
.slice
.split
.join
*/

const pets = [
  {
    type: 'dog',
    age: 6
  }, {
    type: 'cat',
    age: 12
  }, {
    type: 'dog',
    age: 4
  }, {
    type: 'turtle',
    age: 35
  }
]

// pets.forEach((pet) => {
//   console.log('pet type ', pet.type)
// })

const petsAged = pets.map(({ age, type }) => {
  return {
    type,
    age: age + 20
  }
})


const petsUnder10_MapFilter = pets.filter((pet) => pet.age < 10 ).map((pet) => pet.age)


const petsUnder10_Reduce = pets.reduce((accumulator, pet) => {
  const { age } = pet;
  if (age < 10) {
    accumulator.push(age)
  }
  return accumulator
}, [])


function dogUnder5(pet) {
  return pet.type === 'dog' && pet.age < 5
}
const firstDogUnder5 = pets.find(dogUnder5)
