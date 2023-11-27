"use strict"

let input = prompt("Lütfen 100den büyük bir sayı giriniz veya bir boşluk bırakınız.");

if (input > 100 || input == " ") {
    alert("Teşekkürler");
} else {
    input = prompt("Lütfen 100'den büyük bir sayı giriniz veya bir boşluk bırakınız.");
};
