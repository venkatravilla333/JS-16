

// console.log(window)

// console.log(setTimeout)
// console.log(setInterval)
// console.log(clearTimeout)
// console.log(clearInterval)
// console.log(alert)
// console.log(prompt)
// console.log(confirm)
// console.log(fetch)
// console.log(localStorage)
// console.log(sessionStorage)
// console.log(document)
// console.log(location)
// console.log(navigator)
// console.log(history)

// console.log(window.innerHeight)
// console.log(window.innerWidth)

// window.alert('Hello')
// var value = window.prompt()

// if (value) {
//   console.log(value)
// } else {
//   console.log(value)
// }

// var value = window.confirm()

// if (value) {
//   console.log(value)
// }else{
//   console.log(value)
// }


// var openBtn = document.getElementById('open')

// var win
// function openWinFun() {
// win =  window.open("", "", "width = 50, height = 50")
// }

// openBtn.addEventListener('click', openWinFun)

// var closeBtn = document.getElementById('close')

// function closeWinFun() {
//   win.close()
// }

// closeBtn.addEventListener('click', closeWinFun)

// var moveBtn = document.getElementById('move')

// function moveWinFun() {
//   win.moveTo(300, 0)
// }

// moveBtn.addEventListener('click', moveWinFun)

// var sizeBtn = document.getElementById('size')

// function sizeWinFun() {
//   win.resizeTo(500, 500)
// }

// sizeBtn.addEventListener('click', sizeWinFun)

// console.log(window.document.title)
// console.dir(document)

// console.log(window.navigator.appName)
// console.log(window.navigator.language)
// console.log(window.navigator.platform)
// console.log(window.navigator.onLine)

// console.log(window.screen.width)
// console.log(window.screen.height)

console.log(window.location.pathname)
console.log(window.location.href)
console.log(window.location.protocol)
console.log(window.location.hostname)

var docBtn = document.getElementById('doc')

var docFun = () => {
  window.location.assign('https://reyansoft.in/')
}

docBtn.addEventListener('click', docFun)

var forwardBtn = document.getElementById('forward')

var forwardFun = () => {
  window.history.forward()
}

forwardBtn.addEventListener('click', forwardFun)