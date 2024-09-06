function ordenLista(numbers, tipo) {
    if (tipo === "Asc") {
        return numbers.slice().sort((a,b) => a - b)
    } else {
        return numbers.slice().sort((a,b) => b - a)
    }
}
const number = [4,2,5,1,3]
console.log(`El orden es: ${ordenLista(number, "Asc")}`)
console.log(`El orden es: ${ordenLista(number, "Desc")}`)