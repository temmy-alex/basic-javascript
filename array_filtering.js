var arr1 = [0,1,2,3,4,5]
// Filter nilai yang tidak terdapat nilai 2
var var1 = arr1.filter((val) => val !== 2);
var genap = arr1.filter((val) => val % 2 == 0);
var ganjil = arr1.filter((val) => val % 2 != 0);

console.log(var1)
console.log(genap)
console.log(ganjil)