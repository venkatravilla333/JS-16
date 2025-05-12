// var products = [
//   {
//     name: 'laptop',
//     price: 30000,
//     qty: 40,
//     rating: 4,
//   },
//   {
//     name: 'laptop',
//     price: 30000,
//     qty: 40,
//     rating: 4,
//   },
// ];
// console.log(products);


//How to add new values / items to array

// var arr = [2, 3, 4]

// last
// console.log(arr)

// arr.push(5)

// console.log(arr)

// first

// arr.unshift(1)
// console.log(arr)

//anywhere

// arr.splice(0, 0, 'Hi')
// arr.splice(arr.length, 0, 'Bye')
// arr.splice(2, 0, 'kohli')
// console.log(arr)

//How to remove array items

// var arr = [1, 2, 3, 4, 5, 6]

// console.log(arr)

//ending
// arr.pop()
// console.log(arr)

//starting

// arr.shift()
// console.log(arr)

//anywhere

// arr.splice(0, 1, 'hi')

// arr.splice(arr.length - 1, 1)

// arr.splice(2, 2)


// console.log(arr)


//How to remove all items from array

// var arr1 = [1, 2, 3, 4, 5, 6]

// var arr2 = arr1

// arr1.length = 0
// arr1.splice(0, arr1.length)
// arr1 = []
// console.log(arr1)
// console.log(arr2)

//How to find array items

// var arr = [1, 2, 3, 4, 5, 2]
// var arr = [{course: 'react'}, {course: 'nodejs'}, {course: 'react'}]

//Primitives

// console.log(arr.indexOf(2))
// console.log(arr.indexOf(20))
// console.log(arr.lastIndexOf(2))
// console.log(arr.lastIndexOf(20))
// console.log(arr.includes(2))
// console.log(arr.includes(20))


// console.log(arr.indexOf({course: 'react'}))
// console.log(arr.lastIndexOf({course: 'react'}))
// console.log(arr.includes({course: 'react'}))

// console.log(arr.find((item) => {
//   return item.course === 'react'
// }))
// console.log(arr.findIndex((item) => {
//   return item.course === 'html'
// }))
// console.log(arr.findLastIndex((item) => {
//   return item.course === 'html'
// }))

//How to merge two or more array into one array

// var arr1 = [1, 2, 3, 4, 5]
// var arr2 = [6, 7, 8, 9, 10]
// var arr3 = [11, 12, 13, 14, 15]
// console.log(arr1)
// console.log(arr2)

// ES-5

// var arr4 = arr3.concat(arr1, arr2)
// console.log(arr3)

//ES-6

// var arr4 = [...arr3, ...arr1, ...arr2 ]
// console.log(arr4)







