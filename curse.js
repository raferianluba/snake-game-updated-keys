import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let curse = getRandomCursePosition()
const EXPANSION_RATE = 120

export function update(){
    if (onSnake(curse)) {
        expandSnake(EXPANSION_RATE)
        curse = getRandomCursePosition()
    }
}


export function draw(gameBoard){
    const curseElement = document.createElement('div')
    curseElement.style.gridRowStart = curse.y
    curseElement.style.gridColumnStart = curse.x
    curseElement.classList.add('curse')
    gameBoard.appendChild(curseElement)
}


function getRandomCursePosition() {
    let newCursePosition
    while (newCursePosition == null || onSnake(newCursePosition)) {
        newCursePosition = randomGridPosition()
    }
    return newCursePosition
}