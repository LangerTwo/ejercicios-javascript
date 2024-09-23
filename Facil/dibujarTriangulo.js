function dibujarTriangulo(lados) {
    let result = ''
    // Iterar sobre cada fila del triangulo
    for (let i = 1; i <= lados ; i++) {
        // Calcular los espacio en blanco
        let espacios = ' '.repeat(lados - i)
        // Agregamos los asteriscos para cada fila
        let asteriscos = '*'.repeat(2 * i - 1)
        // Concatenamos los espacios y asteriscos y un '\n'
        result += espacios + asteriscos + '\n'
    }
    return result
}
console.log(dibujarTriangulo(3))