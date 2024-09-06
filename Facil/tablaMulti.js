function tabladeMulti(numero) {
    console.log(`Tabla de Multiplicar de ${numero}`)
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
}
const numero = parseInt(prompt("Introduce un numero para ver su tabla de multiplicar"))
if (!isNaN(numero)) {
    tabladeMulti(numero)
} else {
    console.log("Por favor, introduce un numero valido.")
}