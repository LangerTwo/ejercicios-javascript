let leet = {"A":"4", "B":"I3", "C":"[", "D":")", "E":"3", "F":"|=", "H":"#", "I":"1", "J":",_|", "K":">|", "L":"1", "M":"/\/\\", "N":"^/", "O":"0", "P":"|*", "Q":"(_,)", "R":"I2", "S":"5", "T":"7", "U":"(_)", "V":"\/", "W":"vv", "X":"><", "Y":"j", "Z":"2"}
function lenguajeHacker(texto) {
    let textoLeet = ""
    for (let i = 0; i < texto.length; i++) {
        let word = texto[i].toUpperCase()
        textoLeet += leet[word] ? leet[word] : texto[i]
    }
    return textoLeet
}
const texto = "Hello word mas texto prueba"
console.log(lenguajeHacker(texto))