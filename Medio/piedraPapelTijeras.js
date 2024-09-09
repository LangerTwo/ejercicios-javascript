function determinarGanadorPartidas(jugadas) {
    let puntajePlayer1 = 0;
    let puntajePlayer2 = 0;

    for (let [jugada1, jugada2] of jugadas) {
        if (jugada1 === jugada2) {
            // Si ambas jugadas son iguales, es un empate (ninguno gana puntos)
            continue
        }
        if (
            (jugada1 === "R" && jugada2 === "S") ||
            (jugada1 === "S" && jugada2 === "P") ||
            (jugada1 === "P" && jugada2 === "R")
        ) {
            puntajePlayer1++
        } else {
            puntajePlayer2++
        }
    }

    if (puntajePlayer1 > puntajePlayer2) {
        return "Player 1"
    } else if (puntajePlayer2 > puntajePlayer1) {
        return "Player 2"
    } else {
        return "Tie"
    }
}

let jugadas = [
    ["R", "S"],
    ["S", "P"],
    ["P", "R"]
]

let resultado = determinarGanadorPartidas(jugadas)
console.log(`El ganador es: ${resultado}`)