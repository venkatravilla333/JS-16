

var subChild = document.getElementById('subchild')
var child = document.getElementById('child')
var parent = document.getElementById('parent')

var subChildFun = (x) => {
  console.log('subchild')
  // console.log(e)
  // console.log(e.target)
  // // e.preventDefault()
  // e.stopPropagation()
  // console.log(e.clientX)
  // console.log(e.clientY)
  // console.log(e.offsetX)
  // console.log(e.offsetY)
  
}
var childFun = (e) => {
  console.log('child')
  console.log(e)
}
var parentFun = (e) => {
  console.log('parent')
  console.log(e)
}

subChild.addEventListener('click', subChildFun)
child.addEventListener('click', childFun)
parent.addEventListener('click', parentFun)





