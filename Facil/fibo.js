function fibo(n) {
    let fibN = [0,1]
    for (let i = 2; i < n; i++) {
        numF = fibN[i - 1] + fibN[i - 2]
        // console.log(numF)
        fibN.push(numF)
    }
    return fibN
}
fibo(8) // [0, 1, 1, 2, 3, 5, 8, 13]