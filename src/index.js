import { Coordinates } from "./factories/coordinates";
import { Ship } from "./factories/ships";
import { Player } from "./factories/player";

export const fleet = [
    new Ship('Carrier', 5, 0, 'sailing', [new Coordinates(5,5), new Coordinates(4,5), new Coordinates(3, 5), new Coordinates(2, 5), new Coordinates(1,5)]),
    new Ship('Battleship', 4, 0, 'sailing', [new Coordinates(2,4), new Coordinates(2,5), new Coordinates(2,6), new Coordinates(2,7)]),
    new Ship('Cruiser', 3, 0, 'sailing'),
    new Ship('Submarine', 3, 0, 'sailing'),
    new Ship('Destroyer', 2, 0, 'sailing')
]

// Grabbing the player1 Board in HTML
const player1Board = document.getElementsByClassName('player1-board')[0]
let user = new Player('Player', player1Board)
user.gameBoard.placeShip(new Ship('Battleship', 4, 0, 'sailing', [new Coordinates(2,4), new Coordinates(2,5), new Coordinates(2,6), new Coordinates(2,7)]))
user.gameBoard.recieveAttack(2, 4)
user.gameBoard.recieveAttack(2, 5)

// Grabbing the player2 Board in HTML
const player2Board = document.getElementsByClassName('player2-board')[0]
let AI = new Player('Computer', player2Board)
AI.gameBoard.placeShip(new Ship('Carrier', 5, 0, 'sailing', [new Coordinates(5,5), new Coordinates(4,5), new Coordinates(3, 5), new Coordinates(2, 5), new Coordinates(1,5)]))
AI.gameBoard.recieveAttack(5, 5)
console.log({user, AI})



// boardRender(user)
// const playerBoard = document.getElementsByClassName('board')[0]

// let test = new Board(10, boardRender(playerBoard))
// test.placeShip(new Ship('Carrier', 5, 0, 'sailing', [new Coordinates(5,5), new Coordinates(9,9), new Coordinates(6, 6), new Coordinates(8, 8), new Coordinates(8,9)]))
// test.placeShip(new Ship('Cruiser', 3, 0, 'sailing', [new Coordinates(1, 2), new Coordinates(1,3), new Coordinates(1, 4)]))
// test.recieveAttack(1, 3)
// test.recieveAttack(2, 3)