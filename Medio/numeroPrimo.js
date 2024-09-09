function esPrimo(num) {
    if(num <= 1) return false;
    if(num <= 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false
        i += 6
    }
    return true
}

let num = parseInt(prompt("Ingresar un numero"))
if (esPrimo(num)) {
    console.log(`${num} es un numero primo`)
} else {
    console.log(`${i} no es un numero primo`)
}

for (let i = 1; i <= 100; i++) {
    if (esPrimo(i)) {
        console.log(`${num} es un numero primo`)
    } else {
        console.log(`${i} no es primo`)
    }
}