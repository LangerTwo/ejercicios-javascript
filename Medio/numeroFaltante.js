function calcularNumerosFaltantes(arr) {
    // Comprobar si el array está ordenado
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            throw new Error("El array no está ordenado o tiene elementos repetidos.");
        }
    }
    // Comprobar si el array tiene al menos dos elementos
    if (arr.length < 2) {
        throw new Error("El array debe contener al menos dos números.");
    }
    // Obtener el menor y el mayor del array
    const min = arr[0];
    const max = arr[arr.length - 1];
    // Crear un array de los números faltantes
    let faltantes = [];
    for (let i = min + 1; i < max; i++) {
        if (!arr.includes(i)) {
            faltantes.push(i);
        }
    }
    return faltantes;
}
try {
    let arr = [1, 2, 4, 6, 7];  // Ejemplo de un array ordenado y sin repetidos
    let faltantes = calcularNumerosFaltantes(arr);
    console.log(`Los números faltantes son: ${faltantes}`);  // Salida: [3, 5]
} catch (error) {
    console.error(error.message);
}

// function encontrarFaltantes(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] <= arr[i - 1]) {
//             throw new Error("El array no está ordenado o tiene elementos repetidos.");
//         }
//     }
//     if (arr.length < 2) {
//         throw new Error("El array debe contener al menos dos números.");
//     }
//     const faltantes = [];
//     let esperado = arr[0];
//     for (let num of arr) {
//         while (esperado < num) {
//         faltantes.push(esperado);
//         esperado++;
//         }
//         esperado++;
//     }
//     return faltantes;
// }
// const numeros = [1, 3, 5];
// const faltantes = encontrarFaltantes(numeros);
// console.log(faltantes);