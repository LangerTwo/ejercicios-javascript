// function leyOhm(v,r,i) {
//     if (v != 0 && r != 0 && i == 0) {
//         return `La corriente es: ${i = Math.round(v / r)}`
//     } else if (i != 0 && v != 0 && r == 0) {
//         return `La resistencia es: ${r = Math.round(v / i)}`
//     } else if (r != 0 && i != 0 && v == 0) {
//         return `El voltaje es: ${v = Math.round(i * r)}`
//     } else {
//         return "Value Invalide"
//     }
// }
// const v = 12
// const r = 8
// const i = 0
// leyOhm(v, r, i)

function leyOhm(v,r,i) {
    if (v !== 0 && r !== 0 && i === 0) {
        const corriente = Math.round(v / r)
        return `La corriente es: ${corriente.toFixed(2)}`
    } else if (i !== 0 && v !== 0 && r === 0) {
        const resistencia = Math.round(v / i)
        return `La resistencia es: ${resistencia.toFixed(2)}`
    } else if (r !== 0 && i !== 0 && v === 0) {
        const voltaje = Math.round(i * r)
        return `El voltaje es: ${voltaje.toFixed(2)}`
    } else {
        return "Value Invalide"
    }
}
const v = 12
const r = 8
const i = 0
leyOhm(v, r, i)