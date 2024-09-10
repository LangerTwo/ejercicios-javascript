function calcularEfectividad(tipoAtacante, tipoDefensor) {
    const efectividad = {
        Agua: {Fuego: 2, Planta: 0.5, Agua: 0.5, Electrico: 1},
        Fuego: {Planta: 2, Agua: 0.5, Fuego: 0.5, Electrico: 1},
        Planta: {Agua: 2, Fuego: 0.5, Planta: 0.5, Electrico: 1},
        Electrico: {Agua: 2, Planta: 1, Fuego: 1, Electrico: 0.5}
    };
    return efectividad[tipoAtacante][tipoDefensor] || 1;
};
function calcularDamage(tipoAtacante, tipoDefensor, ataque, defensa) {
    if (ataque < 1 || ataque > 100 || defensa < 1 || defensa > 100) {
        throw new Error("Los valores de ataque y defensa deben estar entre 1 y 100.");
    };
    let efectividad = calcularEfectividad(tipoAtacante, tipoDefensor)
    let damage = 50 * (ataque / defensa) * efectividad
    return damage
};
try {
    const tipoAtacante = "Agua";
    const tipoDefensor = "Fuego";
    let ataque = 80;
    let defensa = 50;
    let damage = calcularDamage(tipoAtacante, tipoDefensor, ataque, defensa)
    console.log(`El daño causado es: ${damage}`)
} catch (error) {
    console.error(error.message)
};