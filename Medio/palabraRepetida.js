function encotrarRepetidas(palabras) {
    const contador = {}
    for (const palabra of palabras) {
        contador[palabra] = (contador[palabra] || 0) + 1
    }
    const repetidas = []
    for (const palabra in contador) {
        if (contador[palabra] > 1) {
            repetidas.push(palabra)
        }
    }
    return repetidas
}
const palabras = ["hola", "mundo", "hola", "javascript", "mundo"]
const repetidas = encotrarRepetidas(palabras)
console.log(repetidas)