


// console.log(this)

// function test() {
//   console.log(this)
// }
// test()

// var test1 = () => {
//   console.log(this)
// }
// test()


var person = {
  name: 'sachin',
  age: 40,
  outer1: function () {
    console.log(this)
    var inner1 = ()=> {
      console.log(this)
    }
    inner1()
  },
  outer2: ()=> {
    console.log(this)
     function inner2  () {
      console.log(this)
    }
    inner2()
  }
}

person.outer1()
person.outer2()



// function Test() {
//   console.log(this)
//   this.name = 'sachin'
//   this.outer1 = function () {
//     console.log(this)
//     var inner1 = ()=> {
//       console.log(this)
//     }
//     inner1()
//   }
//   this.outer2 =  ()=> {
//     console.log(this)
//     function inner2(){
//       console.log(this)
//     }
//     inner2()
//   }
// }

// var person = new Test()
// person.outer1()
// person.outer2()


// class Test{
//   constructor() {
//     console.log(this)
//     this.name = 'sachin'
//     this.outer1 = function () {
//       console.log(this)
//       var inner1 = ()=> {
//         console.log(this)
//       }
//       inner1()
//     }
//     this.outer2 = ()=> {
//       console.log(this)
//       var inner2 = ()=> {
//         console.log(this)
//       }
//       inner2()
//     }
//    }
// }

// var person = new Test()

// person.outer1()
// person.outer2()

