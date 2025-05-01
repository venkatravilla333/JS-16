
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


function test (a, ...rest) {
  // console.log(rest)
  // console.log(rest[0])
  // console.log(rest[1])
  // console.log(rest[2])
  // console.log(rest[3])
  // console.log(rest[4])

  var sum = 0
  for (var value of rest) {
    console.log(value)
    sum += value
  }
  console.log(sum)
}

test(1, 2, 3, 4, 5)


