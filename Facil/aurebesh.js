let aurebesh = {"A":"Aurek", "B":"Besh", "C":"Cresh", "D":"Dorn", "E":"Esk", "F":"Forn", "G":"Grek", "H":"Herf", "I":"Isk", "J":"Jenth", "K":"Krill", "L":"Leth", "M":"Mern", "N":"Nern", "O":"Osk", "P":"Peth", "Q":"Qek", "R":"Resh", "S":"Senth", "T":"Trill", "U":"Usk", "V":"Vev", "W":"Wesk", "X":"Xesh", "Y":"Yirt", "Z":"Zerek"}
const spanishMapping = {}
for (const [key, value] of Object.entries(aurebesh)) {
    spanishMapping[value] = key
}
function spanishToAurebes(texto) {
    let result = ''
    for (const char of texto.toUpperCase()) {
        if (char === ' ') {
            result += ' ';
        } else {
            result += aurebesh[char] ? aurebesh[char] + ' ' : char + '';
        }
    }
    return result.trim()
}
function aurebeshToSpanish(texto) {
    let words = texto.split(' ')
    let result = ''
    for (const word of words) {
        result += spanishMapping[word] ? spanishMapping[word] : word + ' '
    }
    result = result.trim()
    result = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase()
    return result
}
const textoEsp = "Hola Mundo"
const textoAure = spanishToAurebes(textoEsp)
console.log(`Texto traducido a Aurebesh: ${textoAure}`)

const textoTrad = aurebeshToSpanish(textoAure)
console.log(`Texto traducido al español: ${textoTrad}`)