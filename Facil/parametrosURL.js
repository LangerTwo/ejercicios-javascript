function obtenerValoresParametros(url) {
    let valores = []
    let indiceInterrogacion = url.indexOf('?')
    if (indiceInterrogacion === -1) {
        return valores
    }
    let parametros = url.slice(indiceInterrogacion + 1)
    let pares = parametros.split('&')
    for (const par of pares) {
        let[clave, valor] = par.split('=')
        valores.push(valor) // valores.push(valor ? decodeURIComponent(valor) : null);  // Si valor es undefined, agregar null
    }
    return valores
}
const url = "http://retosdeprogramacion.com?year=2023&challenge=O"
console.log(obtenerValoresParametros(url)) // ['2023', 'O']