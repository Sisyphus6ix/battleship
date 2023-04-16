import { Coordinates } from "./coordinates"
import { fleet } from "./ships"

export function Board (size) {
    this.size = size

    // Empty array for storing ships
    this.fleet = []

    // Empty array for storing spaces on the board
    this.boardSpaces = []

    const placeShip = function (theShip) {
        for (let i = 0; i < theShip.coords.length; i++){
            let x = theShip.coords[i].getX()
            let y = theShip.coords[i].getY()

            console.log({x, y})
            this.boardSpaces.push({x, y})
        }
    }
    
    // const recieveAttack = function (x, y) {
    //     if (x && y == fleet.cords) {
    //         console.log(`${fleet.name} has been hit`)
    //     }
    // }

    this.placeShip = placeShip.bind(this)
    // this.recieveAttack = recieveAttack.bind(this)
}