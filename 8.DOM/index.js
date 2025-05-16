
//how to examine dom

// console.log(document)
// console.dir(document)

//How to read dom properties

// console.log(document.title)
// console.log(document.URL)
// console.log(document.all)
// console.log(document.links)
// console.log(document.forms)
// console.log(document.charset)
// console.log(document.doctype)


//How to access dom nodes into js file

//ID

// var para1 = document.getElementById('one')
// var para2 = document.getElementById('two')
// console.log(para1)
// console.log(para2)

// paraOne.innerText = 'Hello Sachin'
// paraOne.style.background = 'blue'


//Class

// var elements = document.getElementsByClassName('myclass')
// console.log(elements)

// elements[0].style.color = 'red'
// elements[1].style.color = 'red'

//TAG

// var paras = document.getElementsByTagName('p')
// console.log(paras)

//QuerySelector

// var x = document.querySelector('#one')
// var x = document.querySelector('.myclass')
// var x = document.querySelector('p')
// console.log(x)

//QuerySelectorall

// var x = document.querySelectorAll('#one')
// var x = document.querySelectorAll('.myclass')
// var x = document.querySelectorAll('p')
// console.log(x)

//Traversing of DOM

// var currentElement = document.getElementById('current')
// console.log(currentElement)

// currentElement.style.background = 'yellow'

// var parent = currentElement.parentElement
// console.log(parent)
// parent.style.background = 'black'

// var preSib = currentElement.previousElementSibling

// console.log(preSib)
// preSib.style.background = 'cyan'

// var nextSib = currentElement.nextElementSibling
// nextSib.style.background = 'green'

// var firstChild = currentElement.firstElementChild

// console.log(firstChild)
// firstChild.style.background = 'red'

// var lastChild = currentElement.lastElementChild

// console.log(lastChild)

// lastChild.style.background = 'orange'

// var allChilds = currentElement.children

// console.log(allChilds)


//Manipulating DOM

//Adding

// api

// var text = 'This is para'

// var para = document.createElement('p')
// para.id = 'myid'
// para.className = 'myclass'
// para.innerText = text
// console.log(para)

// var parent = document.getElementById('body')
// console.log(parent)

// parent.appendChild(para)

// var h4 = document.createElement('h4')
// h4.id = 'myh4'

// var text = document.createTextNode('This is heading four')
// console.log(text)
// h4.appendChild(text)

// h4.innerText = 'This is heading four'

// console.log(h4)

// parent.appendChild(h4)
// parent.insertBefore(h4, para)

//Replace

// var div = document.createElement('div')

// div.id = 'mydiv'

// div.innerText = 'data from database'

// console.log(div)

// parent.replaceChild(div, h4)


//delete

// parent.removeChild(para)


//How to attach events to dom elements

// var btn = document.getElementById('btn')
// console.log(btn)

// var para = document.createElement('p')

// para.id = 'mypara'

// para.innerText = 'This is my para'

// var body = document.getElementById('body')

// function clickBtn() {
//   console.log('hi')
//   body.appendChild(para)
// }

// btn.addEventListener('click', clickBtn)

//Event handling


