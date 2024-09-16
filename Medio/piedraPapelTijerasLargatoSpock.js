function determinarGanadorPartidas(jugadas) {
    // Mapa para determinar las jugadas que ganan
    const reglas = {
        "🗿": ["✂️", "🦎"],   // Piedra gana a Tijeras y Lagarto
        "📄": ["🗿", "🖖"],   // Papel gana a Piedra y Spock
        "✂️": ["📄", "🦎"],   // Tijeras gana a Papel y Lagarto
        "🦎": ["📄", "🖖"],   // Lagarto gana a Papel y Spock
        "🖖": ["🗿", "✂️"]    // Spock gana a Piedra y Tijeras
    };
    let puntajeP1 = 0;
    let puntajeP2 = 0;

    for (let [jugador1, jugador2] of jugadas) {
        if (jugador1 === jugador2) {
            continue;
        }

        if (reglas[jugador1].includes(jugador2)) {
            puntajeP1++
        } else {
            puntajeP2++
        }
    }

    if (puntajeP1 > puntajeP2) {
        return "Player 1";
    } else if (puntajeP2 > puntajeP1) {
        return "Player 2";
    } else {
        return "Tie";
    }
}

let jugadas = [
    ["🗿", "🖖"],
    ["✂️", "📄"],
    ["📄", "🦎"]
];

let resultado = determinarGanadorPartidas(jugadas);
console.log(`El ganador es: ${resultado}`);

