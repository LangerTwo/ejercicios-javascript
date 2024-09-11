const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.25;
let zeldas = {
    "The Legend of Zelda": new Date("1986-02-21"),
    "The Adventure of Link": new Date("1987-01-14"),
    "Links Awakeing": new Date("1993-06-06"),
    "Ocarina of Time": new Date("1998-11-21"),
    "Majoras Mask": new Date("2000-04-27"),
    "Oracle of Seasons, Oracle os Ages": new Date("2001-02-27"),
    "Four Swords": new Date("2002-12-03"),
    "The Wind Waker": new Date("2002-12-13"),
    "The Minish Cup": new Date("2004-11-04"),
    "Twilight Princes": new Date("2006-11-19"),
    "Phanthom Hourglass": new Date("2007-06-23"),
    "Spirit Tracks": new Date("2009-12-07"),
    "Skyward Sword": new Date("2011-11-18"),
    "A Link Between Worlds": new Date("2013-11-23"),
    "Tri Force Hereos": new Date("2015-10-11"),
    "Breah Of the Wild": new Date("2017-03-03"),
    "Tears of the Kingdom": new Date("2023-05-12"),
};
// Función para calcular la diferencia de años entre dos fechas
function calcularDiferenciaAnios(juego1, juego2, juegos) {
  if (!(juego1 in juegos) || !(juego2 in juegos)) {
    return "Uno de los juegos no está en la lista.";
  }
  const fecha1 = juegos[juego1];
  const fecha2 = juegos[juego2];  
  const diffTime = fecha1 - fecha2;
  const diffYears = diffTime / MS_PER_YEAR;  
  return `La diferencia entre "${juego1}" y "${juego2}" es de aproximadamente ${Math.floor(diffYears)} años.`;
}
let op1 = "Tears of the Kingdom";
let op2 = "Ocarina of Time";
console.log(calcularDiferenciaAnios(op1, op2, zeldas));

// Mas dinamico
// const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.25;
// let zeldas = {
//     "The Legend of Zelda": new Date("1986-02-21"),
//     "The Adventure of Link": new Date("1987-01-14"),
//     "Links Awakening": new Date("1993-06-06"),
//     "Ocarina of Time": new Date("1998-11-21"),
//     "Majoras Mask": new Date("2000-04-27"),
//     "Oracle of Seasons, Oracle of Ages": new Date("2001-02-27"),
//     "Four Swords": new Date("2002-12-03"),
//     "The Wind Waker": new Date("2002-12-13"),
//     "The Minish Cap": new Date("2004-11-04"),
//     "Twilight Princess": new Date("2006-11-19"),
//     "Phantom Hourglass": new Date("2007-06-23"),
//     "Spirit Tracks": new Date("2009-12-07"),
//     "Skyward Sword": new Date("2011-11-18"),
//     "A Link Between Worlds": new Date("2013-11-23"),
//     "Tri Force Heroes": new Date("2015-10-11"),
//     "Breath of the Wild": new Date("2017-03-03"),
//     "Tears of the Kingdom": new Date("2023-05-12"),
// };
// Función para calcular la diferencia de años entre dos fechas
// function calcularDiferenciaAnios(juego1, juego2, juegos) {
//     if (!(juego1 in juegos) || !(juego2 in juegos)) {
//         return "Uno de los juegos no está en la lista.";
//     }
//     const fecha1 = juegos[juego1];
//     const fecha2 = juegos[juego2];
//     const diffTime = fecha1 - fecha2;
//     const diffYears = diffTime / MS_PER_YEAR;
//     return `La diferencia entre "${juego1}" y "${juego2}" es de aproximadamente ${Math.floor(diffYears)} años.`;
// }

// // Mostrar la lista de juegos disponibles
// console.log("Lista de juegos disponibles:");
// console.log(Object.keys(zeldas).join(", "));

// // Simular selección de juegos (puede ser con prompts, interfaz, etc.)
// function seleccionarJuego(mensaje) {
//     let juegoSeleccionado = prompt(mensaje);
//     while (!(juegoSeleccionado in zeldas)) {
//         juegoSeleccionado = prompt(`Juego no encontrado. Selecciona uno de la lista:\n${Object.keys(zeldas).join(", ")}`);
//     }
//     return juegoSeleccionado;
// }

// let op1 = seleccionarJuego("Selecciona el primer juego:");
// let op2 = seleccionarJuego("Selecciona el segundo juego:");

// // Calcular y mostrar la diferencia
// console.log(calcularDiferenciaAnios(op1, op2, zeldas));