function esPrimo(num) {
    if(num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function esCuadradoPerfecto(num) {
    const raiz = Math.sqrt(num);
    return raiz === Math.floor(raiz);
}

function esFibonacci(n) {
    const test1 = 5 * Math.pow(n, 2) + 4;
    const test2 = 5 * Math.pow(n, 2) - 4;
    return esCuadradoPerfecto(test1) || esCuadradoPerfecto(test2);
}

function esPar(num) {
    return num % 2 === 0;
}

function comprobarNumero(num) {
    let resultado = `${num} es `;
    resultado += esPrimo(num) ? "primo, " : "no es primo, "
    resultado += esFibonacci(num) ? "fibonacci, " : "no es fibonacci, "
    resultado += esPar(num) ? "y es par." : "y es impar."
    console.log(resultado)
}

comprobarNumero(2);
comprobarNumero(7);
comprobarNumero(8);
comprobarNumero(13);