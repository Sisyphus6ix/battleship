import { boardRender } from "../dom/render"
import { Board } from "./board"

export function Player (name, container) {
    this.name = name
    this.gameBoard = new Board(10, boardRender(container))

    const getName = function () {
        return this.name
    }

    this.getName = getName.bind(this)
}