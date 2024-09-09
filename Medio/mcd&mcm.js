function calcularMCD(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function calcularMCM(a, b) {
    return (a * b) / calcularMCD(a, b);
}

const num1 = 12;
const num2 = 18;

const mcd = calcularMCD(num1, num2);
const mcm = calcularMCM(num1, num2);

console.log(`El MCD de ${num1} y ${num2} es: ${mcd}`);
console.log(`El MCM de ${num1} y ${num2} es: ${mcm}`);