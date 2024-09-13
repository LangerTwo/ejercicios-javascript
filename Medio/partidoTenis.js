// trabajo en progreso
const match = ["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1"];
let player1 = 0;
let player2 = 0;

function getScore(score) {
  return score === 0 ? "Love" : score;
}

function updateScore(player) {
  if (player === 0 || player === 15) {
    return player + 15;
  } else if (player === 30) {
    return player + 10;
  }
  return player;
}

match.forEach(partido => {
  if (partido === "P1") {
    player1 = updateScore(player1);
  } else if (partido === "P2") {
    player2 = updateScore(player2);
  }

  // Chequeo de "Deuce" antes de imprimir la puntuación
  if (player1 === 40 && player2 === 40) {
    console.log("Deuce");
  } else {
    console.log(`${getScore(player1)} - ${getScore(player2)}`);
  }
});