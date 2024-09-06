function leerAbaco(abaco) {
    let numero = 0;
    abaco.forEach(function (fila, index) {
        // Contar cuantas cuentas estan a la izquierda del alambre ("---")
        const cuentasIzquierda = fila.split("---")[0].length
        // Calcular el valor de esa fila en función de posicón (millones, miels, etc.)
        numero += cuentasIzquierda * Math.pow(10,abaco.length - index - 1)
    })
    return numero.toLocaleString('es-ES')
}
const abaco = [
    "OO---OOOOOOO", // Millones
    "O---OOOOOO", // Cientos de miles
    "OOO---OOOOO", // Decenas de miles
    "O---OOOO", // Miles
    "OO---OOO", // Centenas
    "OOOOOO---OO", // Decenas
    "OOO---O", // Unidades
]
console.log(leerAbaco(abaco))