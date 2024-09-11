function binarioADecimal(binario) {
    if (!/^[01]+$/.test(binario)) {
        return "Error: El número ingresado no es binario.";
    }
    let decimal = 0;
    let potencia = 0;
    for (let i = binario.length - 1; i >= 0; i--) {
      const digito = parseInt(binario[i]);
      decimal += digito * Math.pow(2, potencia);
      potencia++;
    }
    return decimal;
}
const numeroBinario = "1101";
const resultado = binarioADecimal(numeroBinario);
console.log(resultado); 