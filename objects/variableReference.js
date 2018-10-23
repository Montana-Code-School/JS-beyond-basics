const obj1 = {
  a: 1,
  b: 10,
}

let a = obj1.a
a++
// console.log('obj1 ', obj1)
// console.log('a ', a)
// console.log('obj1.b++ : ', obj1.b++)
// console.log('obj1.b ', obj1.b)


/*
 Now `obj1` and `obj2` are references to the SAME object in memory. Aka manipulation either will manipulate that one object
and both variables will be affected
*/

const obj2 = obj1
// console.log('obj2.b++ :  ', obj2.b++)
// console.log('obj1 : ', obj1)
// obj1.a++
// console.log('obj2 ', obj2)

const nested1 = {
  nest: {
    a: 1
  },
  b: 1,
}

const nested2 = { ...nested1 }

/*
`nest` is a reference to the same object, so any manipulation here will update both nested1 and 2
*/

const nest = nested1.nest

nest.a++
nest.hello = 'hello'
nested1.b++
// console.log('nested 1 ', nested1)
// console.log('nested 2 ', nested2)
