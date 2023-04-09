export function ship (name, length, timesHit, status) {
    this.name = name,
    this.length = length,
    this.timesHit = timesHit,
    this.status = status
    
    const hit = (ship) => { return ship.timesHit++ }

    const isSunk = (ship) => {
        if (ship.timesHit == ship.length) {
            return alert(`Gameover ${name} has been sunk`)
        }
    }

    return {
        name,
        length,
        timesHit,
        status,
        hit,
        isSunk
    }
}

export const fleet = [
    new ship('Carrier', 5, 0, 'sailing'),
    new ship('Battleship', 4, 0, 'sailing'),
    new ship('Cruiser', 3, 0, 'sailing'),
    new ship('Submarine', 3, 0, 'sailing'),
    new ship('Destroyer', 2, 0, 'sailing')
]
