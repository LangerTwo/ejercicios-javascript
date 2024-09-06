const arr1 = ['uno', 'dos', 'tres', 'cuatro']
const arr2 = ['hola', 'dos', 'adios', 'cuatro']
function uniFound(arr1,arr2,boo) {
    const uniElement = arr1.filter(e => !arr2.includes(e))
    if (boo) {
        return uniElement
    }
    const uniElementArr2 = arr2.filter(e => !arr1.includes(e))
    const elementCombi = uniElement.concat(uniElementArr2)
    return elementCombi
}
const unicoArr1 = uniFound(arr1,arr2,true)
console.log(`Los elementos que no estan en ambos array son ${unicoArr1}`)