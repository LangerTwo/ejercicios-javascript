function esPitagorico(a,b,c) {
    return a*a + b*b === c*c;
}
function generarTriples(limite) {
    const triples = [];
    for (let a = 1; a <= limite; a++) {
        for (let b = 0; b <= limite; b++) {
            for (let c = 0; c <= limite; c++) {
                if (esPitagorico(a,b,c)) {
                    triples.push([a,b,c]);
                }
            }
        }
    }
    return triples;
}
const triplesHasta10 = generarTriples(10);
console.log(triplesHasta10);