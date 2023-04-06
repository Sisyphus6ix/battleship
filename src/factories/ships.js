export const createShip = (name, length, timesHit, status) => {
    return {
        name,
        length,
        timesHit,
        status
    }
}

export const hit = (ship) => {
    return ship.timesHit++
}

export const isSunk = (ship) => {
    if (ship.timesHit == ship.length) {
        alert(`Gameover ${ship.name} has been sunk`)
    }
}