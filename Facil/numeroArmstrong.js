function esNumeroArmstrong(num) {
    let suma = 0;
    const numStr = num.ToString();
    const n = numStr.length;
    for (let i = 0; i < n; i++) {
        suma += Math.pow(parseInt(numStr[i]), n)        
    }
    return suma === num
}
console.log(esNumeroArmstrong(153))