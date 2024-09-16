function generarPassword(longitud, incluirMayuscula= true, incluirNumeros= true, incluirSimbolos= true) {
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+{}[]<>?,./';

    let caracterDisponible = letrasMayusculas;
    if (incluirMayuscula) {
        caracterDisponible += letrasMayusculas;
    }
    if (incluirNumeros) {
        caracterDisponible += numeros;
    }
    if (incluirSimbolos) {
        caracterDisponible += simbolos;
    }

    let password = "";
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracterDisponible.length);
        password += caracterDisponible[indiceAleatorio]
    }
    return password;
}
const longitud = 12;
const incluirMayuscula = true;
const incluirNumeros = true;
const incluirSimbolos = true;

const passwordGenerada = generarPassword(longitud, incluirMayuscula, incluirNumeros, incluirSimbolos);
console.log(`Contraseña generada ${passwordGenerada}`)