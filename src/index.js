import { Board } from "./factories/board";
import { Coordinates } from "./factories/coordinates";
import { Ship } from "./factories/ships";
import { Player } from "./factories/player";

export const fleet = [
    new Ship('Carrier', 5, 0, 'sailing', [new Coordinates(5,5), new Coordinates(10,10), new Coordinates(6, 6), new Coordinates(11, 8), new Coordinates(8,9)]),
    new Ship('Battleship', 4, 0, 'sailing', [new Coordinates(2,4), new Coordinates(4,5), new Coordinates(5,4), new Coordinates(7,7)]),
    new Ship('Cruiser', 3, 0, 'sailing'),
    new Ship('Submarine', 3, 0, 'sailing'),
    new Ship('Destroyer', 2, 0, 'sailing')
]

let user = new Player('Player')
user.gameBoard.placeShip( new Ship('Battleship', 4, 0, 'sailing', [new Coordinates(2,4), new Coordinates(4,5), new Coordinates(5,4), new Coordinates(7,7)]))
user.gameBoard.recieveAttack(2, 4)

let AI = new Player('Computer')
AI.gameBoard.placeShip(new Ship('Carrier', 5, 0, 'sailing', [new Coordinates(5,5), new Coordinates(10,10), new Coordinates(6, 6), new Coordinates(11, 8), new Coordinates(8,9)]),)
AI.gameBoard.recieveAttack(5, 5)
console.log({user, AI})