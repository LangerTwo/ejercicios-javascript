function boomerang(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let ini = arr[i - 1] // arr[i]
        let mid = arr[i] // arr[i + 1]
        let end = arr[i + 1] // arr[i + 2]
        if (ini == end && mid != ini) {
            console.log(`Boomerang encontrado: [${ini}, ${mid}, ${end}]`)
            count++
        }
    }
    return `La cantidad de boomerangs es: ${count}`
}
const bumerang = [2,1,2,3,3,4,2,4]
console.log(boomerang(bumerang))