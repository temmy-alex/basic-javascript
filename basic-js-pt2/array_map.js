var listData = [1,4,9,16,25]

var resultData1 = listData.map(Math.sqrt)
var resultData2 = listData.map((num) => num * 2)
var resultData3 = listData.map((val) => val !== 9)

var peoples = [
    {nama: "User 1", alamat: "Street 1"},
    {nama: "User 2", alamat: "Street 2"},
    {nama: "User 3", alamat: "Street 3"},
]

function fullName(item, index) {
    var fullname = [item.nama, item.alamat].join(" ");
    return fullname;
}

function testMap()
{
    console.log(peoples.map(fullName))
}

// console.log(resultData1)
// console.log(resultData2)
// console.log(resultData3)

testMap()
