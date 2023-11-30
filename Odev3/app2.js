let n = prompt("Lütfen 1'den büyük bir sayı giriniz:");
let primeNumbers = [];

if (n > 2) {
    let oddNumbers = [];
    for (let i = n; i >= 2; i--) {

        if (i % 2 != 0) {
            oddNumbers.push(i);
        }
    }
    oddNumbers.forEach(oddNumber => {
        let isPrimeNumber = true;
        for (let i = 2; i < oddNumber; i++) {
            if (oddNumber % i == 0) {
                isPrimeNumber = false;
                console.log(isPrimeNumber)
                break
            }
        }
        if (isPrimeNumber) {
            primeNumbers.push(oddNumber);
        }
    });
    alert(`0'dan ${n} sayısına kadar toplam ${primeNumbers.length + 1
        } adet asal sayı  vardır. 
        Bu asal sayılar şu şekildedir: 2, ${primeNumbers.reverse().join(", ")} `);
} else {
    alert(`Girilen sayi 1'den buyuk degildir.`)
}