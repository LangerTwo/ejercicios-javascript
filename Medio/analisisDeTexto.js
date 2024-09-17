function contarPalabras(texto) {
    const palabras = texto.split(' ');
    return palabras.length;
}
const texto = "Hola, mundo. Esto es un ejemplo.";
const numPalabras = contarPalabras(texto);
console.log(`Numeros de palabras: ${numPalabras}`)

function longitudMediaPalabras(texto) {
    // Dividir el texto en palabras (considerando puntuación y múltiples espacios)
    const palabras = texto.match(/\b\w+\b/g);
    // Verificar si hay palabras
    if (!palabras) {
      return 0; // No hay palabras
    }
    // Calcular la longitud total de todas las palabras
    const longitudTotal = palabras.reduce((total, palabra) => total + palabra.length, 0);
    // Calcular la longitud promedio
    const longitudPromedio = longitudTotal / palabras.length;
    return longitudPromedio;
}
const texto2 = "Hola, mundo. Esto es un ejemplo de texto. para calcular la longitud media de las palabras.";
const promedio = longitudMediaPalabras(texto);
console.log("La longitud media de las palabras es:", promedio);

// Revisar este parte antes de unir las funciones
function contarOracionesSimple(texto) {
    const oraciones = texto.split(/[.?!]/);
    return oraciones.length;
}
const texto3 = "Hola, mundo. Esto es un ejemplo de texto para calcular la longitud media de las palabras.";
const cantidad = contarOracionesSimple(texto);
console.log(cantidad);