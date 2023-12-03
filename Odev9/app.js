"use strict";

// 1 - "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.
// 2 - Dizi kaç elemanlıdır ?
// 3 - Dizinin ilk ve son elemanı nedir ?
// 4 - Elma dizinin bir elemanımıdır ?
// 5 - Kiraz meyvesini listenin sonuna ekleyiniz.
// 6 - Dizinin son 2 elemanını siliniz.
// 7 - Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.

// Öğrenci 1: Kemal Devrimdar 2010 (70,60,80)
// Öğrenci 2: Saliha Temel 2012 (80,80,90)
// Öğrenci 3: Defne Küp 2009 (60,60,70)




let array = ["Elma", "Armut", "Muz", "Çilek"];
console.log(array);
console.log(`Dizi ${array.length} elemanlidir.`);

console.log(`Dizinin ilk elemani ${array[0]}dir. Son elemani ise ${array[array.length - 1]} dir.`);

let x = array.includes("Elma") ? "Elma dizinin bir elemanidir" : "Elme dizinin bir elemanı DEĞİLDİR.";
console.log(x);

array.push("Kiraz")
console.log(array)

array.splice(-2, 2)
console.log(array)

let ogrenciler = [
    { firstName: "Kemal", secondName: "Devrimdar", birthYear: 2010, score: [70, 60, 90] },
    { firstName: "Saliha", secondName: "Temel", birthYear: 2012, score: [80, 80, 90] },
    { firstName: "Defne", secondName: "Küp", birthYear: 2009, score: [60, 60, 70] }
]

const calcAgeAvg = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let ages = []
    for (let index = 0; index < ogrenciler.length; index++) {
        let age = currentYear - (ogrenciler[index].birthYear)
        ages.push(age)
    }
    // Soruyu yanlış anlayıp öğrencilerin yaş ortalamalarınıda hesapladım. ages içinde öğrenci yaşları bulunmakta.
    let sum = 0;
    for (let number of ages) {
        sum += number;
    }
    let ageAvg = sum / ages.length
    console.log("Öğrencilerin yaş ortalaması " + ageAvg.toFixed(1))
    console.log(`${ogrenciler[0].firstName}, ${ages[0]} yaşındadır.
${ogrenciler[1].firstName}, ${ages[1]} yaşındadır.
${ogrenciler[2].firstName}, ${ages[2]} yaşındadır.`)
}
calcAgeAvg()

const calcScore = () => {
    for (let index = 0; index < ogrenciler.length; index++) {
        let sum = 0;
        for (let number of ogrenciler[index].score) {
            sum += number;
        }
        let scoreAvg = sum / ogrenciler[index].score.length
        console.log(ogrenciler[index].firstName + "  (" + scoreAvg.toFixed(2) + ") Not ortalamasına sahiptir.")
    }

}
calcScore()