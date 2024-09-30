function rgbToHexadecimal(r,g,b) {
    function decimalToHex(decimal) {
        const hex = decimal.toString(16).toUpperCase();
        return hex.length === 1 ? '0' + hex : hex; // Asegura que siempre tenga 2 dígitos
    }
    const hexR = decimalToHex(r);
    const hexg = decimalToHex(g);
    const hexb = decimalToHex(b);
    return `${hexR}${hexg}${hexb}`;
}

const numRGB = {r: 66, g: 135, b: 245};
const numHex = rgbToHexadecimal(numRGB.r, numRGB.g, numRGB.b);
console.log(`rgb(${numRGB.r}, ${numRGB.g}, ${numRGB.b}) en Hex es: ${numHex}`)

function hexToRgb(hex) {
    // Elimina el carácter '#' si está presente
    hex = hex.replace(/^#/, '');
    // Verifica si el formato es de 3 caracteres (#RGB) o 6 caracteres (#RRGGBB)
    if (hex.length === 3) {
        // Expande el formato corto (#RGB a #RRGGBB)
        hex = hex.split('').map(char => char + char).join('');
    }
    // Extrae los componentes de color
    const r = parseInt(hex.slice(0, 2), 16); // Componente rojo
    const g = parseInt(hex.slice(2, 4), 16); // Componente verde
    const b = parseInt(hex.slice(4, 6), 16); // Componente azul
    // Devuelve el valor RGB como un objeto o cadena, según prefieras
    return { r, g, b };
}
// Ejemplo de uso
const hexColor = '#4287F5';  // Ejemplo de color en hexadecimal
const rgbColor = hexToRgb(hexColor);
console.log(`${hexColor} en RGB es: (${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`);