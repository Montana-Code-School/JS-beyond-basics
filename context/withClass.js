// TODO: get everything to work!

class Person {
  constructor(name) {
    this.name = name
  }

  sayName () {
    console.log(`I am ${this.name}`)
  }

  sayNameDelayed() {
    setTimeout(this.sayName, 1000)
  }
}

const jack = new Person('Jack')
document.getElementById('sayName').addEventListener('click', jack.sayName)
// jack.sayName()
// jack.sayNameDelayed()
// console.log(Object.keys(jack))
