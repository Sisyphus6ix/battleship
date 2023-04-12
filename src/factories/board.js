import { Coordinates } from "./coordinates"
import { fleet } from "./ships"

export function Board (size) {
    this.size = size

    // Empty array for storing ships
    this.fleet = []

    const placeShip = function (theShip) {
        console.log(theShip.coords)
    }
    
    // const recieveAttack = function () {

    // }
}