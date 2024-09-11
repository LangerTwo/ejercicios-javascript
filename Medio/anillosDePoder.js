// Valores de cada raza
const razasBuenas = {"Pelosos": 1, "Sureños Buenos": 2, "Enanos": 3, "Númenóreanos": 4, "Elfos": 5};
const razasMalas = {"Sureños Malos": 2, "Orcos": 2, "Goblins": 2, "Huargos": 3, "Trolls": 5};
function calcularValorEjercito(ejercito, valoresRazas) {
    let valorTotal = 0;
    for (let raza in ejercito) {
        if (valoresRazas[raza]) {
            valorTotal += ejercito[raza] * valoresRazas[raza];  
        }
    }
    return valorTotal;
}
function resultadoBatalla(ejercitoBueno, ejercitoMalo) {
    let valorBueno = calcularValorEjercito(ejercitoBueno, razasBuenas);
    let valorMalo = calcularValorEjercito(ejercitoMalo, razasMalas);
    
    console.log(`Valor del ejército bueno: ${valorBueno}`);
    console.log(`Valor del ejército malo: ${valorMalo}`);
    
    if (valorBueno > valorMalo) {
        return "Ganan los buenos";
    } else if (valorBueno < valorMalo) {
        return "Ganan los malos";
    } else {
        return "Empate";
    }
}
let ejercitoBueno = {
    "Pelosos": 3,  // 3 Pelosos
    "Enanos": 1,   // 1 Enano
    "Elfos": 2     // 2 Elfos
};
let ejercitoMalo = {
    "Orcos": 3,    // 3 Orcos
    "Huargos": 1,  // 1 Huargo
    "Trolls": 1    // 1 Troll
};
let resultado = resultadoBatalla(ejercitoBueno, ejercitoMalo);
console.log(resultado);  // Salida: "Ganan los malos"