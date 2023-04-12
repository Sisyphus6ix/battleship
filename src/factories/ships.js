export function Ship (name, length, timesHit, status, coords) {
    this.name = name;
    this.length = length;
    this.timesHit = timesHit;
    this.status = status;
    this.coords = [ coords ];
    
    // function for adding to the ships times hit and changing the ships status to sunk
    const hit = function() { 
        this.timesHit++ 

        if (this.timesHit == this.length) {
            this.status = 'sunk'
        }
    }

    // function for alerting that a ship has sunk
    const isSunk = function() {
        if (this.timesHit === this.length) {
            return alert(`Gameover ${name} has been sunk`)
        }
    }
    
    this.hit = hit.bind(this);
    this.isSunk = isSunk.bind(this);
}

export const fleet = [
    new Ship('Carrier', 5, 0, 'sailing'),
    new Ship('Battleship', 4, 0, 'sailing'),
    new Ship('Cruiser', 3, 0, 'sailing'),
    new Ship('Submarine', 3, 0, 'sailing'),
    new Ship('Destroyer', 2, 0, 'sailing')
]
