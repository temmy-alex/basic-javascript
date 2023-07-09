let fruits = ['apel', 'mangga', 'pir'];
let num1 = [1,2,3,4,5,6]
let num2 = [num1, 4,5,6]
let num3 = [...num1, 7,8,9]
let angka = [1,2,3]
function sum(x,y,z) {
    console.log(x+y+z)
}

// console.log(fruits)
// console.log(...fruits)
// console.log(num2)
// console.log(num3)
sum(...angka)