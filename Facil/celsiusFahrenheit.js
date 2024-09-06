// function conversor(celcius, fahrenheit) {
//     if (celcius.includes("°C")) {
//         c = celcius.replace("°C", "")
//         f = (Number(c) * 9/5) + 32
//         return `La conversión de celcius a fahrenheit es: ${f}`
//     } else if (fahrenheit.includes("°F")) {
//         f = fahrenheit.replace("°F", "")
//         c = (Number(f) - 32) * 5/9
//         return `La conversión de fahrenheit a celcius es: ${c}`
//     } else {
//         return "Error al ingresar las unidades"
//     }
// }
// const celcius = "12"
// const fahrenheit = "12°F"
// conversor(celcius, fahrenheit)

// function celciusToFahrenheit(celcius) {
//     const celciusValue = parseFloat(celcius)
//     if ((isNaN(celciusValue))) {
//         return "Error: Celcius Values is not a valid number"
//     }
//     return (celciusValue * 9 / 5) +32
// }
// function fahrenheitToCelcius(fahrenheit) {
//     const fahrenheitValue = parseFloat(fahrenheit)
//     if (isNaN(fahrenheitValue)) {
//         return "Error: Fahrenheit Values is not a valid number"
//     }
//     return (fahrenheitValue - 32) * 5 / 9
// }
// function conversor(celcius, fahrenheit) {
//     if (celcius.includes("°C")) {
//         return celciusToFahrenheit(celcius.replace("°C", ""))
//     } else if (fahrenheit.includes("°F")) {
//         return fahrenheitToCelcius(fahrenheit.replace("°F", ""))
//     } else {
//         return "Error: Invalid input format"
//     }
// }

// const celcius = "12"
// const fahrenheit = "12°F"
// console.log(conversor(celcius, fahrenheit))

function convertirTemperatura(temp) {
    if (typeof temp !== 'string' || !temp.includes('°')) {
        return "Error: Formato incorrecto. Asegúrese de incluir el símbolo '°' y la unidad ('C' o 'F')";
    }
    const valor = parseFloat(temp);
    const unidad = temp.slice(-1).toLocaleUpperCase();

    if (isNaN(valor)) {
        return "Error: No se ha proporcionado un valor numérico válido";
    }
    if (unidad === 'C') {
        const fahrenheit = (valor * 9/5) + 32;
        return `${fahrenheit.toFixed(2)}°F`;
    } else if (unidad === 'F') {
        const celsius = (valor - 32) * 5/9;
        return `${celsius.toFixed(2)}°C`;
    } else {
        return "Error: Unidad no reconocida. Usa 'C' para Celsius o 'F' para Fahrenheit"; 
    }
}

console.log(convertirTemperatura("25°C"));  // 77.00°F
console.log(convertirTemperatura("77°F"));  // 25.00°C
console.log(convertirTemperatura("100k"));  // Error: Unidad no reconocida
console.log(convertirTemperatura("25C"));   // Error: Formato incorrecto
console.log(convertirTemperatura("25°"));   // Error: Unidad no reconocida