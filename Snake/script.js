const head = document.getElementById("head")
const food = document.getElementById("food")
const size = 21

let direction = "up"

let headxPos = parseInt(size / 2)
let headyPos = parseInt(size / 2)

spawnFood()

setInterval(async () => {
    console.log(direction)
    if (direction == "up") {
        head.style.gridRow = headyPos
        if (--headyPos == 0) {
            headyPos = size
        }
    } else if (direction == "down") {
        head.style.gridRow = headyPos
        if (++headyPos == size + 1) {
            headyPos = 1
        }
    } else if (direction == "right") {
        head.style.gridColumn = headxPos
        if (++headxPos == size + 1) {
            headxPos = 1
        }
    } else if (direction == "left") {
        head.style.gridColumn = headxPos
        if (--headxPos == 0) {
            headxPos = size
        }
    }
}, 500);

document.addEventListener("keydown", function (event) {
    if (event.key == "ArrowUp") {
        direction = "up"
    } else if (event.key == "ArrowDown") {
        direction = "down"
    } else if (event.key == "ArrowRight") {
        direction = "right"
    } else if (event.key == "ArrowLeft") {
        direction = "left"
    }
})

function spawnFood() {
    const { x, y } = getHeadPos()

    let randomX = Math.floor(Math.random() * size + 1)
    let randomY = Math.floor(Math.random() * size + 1)

    while (!(randomX != x && randomY != y)) {
        randomX = Math.floor(Math.random() * size + 1);
        randomY = Math.floor(Math.random() * size + 1)
    }
    food.style.gridColumn = randomX
    food.style.gridRow = randomY
    food.style.display = "block"
}

function getHeadPos() {
    const x = getComputedStyle(head).gridColumn
    const y = getComputedStyle(head).gridRow
    return { x: x, y: y }
}

function getFoodPos() {
    const x = getComputedStyle(food).gridColumn
    const y = getComputedStyle(food).gridRow
    return { x: x, y: y }
}