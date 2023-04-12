import { Coordinates } from "./factories/coordinates";
import { Ship, fleet } from "./factories/ships";


let example = new Ship('Carrier', 5, 0, 'sailing', [new Coordinates(5,5), new Coordinates(10,10), new Coordinates(6, 6), new Coordinates(8, 8)])
example.hit()
console.log(example)