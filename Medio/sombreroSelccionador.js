// Preguntas del sombrero seleccionador
const preguntas = [
    {
      pregunta: "¿Qué cualidad valoras más en ti mismo?",
      respuestas: [
        "1. Valentía",
        "2. Ambición",
        "3. Lealtad",
        "4. Inteligencia"
      ],
      puntaje: [1, 2, 3, 4] // Gryffindor, Slytherin, Hufflepuff, Ravenclaw
    },
    {
      pregunta: "¿Qué es lo más importante para ti?",
      respuestas: [
        "1. Amigos",
        "2. Poder",
        "3. Justicia",
        "4. Conocimiento"
      ],
      puntaje: [1, 2, 3, 4]
    },
    {
      pregunta: "¿Cómo actúas ante un reto?",
      respuestas: [
        "1. Lo enfrento sin dudar",
        "2. Busco cómo obtener una ventaja",
        "3. Pido ayuda a mis compañeros",
        "4. Investigo a fondo antes de actuar"
      ],
      puntaje: [1, 2, 3, 4]
    },
    {
      pregunta: "¿Qué criatura mágica te gustaría tener como mascota?",
      respuestas: [
        "1. Fénix",
        "2. Serpiente",
        "3. Tejón",
        "4. Cuervo"
      ],
      puntaje: [1, 2, 3, 4]
    },
    {
      pregunta: "¿Cuál de estos lugares te parece más atractivo?",
      respuestas: [
        "1. Bosque prohibido",
        "2. Mazmorras",
        "3. Prados soleados",
        "4. Biblioteca"
      ],
      puntaje: [1, 2, 3, 4]
    }
];
  
// Variables de puntaje para cada casa
let puntajes = {
    Gryffindor: 0,
    Slytherin: 0,
    Hufflepuff: 0,
    Ravenclaw: 0
};
  
// Función para mostrar las preguntas y calcular los puntajes
function hacerPreguntas() {
    preguntas.forEach((preguntaObj, index) => {
        let respuesta = prompt(`${preguntaObj.pregunta}\n${preguntaObj.respuestas.join("\n")}`);
        // Convertimos la respuesta a un número para poder evaluar
        respuesta = parseInt(respuesta);
        if (respuesta >= 1 && respuesta <= 4) {
        switch (preguntaObj.puntaje[respuesta - 1]) {
            case 1:
            puntajes.Gryffindor++;
            break;
            case 2:
            puntajes.Slytherin++;
            break;
            case 3:
            puntajes.Hufflepuff++;
            break;
            case 4:
            puntajes.Ravenclaw++;
            break;
        }
        } else {
        alert("Respuesta inválida. Por favor, ingresa un número entre 1 y 4.");
        index--; // Volver a hacer la pregunta si la respuesta no es válida
        }
    });
}
  
// Función para determinar la casa del estudiante
function determinarCasa() {
   let casa = Object.keys(puntajes).reduce((a, b) => (puntajes[a] > puntajes[b] ? a : b));
   return casa;
}
  
// Iniciar la selección
hacerPreguntas();
alert(`¡El sombrero seleccionador ha decidido! ¡Tu casa es: ${determinarCasa()}!`);