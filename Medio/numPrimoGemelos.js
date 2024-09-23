function esPrimo(numero) {
    if(numero <= 1) return false;
    for (let i = 2; i < Math.sqrt(numero); i++) {
        if(numero % i === 0) return false;
    }
    return true;
}

function primosGemelos(rangoMax) {
    let primoGemelos = [];
    let ultimoPrimo = null;

    for (let i = 2; i < rangoMax; i++) {
        if (esPrimo(i)) {
            if (ultimoPrimo !== null && i - ultimoPrimo === 2) {
                primoGemelos.push([ultimoPrimo, i])
            }
            ultimoPrimo = i;
        }
    }
    return primoGemelos;
}

const rangoMax = 14;
const gemelos = primosGemelos(rangoMax);
console.log(`Primos gemelos en el rango ${rangoMax}`);
gemelos.forEach(par => console.log(`(${par[0]}, ${par[1]})`))