function t9ToText(pulsaciones) {
    const t9Map = {
        2: ['A', 'B', 'C'],
        3: ['D', 'E', 'F'],
        4: ['G', 'H', 'I'],
        5: ['J', 'K', 'L'],
        6: ['M', 'N', 'O'],
        7: ['P', 'Q', 'R', 'S'],
        8: ['T', 'U', 'V'],
        9: ['W', 'X', 'Y', 'Z']
    };
    const bloques = pulsaciones.split('-');
    let resultado = '';
    for (let bloque of bloques) {
        const numero = bloque[0];
        const veces = bloque.length;
        if (t9Map[numero]) {
            const letra = t9Map[numero][(veces - 1) % t9Map[numero].length];
            resultado += letra;
        }
    }

    return resultado;
}
const entrada = '2-555-2-66';
const salida = t9ToText(entrada);
console.log(salida);