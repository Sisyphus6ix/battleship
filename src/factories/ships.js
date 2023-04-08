export function ship (name, length, timesHit, status) {
    this.name = name,
    this.length = length,
    this.timesHit = timesHit,
    this.status = status

    return {
        name,
        length,
        timesHit,
        status
    }
}

export let fleet = [
    new ship('Carrier', 5, 0, 'sailing'),
    new ship('Battleship', 4, 0, 'sailing'),
    new ship('Cruiser', 3, 0, 'sailing'),
    new ship('Submarine', 3, 0, 'sailing'),
    new ship('Destroyer', 2, 0, 'sailing')
]


export const hit = (ship) => {
    ship.timesHit++
}

export const isSunk = (ship) => {
   for (let i = 0; i < ship.length; i++ ){
    // console.log(ship[i])
    if (ship[i].timesHit == ship[i].length) {
        let sunkShip = ship[i]
        alert(`${sunkShip.name} has been sunk`)
    }
   }
}