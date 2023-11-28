let inputYear = prompt("Artık yıl kontrol etmek için lütfen bir yıl giriniz:");
if (inputYear % 400 == 0 || (inputYear % 4 == 0 && inputYear % 100 != 0)) {
  console.log(`${inputYear} bir artık yıldır.`);
} else {
  console.log(`${inputYear} artık yıl DEĞİLDİR.`);
}
