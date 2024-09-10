function obtenerElementoYAnimal(año) {
    // Definir los elementos y los animales del ciclo sexagenario
    const elementos = ["Madera", "Fuego", "Tierra", "Metal", "Agua"];
    const animales = ["Rata", "Buey", "Tigre", "Conejo", "Dragón", "Serpiente", "Caballo", "Oveja", "Mono", "Gallo", "Perro", "Cerdo"];
    const añoInicioCiclo = 1984;
    let añosDesdeInicio = año - añoInicioCiclo;
    añosDesdeInicio = añosDesdeInicio % 60;
    let elementoIndex = Math.floor(añosDesdeInicio / 2) % 5;
    let animalIndex = añosDesdeInicio % 12;
    const elemento = elementos[elementoIndex];
    const animal = animales[animalIndex];
    
    return `${elemento} ${animal}`;
}
let año = 2024;
let resultado = obtenerElementoYAnimal(año);
console.log(`El año ${año} corresponde a: ${resultado}`);