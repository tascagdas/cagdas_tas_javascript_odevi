"use strict";
let numbers = [1, 5, 7, 15, 3, 25, 12, 24];
let newNumbers = []
for (let index = 0; index < numbers.length; index++) {
    let calculated = numbers[index] * numbers[index]
    newNumbers.push(calculated)
}
console.log(numbers + " Sayılarının kuvvetleri: " + newNumbers)

let multipleFive = []
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 5 == 0) {
        multipleFive.push(numbers[index])
    }
}
console.log(multipleFive + " Sayıları 5'in katıdır.")


let evenNumbers = []
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 == 0) {
        evenNumbers.push(numbers[index])
    }
}
let sum = 0
for (let i = 0; i < evenNumbers.length; i++) {
    sum += evenNumbers[i];
}
console.log(`çift sayıların toplamı ${sum}`)






let products = ["iphone 12", "samsung s22", "iphone 13", "samsung s23", "samsung s20"];
let newProducts = []
for (let index = 0; index < products.length; index++) {
    newProducts.push(products[index].toLocaleUpperCase())
}
console.log(newProducts)


function filterItems(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}
console.log(`Beriltilen ürünler dizisinde içerisinde "samsung" kelimesi geçen ${filterItems(products, "samsung").length} ürün vardır.`)



let students = [
    { "ad": "yiğit", "soyad": "bilgi", "notlar": [60, 70, 60] },
    { "ad": "ada", "soyad": "bilgi", "notlar": [80, 70, 80] },
    { "ad": "çınar", "soyad": "turan", "notlar": [10, 20, 60] }
];