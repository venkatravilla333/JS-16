

var timeOut = setTimeout(() => {
  console.log('settimeout')
}, 4000)

var timeOutBtn = document.getElementById('timeout')

let timeOutFun = () => {
  clearTimeout(timeOut)
}

timeOutBtn.addEventListener('click', timeOutFun)



var removeIntervalTime = setInterval(() => {
  console.log('setinterval')
}, 4000)

var removeIntervalBtn = document.getElementById('interval')


let removeIntervalFun = () => {
  clearInterval(removeIntervalTime)
}

removeIntervalBtn.addEventListener('click', removeIntervalFun)