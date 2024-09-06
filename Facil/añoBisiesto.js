function esBisiesto(year) {
    let count = 0
    while (count < 30) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            console.log(`${year} es bisiesto`)
            count++
        }
        year++
    }
}
esBisiesto(2012)