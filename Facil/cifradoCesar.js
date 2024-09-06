function cifradoCesar(texto, desplazamiento) {
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i].toUpperCase()
        if (alfabeto.includes(letra)) {
            let indice = alfabeto.indexOf(letra)
            let nuevoIndice = (indice + desplazamiento) % 26
            // Para manejar indices negativos
            if (nuevoIndice < 0) {
                nuevoIndice += 26
            }
            result += alfabeto[nuevoIndice]
        } else {
            // Mantener caracteres no alfabéticos (Como espacios o signos de puntuación)
            result += letra
        }
    }
    return result
}
// Ejemplo de cifrado y descifrado
const  textoPlano = "Hola Mundo"
const desplazamiento = 3 // Cifrado hacia adelante

const textoCifrado = cifradoCesar(textoPlano, desplazamiento)
console.log(`Texto Cifrado: ${textoCifrado}`)

const textoDesifrado = cifradoCesar(textoCifrado, -desplazamiento)
console.log(`Texto Descifrado: ${textoDesifrado}`)