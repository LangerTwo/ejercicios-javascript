function convertir(dia, hora, mins, segus) {
    const diaInMilin = 1000 * 60 * 60 * 24
    const horaInMilin = 1000 * 60 * 60
    const minsInMilin = 1000 * 60
    const total = (dia * diaInMilin) + (hora * horaInMilin) + (mins * minsInMilin) + (segus * 1000)
    return total
}
console.log(`El resultado es: ${convertir(1,2,30,15)}`)