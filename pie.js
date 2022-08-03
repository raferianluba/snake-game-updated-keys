import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let pie = getRandomPiePosition()
const EXPANSION_RATE = 6

export function update(){
    if (onSnake(pie)) {
        expandSnake(EXPANSION_RATE)
        pie = getRandomPiePosition()
    }
}


export function draw(gameBoard){
    const pieElement = document.createElement('div')
    pieElement.style.gridRowStart = pie.y
    pieElement.style.gridColumnStart = pie.x
    pieElement.classList.add('pie')
    gameBoard.appendChild(pieElement)
}


function getRandomPiePosition() {
    let newPiePosition
    while (newPiePosition == null || onSnake(newPiePosition)) {
        newPiePosition = randomGridPosition()
    }
    return newPiePosition
}