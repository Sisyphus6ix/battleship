import { Board } from "./board"

export function Player (name) {
    this.name = name
    this.ships = []
    this.gameBoard = new Board(10)

    const getName = function () {
        return this.name
    }

    this.getName = getName.bind(this)
}