function karacaEncryption(str) {
    // Invertir la cadena
    let reversedStr = str.split('').reverse().join('')
    // Reemplazar las vocales con numeros
    let encryptedStr = ""
    for (let i = 0; i < reversedStr.length; i++) {
        switch (reversedStr[i]) {
            case 'a':
                encryptedStr += '0'
                break;
            case 'e':
                encryptedStr += '1'
                break;
            case 'i':
                encryptedStr += '2'
                break;
            case 'o':
                encryptedStr += '3'
                break;
            case 'u': 
                encryptedStr += '4'
                break
            default:
                encryptedStr += reversedStr[i]
        }
    }
    // Agregar "aca" al final
    return encryptedStr + "aca"
}
let texto = "apple"
console.log(karacaEncryption(texto))