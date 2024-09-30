function operadorAleatorio() {
    const operadores = ["+", "-", "*", "/"];
    const indiceAleatorio = Math.floor(Math.random() * operadores.length);
    return operadores[indiceAleatorio];
}
let result;
let count = 0;
let n = 0;
while (n < 5) {
    const operador = operadorAleatorio();
    const num1 = Math.floor(Math.random() * 9);
    let num2 = Math.floor(Math.random() * 9);
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
    }
    console.log(`El resultado de ${num1} ${operador} ${num2} = ${result}`);
    n++;
}
console.log(`Aciertos: ${count}`);