function txtMayu(txtP) {
    let txtArr = txtP.toLowerCase().split('')
    let isEmpty = true
    let result = ''
    for (let i = 0; i < txtArr.length; i++) {
        let txtAu = txtArr[i]
        if (txtAu === ' ') {
            isEmpty = true
            result += txtAu
        } else {
            if (isEmpty && /^[a-zA-Z]$/) {
                // (isEmpty && txtAu >= 'a' && txtAu <= 'z')
                result += txtAu.toUpperCase()
            } else {
                result += txtAu
            }
            isEmpty = false
        }
    }
    return result
}
console.log(txtMayu("texTo prueba"))