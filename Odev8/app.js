"use strict";

const url = "https://www.wissenakademie.com&quot";
const dersAdi = "Fullstack Web Developer Eğitimi";

console.log(`Girilen Url ${url.trim().length} karakterden oluşmaktadır.`);
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
    (url.replace("quot", "").replace("&", "/")) + (dersAdi.replace("Developer", "Geliştirme").toLocaleLowerCase().replace("ğ", "g").replace("ş", "s").replaceAll(" ", "-"))
)
