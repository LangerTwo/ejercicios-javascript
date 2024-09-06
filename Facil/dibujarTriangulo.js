function dibujarTriangulo(lados) {
    let result = ''
    // Iterar sobre cada fila del triangulo
    for (let i = 0; i <= lados ; i++) {
        // Calcular los espacio en blanco
        let espacios = ' '.repeat(lados - 1)
        // Agregamos los asteriscos para cada fila
        let asteriscos = '*'.repeat(i * 2 - 1)
        // Concatenamos los espacios y asteriscos y un '\n'
        result += espacios + asteriscos + '\n'
    }
    return result
}
console.log(dibujarTriangulo(3))