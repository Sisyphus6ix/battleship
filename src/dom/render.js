export const boardRender = (boardContainer) => (board) => {
    // console.log(boardContainer)
    boardContainer.innerText = ''
    
    // console.log(board)

    // Grabbing the coordinates from ships in my fleet and linking them to HTML
    // If a coordinate has been hit then it changes the color of the coordinate to red
    for (let ship of board.fleet){
        // console.log(ship)
        for (let coords of ship.coords){
            // console.log(coords)
            const shipCell = document.createElement('div')
            shipCell.setAttribute('class', 'ship-cell')
            shipCell.style.left = coords.x * 30 + 'px'
            shipCell.style.top = coords.y * 30 + 'px'
            boardContainer.appendChild(shipCell)

            const isHit = board.boardSpaces.some(c => {
                // console.log(c)
                return c.x === coords.x && c.y === coords.y && c.Status === 'Hit'
            })
            if (isHit){
                // console.log('Hit')
                shipCell.style.backgroundColor = 'red'
            }
        }
    }
}
