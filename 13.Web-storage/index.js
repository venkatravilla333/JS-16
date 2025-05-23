


// var setBtn = document.getElementById('set')

// let setBtnFun = () => {
//   localStorage.setItem('name', 'kohli')
//   localStorage.setItem('age', 40)
//   console.log('hello')
// }

// setBtn.addEventListener('click', setBtnFun)

// var getBtn = document.getElementById('get')

// let getBtnFun = () => {
  
//   console.log(localStorage.getItem('name'))
//   var para = document.createElement('p')
//   para.innerText = localStorage.getItem('name')
//   var parent = document.getElementById('parent')
//   parent.appendChild(para)
// }

// getBtn.addEventListener('click', getBtnFun)


// var removeBtn = document.getElementById('remove')

// let removeBtnFun = () => {
//   localStorage.removeItem('name')
//   localStorage.removeItem('age')
// }

// removeBtn.addEventListener('click', removeBtnFun)


// var clearBtn = document.getElementById('clear')

// let clearBtnFun = () => {
//   localStorage.clear()
// }

// clearBtn.addEventListener('click', clearBtnFun)

//session storage

var setBtn = document.getElementById('set')

let setBtnFun = () => {
  sessionStorage.setItem('name', 'kohli')
  sessionStorage.setItem('age', 40)
}

setBtn.addEventListener('click', setBtnFun)


var getBtn = document.getElementById('get')

let getBtnFun = () => {
  
  console.log(localStorage.getItem('name'))
  var para = document.createElement('p')
  para.innerText = sessionStorage.getItem('name')
  var parent = document.getElementById('parent')
  parent.appendChild(para)
}

getBtn.addEventListener('click', getBtnFun)


var removeBtn = document.getElementById('remove')

let removeBtnFun = () => {
  sessionStorage.removeItem('name')
  sessionStorage.removeItem('age')
}

removeBtn.addEventListener('click', removeBtnFun)


var clearBtn = document.getElementById('clear')

let clearBtnFun = () => {
  sessionStorage.clear()
}

clearBtn.addEventListener('click', clearBtnFun)