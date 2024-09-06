// Decimal a Octal
function decimalToOctal(decimal) {
    let octal = ''
    while (decimal > 0) {
        let resto = decimal % 8
        octal = resto + octal
        decimal = Math.floor(decimal/8)
    }
    return octal
}
const numDecimal = 157
const numOctal = decimalToOctal(numDecimal)
console.log(`${numDecimal} en Octal es: ${numOctal}`)

// Decimal a Hexadecimal
function decimalToHexadecimal(decimal) {
    let hexadecimal = ''
    const hexaTxt = {"10":"A", "11":"B", "12":"C", "13":"D", "14":"E", "15":"F"}
    while (decimal > 0) {
        let resto = Math.floor(decimal % 16)
        if (resto >= 10) {
            hexadecimal = hexaTxt[resto] + hexadecimal
        } else {
            hexadecimal = resto + hexadecimal
        }
        decimal = Math.floor(decimal / 16)
    }
    return hexadecimal
}
const numDecimal2 = 1234
const numHexadecimal= decimalToHexadecimal(numDecimal2)
console.log(`${numDecimal2} en Hexadecimal es: ${numHexadecimal}`)