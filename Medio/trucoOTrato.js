let personas = [
    {nombre: "Juan", edad: 10, altura: 140},
    {nombre: "María", edad: 8, altura: 130},
    {nombre: "Pedro", edad: 12, altura: 145},
    {nombre: "Ana", edad: 9, altura: 135},
    {nombre: "Lucía", edad: 11, altura: 138}
];
const sustos = ["🎃", "👻", "💀", "🕷", "🕸", "🦇"];
const dulces = ["🍰", "🍬", "🍡", "🍭", "🍪", "🍫", "🧁", "🍩"];
// Función para obtener susto aleatorio
function obtenerSusto() {
    return sustos[Math.floor(Math.random() * sustos.length)];
}
// Función para obtener dulce aleatorio
function obtenerDulce() {
    return dulces[Math.floor(Math.random() * dulces.length)];
}
// Función para manejar truco
function realizarTruco(personas) {
    let sustosPorAltura = 0;
    personas.forEach(persona => {
        let {nombre, edad, altura} = persona;
        // Sustos por cada 2 letras del nombre
        for (let i = 0; i < nombre.length; i += 2) {
            console.log(`${nombre}, ${obtenerSusto()}`);
        }
        // Sustos por edad par
        if (edad % 2 === 0) {
            console.log(`${nombre}, ${obtenerSusto()} ${obtenerSusto()}`);
        }
        // Acumular sustos por cada 100 cm de altura
        sustosPorAltura += Math.floor(altura / 100) * 3;
    });
    // Sustos adicionales por altura
    if (sustosPorAltura > 0) {
        console.log(`Sustos por altura: ${"🕷".repeat(sustosPorAltura)}`);
    }
}

// Función para manejar trato
function realizarTrato(personas) {
    personas.forEach(persona => {
        let {nombre, edad, altura} = persona;
        // Dulces por cada letra del nombre
        for (let i = 0; i < nombre.length; i++) {
            console.log(`${nombre}, ${obtenerDulce()}`);
        }
        // Dulces por cada 3 años cumplidos (hasta un máximo de 10)
        let maxAnios = Math.min(edad, 10);
        for (let i = 3; i <= maxAnios; i += 3) {
            console.log(`La persona ${nombre}, ${obtenerDulce()}`);
        }
        // Dulces por cada 50 cm de altura (hasta un máximo de 150 cm)
        let maxAltura = Math.min(altura, 150);
        for (let i = 50; i <= maxAltura; i += 50) {
            console.log(`${nombre}, ${obtenerDulce()} ${obtenerDulce()}`);
        }
    });
}

let option = prompt("Truco o Trato (1 para Truco - 2 para Trato)")
switch (option) {
    case "1":
        realizarTruco(personas);
        break;
    case "2":
        realizarTrato(personas);
        break;
    default:
        console.log("Error: Opción no válida. Debes ingresar 1 para Truco o 2 para Trato.");
        break;
}

// let personas = [
//     {nombre: "Juan", edad: 10, altura: 140},
//     {nombre: "María", edad: 8, altura: 130},
//     {nombre: "Pedro", edad: 12, altura: 145},
//     {nombre: "Ana", edad: 9, altura: 135},
//     {nombre: "Lucía", edad: 11, altura: 138}
// ];
// let option = prompt("Truco o Trato")
// switch (option) {
//     case "1":
//         personas.forEach(persona => {
//             let nombre = persona.nombre;
//             let edad = persona.edad;
//             let altura = persona.altura;
//             for (let i = 0; i < nombre.length; i += 2) {
//               let subNombre = nombre.slice(i, i + 2);
//               if (subNombre.length == 2) {
//                   console.log(`${nombre}, 🎃`);
//               } 
//             }
//             let edadPar = edad % 2 === 0
//             if (edadPar) {
//               console.log(`${nombre} 👻 💀`);
//             }
//             if (altura >= 100) {
//               console.log(`${nombre} 🕷 🕸 🦇`)
//             }
//           });
//         break;
//     case "2":
//         personas.forEach(persona => {    
//             let nombre = persona.nombre;
//             let edad = persona.edad;
//             let altura = persona.altura;
//             for (let i = 0; i < nombre.length; i++) {
//               let subNombre = nombre.slice(i, i + 1);
//               if (subNombre.length == 1) {
//                 console.log(`${nombre}, 🍰 🍬 🍡 🍭 🍪`);
//               } 
//             }
//             let maxAnios = Math.min(edad, 10)
//             for (let i = 3; i <= maxAnios; i += 3) {
//                 console.log(`La persona ${nombre} 🍫`);
//             }
//             let maxAltura = Math.min(altura, 150)
//             for (let i = 50; i <= maxAltura; i += 50) {
//                 console.log(`${nombre} 🧁 🍩`)
//             }
//         });
//         break;
//     default:
//         break;
// }