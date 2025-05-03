
//Define function

//declaration

// function test() {
//   var a = 10
//   console.log('declaration')
// }
// test()

// var x = function test() {
//   var b = 100
//   console.log('named')
// }
// x()

// var y = function () {
//   var c = 1000
//   console.log('ananymous')
// }

// y()

// var z = () => {
//   var d = 10000
//   console.log('arrow')
// }

// z()

//params vs arguments

// function test(a, b) {
//   console.log(a)
//   console.log(b)
//   var sum = a + b
//   return sum
  
// }
// console.log(test(10, 20))

//default parameter  (ES-6)

// function test(a = 10) {
//   console.log(a)
// }

// test()


// function test(a = undefined, b) {
//   console.log(a, b)
// }

// test(null, 20)


// function test() {
  
//   console.log(arguments)
//   // console.log(arguments[0])
//   // console.log(arguments[1])
//   // console.log(arguments[2])
//   // console.log(arguments[3])
//   // console.log(arguments[4])

//   var sum = 0
//   for (var value of arguments) {
//     console.log(value)
//     sum += value
//   }
//   console.log(sum)
//   console.log(Array.isArray(arguments))
// }

// test(1, 2, 3, 4, 5)


// function test (a, ...rest) {
  // console.log(rest)
  // console.log(rest[0])
  // console.log(rest[1])
  // console.log(rest[2])
  // console.log(rest[3])
  // console.log(rest[4])

//   var sum = 0
//   for (var value of rest) {
//     console.log(value)
//     sum += value
//   }
//   console.log(sum)
// }

// test(1, 2, 3, 4, 5)


//scope

//storage (Global)

// var a = 1
// let b = 2
// const c = 3

//access (Global)
// console.log(a)
// console.log(b)
// console.log(c)

// function test() {
//   //storage
//   var d = 4
//   let e = 5
//   const f = 6
//   //access
//   console.log(a)
//   console.log(b)
//   console.log(c)
//   console.log(d)
//   console.log(e)
//   console.log(f)

  


//   if (true) {

//     //storage
//     var g = 7
//     let h = 8
//     const i = 9
//     // access
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
//     console.log(e)
//     console.log(f)
//     console.log(g)
//     console.log(h)
//     console.log(i)
//   }
//     console.log(g)
//     // console.log(h)
//     // console.log(i)

// }
// test()
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)
// console.log(h)
// console.log(i)


// console.log(a)
// // let a = 'sachin'
// console.log(a)
// console.log(b)
// var b = 40
// console.log(b)

// console.log(c)
// var c = true
// console.log(c)

// console.log(d)
// var d
// console.log(d)

// console.log(e)
// var e = null
// console.log(e)

// console.log(f)
// var f = { name: 'kohli' }
// console.log(f)

// console.log(g)
// var g = [1, 2, 3]
// console.log(g)

// console.log(h)
// var h = function test() {
//   console.log('named')
// }
// // h()
// console.log(h)

// console.log(i)
// // i()
// var i = function () {
//   console.log('ananymous')
// }
// // i()
// console.log(i)

// console.log(j)
// var j = () => {
//   console.log('arrow')
// }
// j()
// console.log(j)

// console.log(declare)
// function declare() {
//   console.log('Declare')
// }
// declare()
// console.log(declare)


// var vs let const

//scope

//hoisting

//redeclaration

// var a = 10
// let a = 10
// const a = 10

// console.log(a)
// console.log(a)
// console.log(a)

// let a = 20

// console.log(a)
// console.log(a)
// console.log(a)

//re-assignment

// var a = 10
// let a = 10
// const a = 10
// console.log(a)

// a = 20
// console.log(a)

//initialisation

// var a
// let a
// const a = 10
// console.log(a)


// var x = 1

// function test() {
//   // console.log(x)
//   x = 10
//   console.log(x)
// }
// test()
// console.log(x)

// {
//   const x = 10
//   console.log(x)
// }
// console.log(x)


//closure

function outer() {
  var x = 100
  return function inner() {
    console.log(x)
  }
}

var inner = outer()
inner()




























