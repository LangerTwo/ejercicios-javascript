// No pude resolverlo 
// Definimos la enumeración de direcciones
const Direction = {
    POSITIVEY: 'POSITIVEY',
    NEGATIVEX: 'NEGATIVEX',
    NEGATIVEY: 'NEGATIVEY',
    POSITIVEX: 'POSITIVEX',

    // Función para girar la direción
    turn(currentDirection){
        switch (currentDirection) {
            case this.POSITIVEY:
                return this.NEGATIVEX;
            case this.NEGATIVEX:
                return this.NEGATIVEY
            case this.NEGATIVEY:
                return this.POSITIVEX;
            case this.POSITIVEX:
                return this.POSITIVEY;
            default:
                return this.POSITIVEY;
        }
    }
};
// Funfción para calcular a posición final del robot
function whereIsTheRobot(steps) {
    let x = 0;
    let y = 0;
    let direction = Direction.POSITIVEY;

    steps.forEach(step => {
        switch (direction) {
            case Direction.POSITIVEY:
                y += step;
                break;
            case Direction.NEGATIVEX:
                x -= step;
                break;
            case Direction.NEGATIVEY:
                y -= step;
                break;
            case Direction.POSITIVEX:
                x += step;
                break;
        }
        // Cambiamos la dirección tras cada moviento 
        direction = Direction.turn(direction)
    });
    return `x: ${x}, y: ${y}, direction: ${direction}`
}

console.log(whereIsTheRobot([10, 5, -2]));
console.log(whereIsTheRobot([0, 0, 0]));
console.log(whereIsTheRobot([]));
console.log(whereIsTheRobot([-10, -5, 2]));
console.log(whereIsTheRobot([-10, -5, 2, 4, -8]));