function Person(name, age) {
  this.name = name
  this.age = age

}

Person.prototype = {
  sayName: function() {
    return 'Hi, I am ' + this.name
  },

  increaseAge: function(num) {
    this.age += num;
  },

  getAge: function() {
    return this.age;
  }
}

const person = new Person('Billy', 43)
person.sayName()

function Child(name, age, parent) {
  Person.call(this, name, age);
  this.parent = parent;
}

// Child.prototype = Person.prototype
Child.prototype = Object.create(Person.prototype)

Child.prototype.getParentName = function() {
  if (this.parent) {
    return this.parent.sayName();
  }
  return 'I don\'t have a parent'
}

const child = new Child('Suzie', 12, person);
// console.log(child.getParentName())
// console.log(child.sayName())
// console.log(person.getParentName())
