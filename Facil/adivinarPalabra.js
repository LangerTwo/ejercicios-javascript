function seleccionarYReemplazarLetras() {
    const palabras = ['manzana', 'banana', 'pera', 'uva'];
    const indiceAleatorio = Math.floor(Math.random() * palabras.length);
    const palabra = palabras[indiceAleatorio];
    const longitudPalabra = palabra.length;
    const numLetrasAReemplazar = Math.ceil(longitudPalabra * 0.4);
    let palabraArray = palabra.split('');
    const indiceReemplazados = new Set();    
    while (indiceReemplazados.size < numLetrasAReemplazar) {
        const indiceAleatorio = Math.floor(Math.random() * palabraArray.length);
        if (!indiceReemplazados.has(indiceAleatorio)) {
            palabraArray[indiceAleatorio] = '_';
            indiceReemplazados.add(indiceAleatorio);
        }
    }    
    return { palabraOriginal: palabra, palabraModificada: palabraArray };
}
function mostrarPalabraActualizada(palabraModificada) {
    return palabraModificada.join('');
}
function jugarAhorcado() {
    let { palabraOriginal, palabraModificada } = seleccionarYReemplazarLetras();
    let contador = 3;
    let letrasAdivinadas = new Set();    
    console.log(`Palabra a adivinar: ${mostrarPalabraActualizada(palabraModificada)}`);    
    while (contador > 0 && palabraModificada.includes('_')) {
        const letra = prompt("Ingresa una letra:");
        if (letra === null || letra.length !== 1) {
            console.log("Entrada inválida. Intenta nuevamente.");
            continue;
        }        
        if (letrasAdivinadas.has(letra)) {
            console.log("Ya ingresaste esa letra. Intenta con otra.");
            continue;
        }        
        letrasAdivinadas.add(letra);        
        if (palabraOriginal.includes(letra)) {
            console.log("Letra correcta.");
            for (let i = 0; i < palabraOriginal.length; i++) {
                if (palabraOriginal[i] === letra) {
                    palabraModificada[i] = letra;
                }
            }
        } else {
            contador--;
            console.log(`Letra incorrecta. Vidas restantes: ${contador}`);
        }
        console.log(`Palabra actualizada: ${mostrarPalabraActualizada(palabraModificada)}`);        
        if (!palabraModificada.includes('_')) {
            console.log("¡Felicidades! Has adivinado la palabra.");
            break;
        }        
        if (contador === 0) {
            console.log("¡Has perdido!");
            console.log(`La palabra era: ${palabraOriginal}`);
        }
    }
}
jugarAhorcado();