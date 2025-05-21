//get data
var getBtn = document.getElementById('get')

let getDataFun = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => {
    var data = res.json()
    return data
  }).then((data) => {
     console.log(data)
  }).catch((err) => {
     console.log(err)
})
}

getBtn.addEventListener('click', getDataFun)

//post data

var postBtn = document.getElementById('post')

var myObj = {
  userId: 200,
  title: 'my title',
  body: 'my body'
}

let postDataFun = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(myObj)
  }).then((res) => {
    return res.json()
  }).then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log(err)
  })
}

postBtn.addEventListener('click', postDataFun)

//update data

var updateBtn = document.getElementById('update')

var myObj = {
  userId: 200,
  title: 'my title',
  body: 'my body'
}

let updateDataFun = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/10', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(myObj)
  }).then((res) => {
    console.log(res)
    return res.json()
  }).then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log(err)
  })
}

updateBtn.addEventListener('click', updateDataFun)

//delete data

var deleteBtn = document.getElementById('delete')



let deleteDataFun = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/10', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    
  }).then((res) => {
    console.log(res)
    return res.json()
  }).then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log(err)
  })
}

deleteBtn.addEventListener('click', deleteDataFun)











