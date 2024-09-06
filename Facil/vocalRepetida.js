function vocalRepetida(cadena) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let contadorVocales = {a: 0, e: 0, i: 0, o: 0, u: 0};
    for (const char of cadena.toLowerCase()) {
        if (vocales.includes(char)) {
            contadorVocales[char]++;
        }
    }
    let vocalMaxima = '';
    let maxOcurrencia = 0;
    for (const vocal in contadorVocales) {
        if (contadorVocales[vocal] > maxOcurrencia) {
            maxOcurrencia = contadorVocales[vocal];
            vocalMaxima = vocal;
        }
    }
    const vocalesMaxima = Object.keys(contadorVocales).filter(vocal => contadorVocales[vocal] === maxOcurrencia);
    if (vocalesMaxima.length > 1) {
        return {vocal: 'Hay vocales repetidas', cantidad: maxOcurrencia};
    }
    return maxOcurrencia > 0 ? {vocal: vocalMaxima, cantidad: maxOcurrencia} : null;
}
console.log(vocalRepetida("Hello world"));