

// var person = {
//   name: 'sachin',
//   age: 40,
//   address: { city: 'Mumbai', road: 101 },
//   play: function () {
//     console.log('Play')
//   }
// }

//Without destruturing

// console.log(person)
// console.log(person.name)
// console.log(person.age)
// console.log(person.address.city)
// console.log(person.address.road)
// person.play()

// With destruturing

// var { name, age, address: { city, road }, play } = person

// console.log(name)
// console.log(age)
// console.log(city)
// console.log(road)
// play()


var arr = ['sachin', [1, 2, 3], function play(){console.log('play')}]

//without

// console.log(arr)
// console.log(arr[0])
// console.log(arr[1][0])
// console.log(arr[1][1])
// console.log(arr[1][2])
// arr[2]()

//with

// var [name, [one, two, three], fun] = arr

// console.log(name)
// console.log(one)
// console.log(two)
// console.log(three)
// fun()


//without
// console.log(person.name)
// console.log(person.age)
// console.log(person.properties[0].bats)
// console.log(person.properties[0].cash)
// console.log(person.properties[1].child1.name)

//with

// var person = {
//   pname: 'sachin',
//   age: 40,
//   properties : [{bats: 20, cash: '1cr'}, {child1: {name: 'arjun'}}]
// }
// var { pname, age, properties: [{bats, cash}, {child1: {name}}] } = person

// console.log(pname)
// console.log(age)
// console.log(bats)
// console.log(cash)
// console.log(name)

var arr = ['sachin', { city: 'mumbai', childs: ['arjun', 'sara'] }]


//without
// console.log(arr)
// console.log(arr[0])
// console.log(arr[1].city)
// console.log(arr[1].childs[0])
// console.log(arr[1].childs[1])

//with

// var [name, {city, childs: [ch1, ch2]}] = arr

// console.log(name)
// console.log(city)
// console.log(ch1)
// console.log(ch2)