function esPalindromo(texto) {
    // Eliminar espacios, tildes, signos de puntuación y convertir a minúsculas
    let textoLimpio = texto
        .toLowerCase()
        .normalize('NFD') // Para eliminar las tildes
        .replace(/[\u0300-\u036f]/g, '') // Elimina las marcas diacríticas
        .replace(/[^a-z0-9]/g, ''); // Elimina todo excepto letras y números

    // Invertir el texto limpio
    let textoInvertido = textoLimpio.split('').reverse().join('');

    // Comparar si el texto original limpio es igual al texto invertido
    return textoLimpio === textoInvertido;
}

// Ejemplos de uso
console.log(esPalindromo("Ana lleva al oso la avellana")); // true
console.log(esPalindromo("A man, a plan, a canal: Panama")); // true
console.log(esPalindromo("No es un palíndromo"));