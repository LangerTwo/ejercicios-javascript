const morseDictionary = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 
    'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', 
    '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', '.': '.-.-.-', 
    ',': '--..--', '?': '..--..', '/': '-..-.', ' ': '   '
};
const spanishMapping = {};
for (let [key, value] of Object.entries(morseDictionary)) {
    spanishMapping[value] = key;
}

function spanishToMorse(texto) {
    let result = '';
    for (let char of texto.toUpperCase()) {
        result += morseDictionary[char] ? morseDictionary[char] + ' ' : char;
    }
    return result.trim();
}

function morseToSpanish(texto) {
    let words = texto.split('   ');
    let result = '';
    for (let word of words) {
        let characters = word.split(' ');
        for (let char of characters) {
            result += spanishMapping[char] ? spanishMapping[char] : char;
        }
        result += ' ';
    }
    result = result.trim();
    result = result.charAt(0).toLocaleUpperCase() + result.slice(1).toLowerCase();
    return result;
}

let texto = "texto prueba";
let textoMorse = spanishToMorse(texto);
console.log(`Texto traducido a Morse: ${textoMorse}`);

const textoTrad = morseToSpanish(textoMorse);
console.log(`Texto traducido al español: ${textoTrad}`);