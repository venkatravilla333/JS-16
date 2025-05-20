
// console.log('Hi')

// console.log('hello')

// setTimeout(() => {
//   console.log('Timer-1')
// }, 4000)

// setTimeout(() => {
//   console.log('Timer-2')
// }, 0)

// Promise.resolve().then(() => console.log('PR-1')).then(() => console.log('PR-2'))

// console.log('Bye')

// setTimeout(() => {
//   console.log('Timer-3')
// }, 1000)

// console.log('good bye')


// function fetchData(num, displayData) {
//   setTimeout(() => {
//     // var data = 'sachin'
//     var data = num*num
//     displayData(data)
//   }, 4000)
// }

// fetchData(2, (data1) =>{
//   console.log(data1)
//   fetchData(data1, (data2) => {
//     console.log(data2)
//     fetchData(data2, (data3) => {
//       console.log(data3)
//       fetchData(data3, (data4) => {
//         console.log(data4)
//         fetchData(data4, (data5) => {
//           console.log(data5)
//         })
//       })
//     })
//   })
// })

// displayData()


//Promise

// function fetchData(num) {
//  return new Promise((res, rej) => {
//     setTimeout(() => {
//       // var data = 'sachin'
//       var data = num*num
//       res(data)
//     }, 4000)
//   })
// }
// fetchData(2).then((data1)=> {
//   console.log(data1)
//  return fetchData(data1)
// }).then((data2) => {
//   console.log(data2)
//   return fetchData(data2)
// }).then((data3) => {
//   console.log(data3)
//   return fetchData(data3)
// }).then((data4) => {
//   console.log(data4)
// })


// function fetchData(num) {
//    return new Promise((res, rej) => {
//       setTimeout(() => {
//         // var data = 'sachin'
//         var data = num*num
//         rej(data)
//       }, 4000)
//     })
//   }
//  console.log(fetchData(2))


function fetchData(num) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      // var data = 'sachin'
      var data = num*num
      res(data)
    }, 4000)
  })
}


async function displayData() {
  var data1 = await fetchData(2)
  console.log(data1)
  var data2 = await fetchData(data1)
  console.log(data2)
  var data3 = await fetchData(data2)
  console.log(data3)
  var data4 = await fetchData(data3)
  console.log(data4)
}
displayData()









