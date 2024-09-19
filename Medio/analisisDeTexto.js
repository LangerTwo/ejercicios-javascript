function analizarTexto(texto) {
    const palabras = texto.match(/\b\w+\b/g); // Encuentra todas las palabras
    const oraciones = texto.split(/[.?!]+/).filter(oracion => oracion.trim().length > 0); // Encuentra todas las oraciones
    
    if (!palabras) {
      return { numPalabras: 0, longitudPromedio: 0, numOraciones: 0 };
    }
    
    const numPalabras = palabras.length;
    const longitudTotal = palabras.reduce((total, palabra) => total + palabra.length, 0);
    const longitudPromedio = longitudTotal / numPalabras;
    
    return {
        numPalabras,
        longitudPromedio,
        numOraciones: oraciones.length
    };
}

const texto = "Hola, mundo. Esto es un ejemplo.";
const { numPalabras, longitudPromedio, numOraciones } = analizarTexto(texto);
console.log(`Número de palabras: ${numPalabras}, Longitud promedio de palabras: ${longitudPromedio.toFixed(2)}, Cantidad de oraciones: ${numOraciones}`);