import { Coordinates } from "./coordinates"
import { fleet } from "./ships"

export function Board (size) {
    this.size = size

    // Empty array for storing ships
    this.fleet = []

    // Empty array for storing spaces on the board
    this.boardSpaces = []

    // Function for placing the coordinates of a ship into my boardSpaces array 
    // as well as the ship into my fleet array
    const placeShip = function (theShip) {
        for (let i = 0; i < theShip.coords.length; i++){
            let x = theShip.coords[i].getX()
            let y = theShip.coords[i].getY()

            // console.log({x, y})
            this.boardSpaces.push({x, y})
        }
        this.fleet.push(theShip)
    }
    
    const recieveAttack = function (coord1, coord2) {
        let coordCheck = new Coordinates(coord1, coord2)
        // console.log(coordCheck)

        const x = coordCheck.getX()
        const y = coordCheck.getY()
        console.log('Check for these coordinates', {x , y})

        // Checking to see which ship needs to get hit
        for (let space of this.boardSpaces){
            // console.log(space)
            if (space.x == x && space.y == y){
                console.log('These coordinates been hit', {x, y})
            }
        }

        for (let boat of this.fleet){
            console.log(boat.coords)
            // if (boat.coords.x)
        }
    }

    this.placeShip = placeShip.bind(this)
    this.recieveAttack = recieveAttack.bind(this)
}