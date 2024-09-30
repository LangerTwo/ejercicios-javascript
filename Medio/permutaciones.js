function permutaciones(palabra) {
    if (palabra.length <= 1) {
        return [palabra];
    }
    let resultado = [];
    for (let i = 0; i < palabra.length; i++) {
        const letraActual = palabra[i];
        const letraRestantes = palabra.slice(0, i) + palabra.slice(i + 1);
        const permutacionesRestantes = permutaciones(letraRestantes);
        for (let permutacion of permutacionesRestantes) {
            resultado.push(letraActual + permutacion);
        }
    }
    return resultado;
}
const palabra = "alan";
const resultado = permutaciones(palabra)
console.log(resultado)