function simularClima(dias, tempInicial, probaLluviaIni) {
    let temperatura = tempInicial;
    let tempMaxima = tempInicial;
    let tempMinima = tempInicial;
    let diasLluvia = 0;

    for (let i = 1; i <= dias; i++) {
        console.log(`Días ${i}`)
        // Aumento y disminución aleatoria de la temperatura
        if (Math.random() < 0.1) {
            let cambio = Math.random() < 0.5 ? -2 : 2;
            temperatura += cambio;
            console.log(`Cambio de Temperatura: ${cambio} grados`);
        }
        // Ajuste de la probabilidad de segun la temperatura
        if (temperatura > 25) {
            probaLluviaIni = Math.min(100, probaLluviaIni + 20);
            console.log("La temperatura es menor a 25 grados, aumenta la probabilidad de lluvia");
        } else if (temperatura < 5) {
            probaLluviaIni = Math.max(0, probaLluviaIni - 20);
            console.log("La temperatura es menor a 5 grados, disminuye la probabilidad de lluvia")
        }
        // Determinar si Llueve
        let llueve = Math.random() * 100 < probaLluviaIni;
        if (llueve) {
            diasLluvia++;
            console.log("¡Esta lloviendo!");
            temperatura -=1;
        } else {
            console.log("No llueve");
        }
        // Actualizar temperatura maxima y minima
        tempMaxima = Math.max(tempMaxima, temperatura);
        tempMinima = Math.min(tempMinima, temperatura);
        // Mostrar el estado del dia
        console.log(`Temperatura: ${temperatura}°C Probabilidad de lluvia ${probaLluviaIni}%\n`);
    }
    // Resultados finales
    console.log(`En los ultimos ${dias} dias`);
    console.log(`Temeratura maxima: ${tempMaxima}`);
    console.log(`Temperatura minima ${tempMinima}`);
    console.log(`Dias de lluvia: ${diasLluvia}`);
}
const dias = 7;
const tempInicial = 20;
const probaLluviaIni = 30;
simularClima(dias, tempInicial, probaLluviaIni)