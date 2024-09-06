function dibujarCuadrado(lados) {
    let result = ''
    // Linea Arriba
    for (let i = 0; i < lados; i++) {
        result += '* '
    }
    result += '\n'
    // Cuerpo
    for (let i = 0; i < lados + lados - 3; i++) {
        result += ' '
    }
    result += '*\n'
    // Linea Abajo
    for (let i = 0; i < lados; i++) {
        result += '* '
    }
    return result
}
dibujarCuadrado(4)