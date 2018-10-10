setTimeout(() => {
  console.log('hello')
  // throw Error
}, 0)

console.log('goodbye')
function setTimeoutPromiseFunction () {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('hello')
      resolve('goodbye')
      // reject('Oh no!')
    }, 0);
  })
}
////more stuff

setTimeoutPromiseFunction().then((arg) => {
  console.log(arg)
}).catch(err => {
  console.log(err)
})
console.log('post promise')
function getCat() {
  axios.get('https://aws.random.cat/meow')
    .then((res) => {
      document.body.innerHTML = '';
      const el = document.createElement('img');
      el.src = res.data.file;
      el.style.height = '500px'
      el.style.width = '500px'
      document.body.appendChild(el)
    })
}
getCat();
setInterval(getCat, 3000)
