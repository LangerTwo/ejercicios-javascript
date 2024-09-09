function sumarConRetardo(num1, num2, segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num1 + num2);
        }, segundos * 1000);
    });
}

async function ejecutarSumas() {
    console.log("Iniciando la suma...");    
    let resultado1 = sumarConRetardo(3, 4, 2);
    let resultado2 = sumarConRetardo(10, 20, 1);
    console.log(`Resultado 1: ${await resultado1}`); // Después de 2 segundos
    console.log(`Resultado 2: ${await resultado2}`); // Después de 1 segundo
}
ejecutarSumas();