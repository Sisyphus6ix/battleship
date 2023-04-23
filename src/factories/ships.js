export function Ship (name, length, timesHit, status, coords) {
    this.name = name;
    this.length = length;
    this.timesHit = timesHit;
    this.status = status;
    this.coords = coords ;
    
    // function for adding to the ships times hit and changing the ships status to sunk
    const hit = function() { 
        this.timesHit++ 

        if (this.timesHit == this.length) {
            this.status = 'sunk'
        }
    }

    // function for alerting that a ship has sunk
    const hasSunk = function() {
        if (this.timesHit === this.length) {
            return alert(`Gameover ${name} has been sunk`)
        }
    }
    
    this.hit = hit.bind(this);
    this.hasSunk = hasSunk.bind(this);
}
