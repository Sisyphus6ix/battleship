export function Cordinates (x, y) {
    this.x = x;
    this.y = y;

    const getX = function() {
        return this.x
    }

    const getY = function() {
        return this.y
    }

    this.getX = getX.bind(this)
    this.getY = getY.bind(this)
}