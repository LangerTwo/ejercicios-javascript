function calcularAguaAtrapada(bloques) {
    let n = bloques.length;
    if (n === 0) return 0;

    // Arrays para almacenar el máximo a la izquierda y derecha
    let maxIzquierda = new Array(n).fill(0);
    let maxDerecha = new Array(n).fill(0);

    // Llenar el array de máximos a la izquierda
    maxIzquierda[0] = bloques[0];
    for (let i = 1; i < n; i++) {
        maxIzquierda[i] = Math.max(maxIzquierda[i - 1], bloques[i]);
    }
    // Llenar el array de máximos a la derecha
    maxDerecha[n - 1] = bloques[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        maxDerecha[i] = Math.max(maxDerecha[i + 1], bloques[i]);
    }

    // Calcular el agua atrapada
    let aguaAtrapada = 0;
    for (let i = 0; i < n; i++) {
        let alturaAgua = Math.min(maxIzquierda[i], maxDerecha[i])
        if (alturaAgua > bloques[i]) {
            aguaAtrapada += alturaAgua - bloques[i]
        }
    }
    return aguaAtrapada;
}

let bloques = [4, 0, 3, 6, 1, 3]
let agua = calcularAguaAtrapada(bloques)
console.log(`Unidades de agua atrapadas: ${agua}`)