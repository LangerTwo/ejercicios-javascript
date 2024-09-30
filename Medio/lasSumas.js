function encontrarCombinaciones(lista, objetivo) {
    const soluciones = [];
    //Función recursiva para buscar combinaciones
    function buscarCombinaciones(current, start, target) {
        const sumActual = current.reduce((acc, num) => acc + num, 0);
        // Si la suma actual es igual al objetivo, se guarda la combinación
        if (sumActual === target) {
            soluciones.push([...current]);
            return;
        }
        // Si la suma supera el objetivo, se detiene la recursión
        if (sumActual > target) {
            return;
        }
        // Se recorre la lista para buscar las combinaciones
        for (let i = start; i < lista.length; i++) {
            buscarCombinaciones([...current, lista[i]], i + 1, target);
        }
    }
    // Inicia la búsqueda de combinaciones
    buscarCombinaciones([], 0, objetivo);
    // Retorna las soluciones encontradas
    return soluciones;
}
// Ejemplo de uso:
const lista = [1, 5, 3, 2];
const objetivo = 6;
const combinaciones = encontrarCombinaciones(lista, objetivo);
if (combinaciones.length > 0) {
    console.log("Soluciones encontradas:");
    combinaciones.forEach(comb => console.log(comb));
} else {
    console.log("No se encontraron combinaciones.")
}