const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1520
canvas.height = 728

const img = new Image()
img.src = "./img/map-zoom.png"

// console.log(img)
const player_image = new Image();
player_image.src = "./img/playerDown.png"

// img.onload = () => {
//     c.drawImage(img, -720, -1590)
//     c.drawImage(player_image,
//         0,
//         0,
//         player_image.width/4,
//         player_image.height,
//         canvas.width/2 - player_image.width/2,
//         canvas.height/2 - player_image.height/2,
//         player_image.width/4,
//         player_image.height)
// }

class Sprite{
    constructor(positon, velocity, image){
        this.positon = positon
        this.velocity = velocity
        // this.image = image
    }

    draw(){
        // console.log("hemlo")
        c.drawImage(img, -720, -1590)
    }
}

const background = new Sprite({
    positon: {
        x: -720,
        y: -1590
    }
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
}

function animate(){
    window.requestAnimationFrame(animate)
    background.draw()
    c.drawImage(player_image,
        0,
        0,
        player_image.width/4,
        player_image.height,
        canvas.width/2 - player_image.width/2,
        canvas.height/2 - player_image.height/2,
        player_image.width/4,
        player_image.height
    )
}
// img.onload("heyyyyy  ")
animate()

window.addEventListener('keydown', (e)=>{
    switch(e.key){
        case "w":
            console.log("w")
            keys.w.pressed = true
            break
        case "a":
            console.log("a")
            keys.a.pressed = true
            break
        case "s":
            console.log("s")
            keys.s.pressed = true
            break
        case "d":
            console.log("d")
            keys.d.pressed = true
            break
    }
})