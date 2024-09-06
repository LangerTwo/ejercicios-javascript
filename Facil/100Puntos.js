function valorDePalabras() {
    let alfabeto = {"A":1, "B":2, "C":3, "CH": 4, "D":5, "E":6, "F":7, "G": 8, "H": 9, "I": 10, "J": 11, "K": 12, "L": 13, "M": 14, "N": 15, "O": 16, "P": 17, "Q": 18, "R": 19, "S": 20, "T": 21, "U": 22, "V": 23, "W": 24, "Y": 25, "X": 26, "Z": 27};
    let total = 0;
    do {
        let result = '';
        let puntos = prompt("Introduce una palabra").toUpperCase();
        puntos.split('').forEach((e) => {
            result += alfabeto[e] + ' ';
            total += alfabeto[e];
        });
        console.log(result);
        console.log(`La suma parcial de los valores es: ${total}`)
    } while (total < 100);
    console.log(`La suma total de los valores es: ${total}`)
}
valorDePalabras()