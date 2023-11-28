let n = prompt("Lütfen 1'den büyük bir sayı giriniz:");
let primeNumbers = [];

if (n > 1) {
  for (let i = 2; i <= n; i++) {
    let count = [];
    for (let y = 2; y <= i - 1; y++) {
      if (i % y == 0) {
        count.push(true);
      } else {
        count.push(false);
      }
    }
    if (!count.includes(true)) {
      primeNumbers.push(i);
    }
  }
}

alert(`0'dan ${n} sayısına kadar toplam ${
  primeNumbers.length
} adet asal sayı  vardır. 
Bu asal sayılar şu şekildedir: ${primeNumbers.join(",")} `);
