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

//copy or clone

// var originalArr = ['sachin', { road: 101 }, function play() { }]


// var copiedArr = originalArr // normal copy
// var copiedArr = JSON.parse(JSON.stringify(originalArr)) // deep copy
// var copiedArr = Object.assign([], originalArr) // shallow copy (ES-5)
// var copiedArr = originalArr.slice() // shallow copy (ES-5)
// var copiedArr = [...originalArr] // shallow copy (ES-6)

// copiedArr[0] = 'kohli'
// copiedArr[1].road = 201

// console.log(originalArr)
// console.log(copiedArr)


//How to loop array

// var arr = [1, 2, 3, 4, 5]


//without using loop

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

//for of loop (ES-6)

// for (var value of arr) {
  //   console.log(value)
  // }
  
  //forEach
  
  // var res = arr.forEach((v, i) => {
    //   // console.log(v, i)
    //   return v
    // })
    
    // console.log(res)
    

    //Map method
    
// var arr = [1, 2, 3, 4, 5]

// console.log(arr)
    
// let mapRes = arr.map((item) => {
//   return item*100
// })

// console.log(mapRes)
    
// let forEachRes = arr.forEach((item) => {
//   return item*100
// })

// console.log(forEachRes)


//filter

// var arr = [1, 2, 3, 4, 5]
// console.log(arr)


// var filteredRes = arr.filter((item) => {
  //   return item >5
// })
  
// var persons = [{ name: 'sachin', age: 40 }, { name: 'kohli', age: 30 }, { name: 'gill', age: 24 }]

// console.log(persons)

// var filteredRes = persons.filter((person) => {
//     return person.age <=30
// })
  
// console.log(filteredRes)

//reduce method

// var arr = [1, 2, 3, 4, 5]

// var reduceRes = arr.reduce((cum, cur) => {
//   console.log(cum, cur)
//   return cum+cur
// }, 0)

// console.log(reduceRes)


//Flattening of array

// var arr = [1, 2, [10, 20, [100, 200]]]

// console.log(arr)

//flat

// var flattenArr = arr.flat(Infinity)
// console.log(flattenArr)

// var flattenArr = []

// function flattenFun(arr) {
//   // console.log(arr)
//   for (var value of arr) {
//     console.log(value)
//     if (Array.isArray(value)) {
//       flattenFun(value)
//     } else {
//       flattenArr.push(value)
//     }
//   }

// }
// flattenFun(arr)

// console.log(flattenArr)


//How to remove duplicate values from array

var arr = [1, 2, 3, 4, 5, 3, 7, 3]
// console.log(arr)
// var uniqueArr = [...new Set(arr)]
// console.log(uniqueArr)

var uniqueArr = []
function removeDuplicate(arr) {
  console.log(arr)
  for (var value of arr) {
    if (uniqueArr.indexOf(value) === -1) {
      uniqueArr.push(value)
    }
  }
}

removeDuplicate(arr)

console.log(uniqueArr)
















