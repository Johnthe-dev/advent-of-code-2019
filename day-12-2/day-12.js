const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8', flag: 'r'});
let directions = input.split('\n');
let direction = 90;
let y = 0;
let x = 0;
for (let i = 0; i < directions.length - 1; i++) {
    let type = directions[i].substring(0, 1);
    let value = parseInt(directions[i].substring(1), 10);
    switch (type) {
        case 'N':
            y = y + value;
            break;
        case 'S':
            y = y - value;
            break;
        case 'E':
            x = x + value;
            break;
        case 'W':
            x = x - value;
            break;
        case 'L':
            direction = direction - value;
            direction < 0 ? direction = 360 + direction : null;
            break;
        case 'R':
            direction = direction + value;
            direction >= 360 ? direction = direction - 360 : null;
            break;
        case 'F':
            switch (direction) {
                case 0:
                    y = y + value;
                    break;
                case 90:
                    x = x + value;
                    break;
                case 180:
                    y = y - value;
                    break;
                case 270:
                    x = x - value;
                    break;
                default:
                    console.log('error');
                    break;
            }
            break;
        default:
            break;
    }
}
console.log('first answer x=' + x + 'y = ' + y + ' sum=' + (Math.abs(y) + Math.abs(x)));
directions = 'F10\n' +
    'N3\n' +
    'F7\n' +
    'L90\n' +
    'F11'
directions = directions.split('\n');
let waypointX = 10;
let waypointY = 1;
let tempY = 0;
let tempX = 0;
let shipY = 0;
let shipX = 0;
for (let i = 0; i < directions.length; i++) {
    let type = directions[i].substring(0, 1);
    let value = parseInt(directions[i].substring(1), 10);
    switch (type) {
        case 'N':
            waypointY = waypointY + value;
            break;
        case 'S':
            waypointY = waypointY - value;
            break;
        case 'E':
            waypointX = waypointX + value;
            break;
        case 'W':
            waypointX = waypointX - value;
            break;
        case 'L':
            tempY = waypointY;
            tempX = waypointX;
            switch (value) {
                case 90:
                    waypointY = tempX;
                    waypointX = -tempY;
                    break;
                case 180:
                    waypointY = -tempX;
                    waypointX = -tempY;
                    break;
                case 270:
                    waypointY = -tempX;
                    waypointX = tempY;
                    break;
                default:
                    console.log('error');
                    break;
            }
            break;
        case 'R':
            tempY = waypointY;
            tempX = waypointX;
            switch (value) {
                case 90:
                    waypointY = -tempX;
                    waypointX = tempY;
                    break;
                case 180:
                    waypointY = -tempX;
                    waypointX = -tempY;
                    break;
                case 270:
                    waypointY = tempX;
                    waypointX = -tempY;
                    break;
                default:
                    console.log('error');
                    break;
            }
            break;
        case 'F':
            shipX = shipX+(waypointX*value);
            shipY = shipY+(waypointY*value);
            break;
        default:
            console.log('error');
            break;
    }
    console.log(directions[i]);
    console.log('x=' + waypointX + ' y =' + waypointY);
    console.log('x=' + shipX + ' y =' + shipY + ' sum=' + (Math.abs(shipY) + Math.abs(shipX)));
}
console.log('second answer x=' + shipX + ' y =' + shipY + ' sum=' + (Math.abs(shipY) + Math.abs(shipX)));