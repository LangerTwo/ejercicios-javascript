function pseudoRandom(seed) {
    // Constantes del Generador Lineal Congruencial
    const a = 1664525;
    const c = 1013904223;
    const m = Math.pow(2, 32); // 2^32

    // Generar el siguiente números pseudoaleatorio
    seed = (a * seed + c) % m;

    // Escalar el valor a un rango de 0 a 100
    return seed % 101; // % 101 para que esté en el rango 0 a 100
}

// Inicializa con una semilla
let seed = Date.now(); // Usamos la fecha actual como semilla

// Generar un número pseudoaleatorio
let randomNumber = pseudoRandom(seed);
console.log(randomNumber);