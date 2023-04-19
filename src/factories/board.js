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
                console.log('There is a ship at these coordinates', {x, y})
            }
        }

        // Searching all my ships in the fleet
        for (let boat of this.fleet){
            // console.log(boat.coords)
        // Searching all of the coordinates on all of my ships
        // Then attacking the ship that matches the searched up coordinates
            for (let info of boat.coords){
                // console.log(info)
                if (info.x == x && info.y == y){
                    console.log(`${boat.name} has been hit`)
                    boat.hit()
                }
            }
        }
    }

    this.placeShip = placeShip.bind(this)
    this.recieveAttack = recieveAttack.bind(this)
}