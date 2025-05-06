

//how to create object

let person1 = {
  name: 'sachin',
  age: 40,
  address: { city: 'mumbai', road: 101 },
  play: function () {
    console.log('play')
  }
}

console.log(person1)
console.log(person1.name)
console.log(person1.age)
console.log(person1.address.city)
console.log(person1.address.road)
person1.play()

let person2 = {
  name: 'kohli',
  age: 32,
  address: { city: 'delhi', road: 102 },
  play: function () {
    console.log('play')
  }
}

console.log(person2)
console.log(person2.name)
console.log(person2.age)
console.log(person2.address.city)
console.log(person2.address.road)
person2.play()