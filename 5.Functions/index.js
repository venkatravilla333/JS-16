
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

// function outer() {
//   var x = 100
//   return function inner() {
//     console.log(x)
//   }
// }

// var inner = outer()
// inner()

//IIFE (ES-5)

// (()=> {
//   var a = 10
//   function test() {
//     var b = 20
//   }
//   test()
// })()
// console.log(a)

//Without function currying

// function sum(a, b, c) {
//   let sumValue = a + b + c
//   console.log(sumValue)
// }
// sum(10, 20, 30)

//with curry

// function fun1(a) {
//   return function fun2(b) {
//     return function fun3(c) {
//       var sumValue = a + b + c
//       console.log(sumValue)
//     }
//   }
// }
// fun1(10)(20)(30)

//without curry

// function calDis(price, dis) {
  //   var disAmout = price * dis
  //   console.log(disAmout)
// }

// calDis(1000, .1)
// calDis(1000, .2)
// calDis(1000, .3)
// calDis(1000, .4)
// calDis(1000, .5)

//with curry

// function calPrice(price) {
//   return function calDis(dis) {
//     var disAmout = price * dis
//     console.log(disAmout)
//   }
// }

// let calDis = calPrice(1000)
// calDis(.1)
// calDis(.2)
// calDis(.3)
// calDis(.4)
// calDis(.5)

//first class fuction

// var x = function (fun) {
//   console.log(fun)
//   return ()=>{}
//  }

// x(()=>{})

//HOF

// function hof(cb) {
//   console.log('hof')
//   cb()
//   return function inner() {
//     console.log('inner')
//   }
// }

// let inner = hof(function cb() {
//   console.log('cb')
// })

// inner()

//pure vs impure

// function pure(a,b,c) {
//   console.log(a + b + c)
  
// }

// pure(1, 2, 3)

// function impure(a, b, c) {
//   var d = Math.random()*100
//   console.log(a + b + c + d)
  
// }

// impure(1, 2, 3)


// function factorial(n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     console.log(n)
//     return n * factorial(n - 1);
//   }
// }

// let result = factorial(5);
// console.log(result);


// callback

// function test(cb) {
//   cb()
// }

// test(()=>{})
































