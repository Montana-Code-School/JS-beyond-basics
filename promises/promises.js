// Async code
// ==========

setTimeout(() => {
  // console.log('hello')
  // throw Error
}, 0)

// console.log('goodbye')

// With Promise:
// ============

function setTimeoutPromiseFunction () {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log('hello')
      // resolve('goodbye')
      // reject('Oh no!')
    }, 0);
  })
}

setTimeoutPromiseFunction().then((arg) => {
  // console.log(arg)
}).catch(err => {
  // console.log(err)
})
// console.log('post promise')

// API call
// ========
function getCat() {
  axios.get('https://aws.random.cat/meow')
    .then((res) => {
      const data = res.data;
      appendCat(data)
    })
}
// getCat();
// setInterval(getCat, 3000)


// API call with async / await
// ===========================

async function getAnotherCat() {
  const { data } = await axios.get('https://aws.random.cat/meow')
  appendCat(data);

  // Same as below
  // const res = await axios.get('https://aws.random.cat/meow')
  // appendCat(res.data);
}

// getAnotherCat()

// Helper
// ======

// Note destructure is happening at the argument level here.
function appendCat({ file }) {
  document.body.innerHTML = '';
  const el = document.createElement('img');
  el.src = file;
  el.style.height = '500px'
  el.style.width = '500px'
  document.body.appendChild(el)
}
