function marcoDeTexto(texto) {
    const palabras = texto.split('')
    const tamTexto = palabras.reduce((max,palabra) => Math.max(max,palabra.length), 0)
    const lineaAsterisco = '*'.repeat(tamTexto + 4)
    let result = lineaAsterisco + '\n'
    palabras.forEach(palabra => {
        result += `* ${palabra.padEnd(tamTexto)} *\n`
    });
    result += lineaAsterisco
    console.log(result)
}
marcoDeTexto("esto es un texto de prueba")