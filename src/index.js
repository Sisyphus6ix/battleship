import { createShip, hit, isSunk } from "./factories/ships";

let testShip = createShip('Carrier', 5, 0, 'sailing')

console.log(hit(testShip))
// console.log(hit(testShip))
// console.log(hit(testShip))
// console.log(hit(testShip))
// console.log(hit(testShip))
console.log(testShip)
isSunk(testShip)