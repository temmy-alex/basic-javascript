// Promise
let promise = new Promise((resolve, reject) => {
    let process = true
    if (!process) resolve('Success')
    else reject('Gagal')
})

promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

