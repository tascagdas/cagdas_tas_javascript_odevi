"use strict";

const url = "https://www.wissenakademie.com&quot";
const dersAdi = "Fullstack Web Developer Eğitimi";

console.log(`Girilen Url ${url.replace(" ", "").length} karakterden oluşmaktadır.`);
console.log(`Ders adı ${dersAdi.split(" ").length} kelimeden oluşmaktadır.`)
if (url.startsWith("https:")) {
    console.log(`Girilen Url güvenli protokole sahip. [https (Hypertext transfer protocol secure)]`)
} else if (url.startsWith("http:")) {
    console.log(`Girilen Url güvenli değil. [http (Hypertext transfer protocol)]`)
}
if (dersAdi.includes("Eğitim")) {
    console.log(`Ders adı "Eğitim" kelimesi içermektedir.`)
} else {
    console.log(`Ders adı "Eğitim" kelimesi içermemektedir.`)
}
console.log(
    dersAdi.replace("Developer", "Geliştirme").toUpperCase().toLocaleLowerCase()
)