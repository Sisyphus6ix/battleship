import { Coordinates } from "./coordinates"
import { fleet } from "./ships"

export function Board (size) {
    this.size = size

    // Empty array for storing ships
    this.fleet = [fleet]

    // Empty array for storing spaces on the board
    this.boardSpaces = []

    const placeShip = function (theShip) {
        console.log(theShip)
    }
    
    const recieveAttack = function (x, y) {
        if (x && y == fleet.cords) {
            console.log(`${fleet.name} has been hit`)
        }
    }

    this.placeShip = placeShip.bind(this)
    this.recieveAttack = recieveAttack.bind(this)
}