class Parent {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayName() {
    // NOTE TEMPLATE
    return `Hi, I am ${this.name}`
  }

  increaseAge(num) {
    this.age += num;
  }

  getAge() {
    return this.age;
  }

}

const parent = new Parent('Billy', 43)

class Kid extends Parent {
  constructor(name, age, parent) {
    super(name, age);
    this.parent = parent;
  }
  getParentName() {
    if (this.parent) {
      return this.parent.sayName();
    }
    return 'I don\'t have a parent'
  }
}

const kid = new Kid('Suzie', 12, parent);
console.log(kid)
// console.log(kid.getParentName())
// console.log(kid.sayName())
// console.log(parent.getParentName())
