function segundoNumero(numeros) {
    let max = numeros[0]
    let secondMax = 0
    if (numeros.length < 2) {
        return "La lista debe tener al menos 2 elementos"
    }
    for (let num of numeros) {
        if (num > max) {
            secondMax = max
            max = num
        } else if (num > secondMax && num < max) {
            secondMax = num
        }
    }
    return secondMax
}
// const numeros = [3]
// segundoNumero(numeros)
const numeros = [3, 8, 1, 10, 7]
segundoNumero(numeros)