

//how to create object

// let person1 = {
//   name: 'sachin',
//   age: 40,
//   address: { city: 'mumbai', road: 101 },
//   play: function () {
//     console.log('play')
//   }
// }

// console.log(person1)
// console.log(person1.name)
// console.log(person1.age)
// console.log(person1.address.city)
// console.log(person1.address.road)
// person1.play()

// let person2 = {
//   name: 'kohli',
//   age: 32,
//   address: { city: 'delhi', road: 102 },
//   play: function () {
//     console.log('play')
//   }
// }

// console.log(person2)
// console.log(person2.name)
// console.log(person2.age)
// console.log(person2.address.city)
// console.log(person2.address.road)
// person2.play()



//Constructor (ES-5)

// function Test(name, age, address) {
//   this.name = name;
//   this.age = age;
//   this.address = address ;
//   this.play = function () {
//     console.log('play')
//   }
    
// }

// let person1 = new test('sachin', 40, { city: 'Mumbai', road: 101 })
// console.log(person1)
// let person2 = new test('kohli', 32, { city: 'Delhi', road: 201 })
// console.log(person2)
// let person3 = new test('dhoni', 38, { city: 'Ranchi', road: 301 })
// console.log(person3)

//Classical way (ES-6)

// class Test {
//   constructor(name, age, address) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.play = function () {
//       console.log('play')
//     }

//   }
// }

// let person1 = new Test('sachin', 40 , { city: 'Mumbai', road: 101 })
// // console.log(typeof Test)
// console.log(person1)
// let person2 = new Test('kohli', 32, { city: 'Delhi', road: 201 })
// console.log(person2)
// let person3 = new Test('dhoni', 38, { city: 'Ranchi', road: 301 })
// console.log(person3)

//Objects are dynamic

let person = {
  name: 'sachin',
  age: 40,
  address: { city: 'mumbai', road: 101 },
  play: function () {
    console.log('play')
  }
}


//How to read object keys

// console.log(person)
// console.log(person['name'])
// console.log(person['age'])
// console.log(person.address.city)
// console.log(person.address.road)
// person.play()

//How to add new properties to existing object

// console.log(person)

// person.color = 'red'
// person.go = function () {
//   console.log('go')
// }

// console.log(person)

//How to update properties of existing object

// person.name = 'Kohli'

// console.log(person)

// How to delete existing object properties

// delete person.name
// delete person.age
// delete person.play

// console.log(person)

//How to loop or iterate object properties

// without using loop

// console.log(person.name)
// console.log(person.age)
// console.log(person.address.city)
// console.log(person.address.road)
// person.play()

//With using loop

// for in loop

// for (var keys in person){
//    console.log(keys, person[keys])
// }

// console.log(person)

// var keys = Object.keys(person)
// console.log(keys)
// var values = Object.values(person)
// console.log(values)
// var entries = Object.entries(person)
// console.log(entries)

//Copy or clone

//primitives

//storage

// var a = 100

// var b = a

// b = 200

// console.log(a)
// console.log(b)









