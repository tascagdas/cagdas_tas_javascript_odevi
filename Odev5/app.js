"use strict";
let gameContinues = true
while (gameContinues) {
    let number = (Math.floor(Math.random() * 10)) + 1
    let attemp = 3
    let point;
    console.log(`Hile: ${number}`)
    let firstInput = prompt("Lütfen tutulan sayıyı bilebilmek için 1 ile 10 arasında bir sayı giriniz.")
    if (firstInput == "" && input == "") {
        break
    }
    if (firstInput == number) {
        point++
        alert("Tebrikler sayıyı bildiniz.")
    } else {
        while (gameContinues == true) {
            attemp--;
            if (attemp == 0) {
                gameContinues = false
                break
            } else {
                let input = prompt(`Yanlis cevap girdiniz lutfen tekrar deneyiniz (kalan hakkiniz: ${attemp})`)
                if (input == number) {
                    alert("Tebrikler Bildiniz.")
                    point++
                    gameContinues = false
                    break
                }
            }
        }
    }
    console.log(`Puaniniz ${point}`)
}