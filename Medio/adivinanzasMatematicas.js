function operadorAleatorio() {
    const operadores = ["+", "-", "*", "/"];
    const indiceAleatorio = Math.floor(Math.random() * operadores.length);
    return operadores[indiceAleatorio];
}
let result;
let count = 0;
let n = 0;
let maxNum = 9; // Rango inicial de los números aleatorios
let mensajeMostrado = false; // Bandera para controlar el mensaje
while (n < 10) {
    const operador = operadorAleatorio();
    const num1 = Math.floor(Math.random() * maxNum) + 1;
    let num2 = Math.floor(Math.random() * maxNum) + 1;
    // Evitar división por cero
    if (operador === "/" && num2 === 0) {
        num2 = 1; // Cambiamos num2 a 1 si es división por 0
    }
    let resp = parseFloat(prompt(`¿Cuánto es: ${num1} ${operador} ${num2}?`));
    switch (operador) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            console.log("Operador no válido");
    }
    if (result === resp) {
        count++;
    console.log("¡Respuesta correcta!");
    } else {
        console.log("Respuesta incorrecta");
    }
    console.log(`El resultado de ${num1} ${operador} ${num2} = ${result}`);
    n++;
    // Si llega a 5 aciertos, aumenta el rango de los números aleatorios
    if (count >= 5 && !mensajeMostrado) {
        maxNum = 99; // Aumenta el rango para generar números de dos cifras
        console.log("¡Has alcanzado 5 aciertos! Ahora los números serán más grandes.");
        mensajeMostrado = true; // Marcamos el mensaje como mostrado
    }
}
console.log(`Aciertos: ${count}`);