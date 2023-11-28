const primeNumbers = []

function checkPrime(number) {
    // program to check if a number is prime or not
    let isPrime = true;

    // check if number is equal to 1
    if (number === 1) {
        break;
    }

    // check if number is greater than 1
    else if (number > 1) {
        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            return true;
        } else {
            return false;
        }
    }
    // check if number is less than 1
    else {
        return false;
    }
}

function scanThrough(n) {
    for (let i = 2; i < n; i++) {
        if checkPrime(i){
            primeNumbers.push(i)
        }
    }
}