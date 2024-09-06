function caracterInfiltrado(textoUno, textoDos) {
    if (textoUno.length !== textoDos.length) {
        return "No igual"
    }
    let result = []
    textoUno.split('').forEach((char, i) => {
        if (char !== textoDos[i]) {
            result.push(textoDos[i])
        }
    });
    return result
}
const textoUno = "Hola Mundo"
const textoDos = "Holo munde"

const resultado = caracterInfiltrado(textoUno, textoDos)
console.log(resultado)