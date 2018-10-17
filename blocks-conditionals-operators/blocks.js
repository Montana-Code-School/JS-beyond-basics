// if...else

function fizzBuzz(value) {
  const fizz = value % 3 === 0;
  const buzz = value % 5 === 0;
  if (fizz && buzz) {
    console.log('FIZZBUZZ')
  } else if (fizz) {
    console.log('FIZZ')
  } else if (buzz) {
    console.log('BUZZ')
  } else {
    console.log(value)
  }
}

// Run these
// fizzBuzz(9)
// fizzBuzz(15)
// fizzBuzz(23)
// fizzBuzz(10)

// switch...case
// ===========

function saySomething(value) {
  switch (value) {
    case 'name':
      console.log('My Name is Jack')
      break;
    case 'age':
      let age = 'I Can Be Accessed'
      console.log('I am 28')
      // without `break` or `return` the next case will be checked and `default` will be executed
    case 'birthday': {
      let birthday = 'I Can NOT Be Accessed'
      console.log('August 29')
    }
    default:
      // scope bleed because the 'age' case is not wrapped in a block
      console.log(age)
      // this will not bleed because the 'birthday' case is wrapped in a block
      // console.log(birthday)
      console.log('Default case')
      break;
  }
}

// Run these
// saySomething('name')
// saySomething('age')
// saySomething('birthday')

// try...catch
// ===========

function sayString(value) {
  try {
    const valueType = typeof value;
    if (valueType !== 'string') throw 'Input was not type string'
    // notDefined
    console.log('I say ', value)
  } catch(err) {
    console.log('ERROR: ', err)
  }
}

// sayString('hey')

async function replaceProfanity() {
  try {
    const url = 'https://www.purgomalum.com/service/json?text='
    const stringToSanitize = 'this is some fucking test input'
    const tooLongReplaceText = 'This sentence is way too long to go in as filler text'
    const { data } = await axios.get(`${url}${stringToSanitize}&fill_text=${tooLongReplaceText}` )
    if (data.error) throw data.error
    console.log('response ', data)
  } catch(err) {
    console.log('ERROR replacing profanity: ', err)
  }
}

// replaceProfanity()
