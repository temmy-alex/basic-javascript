// Untuk membuat konstanta yang dianjurkan menggunakan huruf besar (kapital)
// Global Scope dapat digunakan dimanapun
const PI = 3.14
// Tidak dapat melakukan re-assign nilai ke dalam konstanta 
// PI = 10

function luasLingkaran(r) {
    // Local Scope konstanta yang berada didalam block function
    const PI = 10;
    console.log('Luas = ' + PI * r * r)
}
console.log(PI)
luasLingkaran(5);