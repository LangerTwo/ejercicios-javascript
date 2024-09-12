function generarTriangulos(filas) {
    let triangulo = [];
    for (let i = 0; i < filas; i++) {
       triangulo[i] = [];
       triangulo[i][0] = 1; // El primer número en cada fila es 1

       for (let j = 1; j < i; j++) {
            // Cada número es la suma de los 2 de arriba
            triangulo[i][j] = triangulo[i - 1][j - 1] + triangulo[i - 1][j];
       }        
       triangulo[i][i] = 1;
    }
    return triangulo;
}

function mostrarTriangulo(triangulo) {
    const filas = triangulo.length;
    for (let i = 0; i < filas; i++) {
        let espacio = " ".repeat((filas - i) * 2) // Espacio para alinear en piramide
        let fila = triangulo[i].join("   ") // Separar los espacios adicionales 
        console.log(espacio + fila)
    }
}

let filas = 6
let pascal = generarTriangulos(filas)
mostrarTriangulo(pascal)