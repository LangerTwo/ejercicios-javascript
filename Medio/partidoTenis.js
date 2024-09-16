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

function checkWinner(player1, player2, partido) {
  if (player1 > 40 && player1 - player2 >= 10) {
    console.log(`Ha ganado el ${partido}`);
    return true;
  } else if (player2 > 40 && player2 - player1 >= 10) {
    console.log(`Ha ganado el ${partido}`);
    return true;
  }
  return false;
}

match.forEach(partido => {
  if (partido === "P1") {
    player1 = updateScore(player1);
  } else if (partido === "P2") {
    player2 = updateScore(player2);
  }

  // Chequeo si hay un ganador antes de continuar
  if (checkWinner(player1, player2, partido)) return;

  // Chequeo de "Deuce"
  if (player1 === 40 && player2 === 40) {
    console.log("Deuce");
  } else if (player1 > 40 && player1 - player2 === 10) {
    console.log("Ventaja P1");
  } else if (player2 > 40 && player2 - player1 === 10) {
    console.log("Ventaja P2");
  } else {
    console.log(`${getScore(player1)} - ${getScore(player2)}`);
  }
});