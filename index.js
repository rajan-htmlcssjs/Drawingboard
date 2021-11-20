const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const decBtn = document.getElementById('decrease')
const incBtn = document.getElementById('increment')
const sizeDisplay = document.querySelector('.size')
const colorSelect = document.querySelector('.color')
const clearBtn = document.querySelector('.clear')

let color = 'black'
let size = 10
let x,y,isPressed

colorSelect.addEventListener('change',e => {
    color = e.target.value
})

decBtn.addEventListener('click',()=>{
    size--
    if(size < 5) size = 5
    updateSize()
})

incBtn.addEventListener('click',()=>{
    size++
    if(size > 50) size = 50
    updateSize()
})

function updateSize () {
    sizeDisplay.innerText = size
}

canvas.addEventListener('mousedown',(e)=>{
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup',(e)=>{
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove',(e)=>{
    if(isPressed){
        const y2 = e.offsetY
        const x2 = e.offsetX

    drawCircle(x,y)
    drawLine(x,y,x2,y2)
        x = x2
        y = y2
    }
})

function drawCircle() {
    ctx.beginPath()
    ctx.arc(x,y,size,Math.PI * 2,false)
    ctx.fillStyle = color
    ctx.fill()
} 

function drawLine(x1,y1,x2,y2) {
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle= color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

clearBtn.addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
})