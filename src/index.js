import { Board } from "./factories/board";
import { Coordinates } from "./factories/coordinates";
import { Ship } from "./factories/ships";

export const fleet = [
    new Ship('Carrier', 5, 0, 'sailing', [new Coordinates(5,5), new Coordinates(10,10), new Coordinates(6, 6), new Coordinates(8, 8)]),
    new Ship('Battleship', 4, 0, 'sailing'),
    new Ship('Cruiser', 3, 0, 'sailing'),
    new Ship('Submarine', 3, 0, 'sailing'),
    new Ship('Destroyer', 2, 0, 'sailing')
]

let test = new Board(20)
test.placeShip(fleet[0])
console.log(test)