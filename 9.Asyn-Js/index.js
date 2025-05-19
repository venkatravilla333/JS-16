
console.log('Hi')

console.log('hello')

setTimeout(() => {
  console.log('Timer-1')
}, 4000)

setTimeout(() => {
  console.log('Timer-2')
}, 0)

Promise.resolve().then(() => console.log('PR-1')).then(() => console.log('PR-2'))

console.log('Bye')

setTimeout(() => {
  console.log('Timer-3')
}, 1000)

console.log('good bye')






