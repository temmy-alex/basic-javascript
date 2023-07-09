const user = {
    fullname: 'User',
    address: 'Street',
    email: 'user@mail.com'
}

const users = [
    {id: 1, fullname: 'User 1', address: 'Street 1'},
    {id: 2, fullname: 'User 2', address: 'Street 2'},
    {id: 3, fullname: 'User 3', address: 'Street 3'}
]

const print = (props) => {
    console.log(props.fullname + ' address ' + props.address + ' email ' + props.email)
}

print(user)

const person = {username: 'user 13', email: 'user13@mail.com'}
const profile = {name: 'User 13', city: 'Jakarta'}
const personProfile = Object.assign(person, profile)
console.log(personProfile)

// Array Destructuring
const colors = ['red', 'yellow', 'green']

let [red, yellow, green] = colors

// Object Destructuring
// let [,, {fullname, address}] = users
// let {fullname, address, email} = user
let {fullname, ...lainnya} = user
// console.log(address)
console.log(lainnya)
console.log(red)