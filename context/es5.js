var person = {
  name: 'Jack',
  pets: ['dog', 'cat', 'turtle'],
  saySomething: function () {
    console.log(arguments)
  },
  sayPetAndOwner: function (pet) {
    // console.log('this ', this)
    const sentence = 'This is ' + this.name + '\'s pet ' + pet;
    this.saySomething(sentence)
  },
}

function sayCurrentPets() {
  this.pets.forEach(this.sayPetAndOwner)
}

// sayCurrentPets.call(person)

var newPets = ['fish', 'bird']

function sayNewPets(firstPet, secondPet) {
  console.log('I am ' + this.name + ' and these are my new pets: ')
  console.log(firstPet)
  console.log(secondPet)
}

// sayNewPets.apply(person, newPets)
// sayNewPets.call(person, newPets)
