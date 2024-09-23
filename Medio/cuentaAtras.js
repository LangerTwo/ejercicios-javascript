function cuentaAtras(inicio, segundos) {
    if (!Number.isInteger(inicio) || !Number.isInteger(segundos) || inicio < 0 || segundos < 0) {
        console.log("Por favor, introduce solo números enteros positivos.");
        return;
    }
    const intervalId = setInterval(() => {
        console.log(inicio)
        inicio--;
        if (inicio < 0) {
            clearInterval(intervalId);
            console.log("¡Cuenta atrás finalizada!");
        }
    }, segundos * 1000);
}
cuentaAtras(10, 2)