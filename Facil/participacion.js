let participantes = []
function menu() {
    console.log(`\n 
        1 - Mostrar Participantes
        2 - Añadir Participantes
        3 - Eliminar Participantes
        4 - Sorteo
        5 - Salir
    `)
}
let opcion
do {
    menu()
    opcion = prompt("Selecciona una opción")
    switch (opcion) {
        case "1":
            // Mostrar Participantes
            if (participantes.length === 0) {
                console.log("No hay participantes")
            } else {
                console.log(`Participantes: ${participantes.join(", ")}`)
            }
            break;
        case "2":
            // Añadir participante
            let nuevoParticipante = prompt("Ingresa el nombre del participante:")
            if (nuevoParticipante) {
                participantes.push(nuevoParticipante)
                console.log(`Se añadio a ${nuevoParticipante}`)
            } else {
                console.log("No se añadio ningun participantes")
            }
            break;
        case "3":
            // Eliminar Participante
            let elminarParticipante = prompt("Ingresa el nombre del participante a eliminar:")
            let index = participantes.indexOf(elminarParticipante)
            if (index !== -1) {
                participantes.splice(index, 1)
                console.log(`Se elimino a ${elminarParticipante}`)
            } else {
                console.log("Participante no encontrado")
            }
            break;
        case "4":
            // Realizar sorteo
            if (participantes.length === 0) {
                console.log("No hay suficientes participantes para un sorteo")
            } else {
                let ganador = participantes[Math.floor(Math.random()*participantes.length)]
                console.log(`El ganador es: ${ganador}`)
            }
            break;
        case "5":
            // Salir
            console.log("Saliendo del programa...")
            break
        default:
            break;
    }
} while (opcion !== "5");