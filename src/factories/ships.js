export function ship (name, length, timesHit, status) {
    this.name = name;
    this.length = length;
    this.timesHit = timesHit;
    this.status = status;
    
    const hit = function() { 
        this.timesHit++ 

        if (this.timesHit == this.length) {
            this.status = 'sunk'
        }
    }

    const isSunk = function() {
        if (this.timesHit === this.length) {
            return alert(`Gameover ${name} has been sunk`)
        }
    }
    
    this.hit = hit.bind(this);
    this.isSunk = isSunk.bind(this);
}

export const fleet = [
    new ship('Carrier', 5, 0, 'sailing'),
    new ship('Battleship', 4, 0, 'sailing'),
    new ship('Cruiser', 3, 0, 'sailing'),
    new ship('Submarine', 3, 0, 'sailing'),
    new ship('Destroyer', 2, 0, 'sailing')
]
