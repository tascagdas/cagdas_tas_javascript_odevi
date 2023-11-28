"use strict";

let inputSecond = prompt("Hesaplanıcak sayıyı giriniz:");
let message;
if (inputSecond >= 3600) {
  let hour = Math.floor(inputSecond / 3600);
  let minute = Math.floor((inputSecond - hour * 3600) / 60);
  let second = (inputSecond - hour * 3600 - minute * 60) % 60;
  message = `Girilen süre: ${hour} Saat, ${minute} Dakika, ${second} Saniyeye eşittir.`;
} else {
  let minute = Math.floor(inputSecond / 60);
  let second = (inputSecond - minute * 60) % 60;
  message = `Girilen süre: ${minute} Dakika, ${second} Saniyedir.`;
}

console.log(message);
alert(message);
