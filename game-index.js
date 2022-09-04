const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
console.log(gsap);

// console.log(collisions)
const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 70) {
  collisionsMap.push(collisions.slice(i, 70 + i));
}

const ChallengeZonesMap = [];
for (let i = 0; i < ChallengeZonesData.length; i += 70) {
  ChallengeZonesMap.push(ChallengeZonesData.slice(i, 70 + i));
}
console.log(ChallengeZonesMap);

const offset = {
  x: -720,
  y: -1590,
};

const boundaries = [];

collisionsMap.forEach((row, i) => {
  row.forEach((Symbol, j) => {
    if (Symbol === 856)
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y - 30,
          },
        })
      );
  });
});

const ChallengeZones = [];

ChallengeZonesMap.forEach((row, i) => {
  row.forEach((Symbol, j) => {
    if (Symbol === 856)
      ChallengeZones.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y - 30,
          },
        })
      );
  });
});

console.log(ChallengeZones);

// console.log("Challenge Zones"+challenge_zones.length)

canvas.width = 1520;
canvas.height = 728;

const img = new Image()
img.src = "./img/map_with_npc3.png"

// const demon_img = new Image();
// demon_img.src = "./img/druid.gif"
// console.log(img)
const player_down_image = new Image();
player_down_image.src = "./img/playerDown.png";

const player_up_image = new Image();
player_up_image.src = "./img/playerUp.png";

const player_left_image = new Image();
player_left_image.src = "./img/playerLeft.png";

const player_right_image = new Image();
player_right_image.src = "./img/playerRight.png";

const player = new Sprite({
  position: {
    x: canvas.width / 2 - 192 / 4 / 2,
    y: canvas.height / 2 - 68 / 2,
  },
  image: player_up_image,
  frames: {
    max: 4,
  },
  sprites: {
    up: player_up_image,
    right: player_right_image,
    left: player_left_image,
    down: player_down_image,
  },
});

// const demon = new Sprite({
//     position: {
//         x: canvas.width /2 - 1386/6 /2,
//         y: canvas.height / 2 - 190 /2
//     },
//     image: demon_img,
//     frames: {
//         max: 1
//     },
//     sprites:{
//         up: demon_img,
//     }
// })

const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: img,
});

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

// const testBoundary = new Boundary({
//     position: {
//         x: 400,
//         y: 400
//     }
// })

const movables = [background, ...boundaries, ...ChallengeZones];

function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y &&
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height
  );
}

const challenge = {
  initiated: false,
};

function animate() {
  const animationId = window.requestAnimationFrame(animate);
  // console.log(animationId)
  background.draw();
  boundaries.forEach((boundary) => {
    boundary.draw();
  });
  ChallengeZones.forEach((ChallengeZone) => {
    ChallengeZone.draw();
  });
  player.draw();
  // demon.draw()

  let moving = true;
  player.moving = false;

  if (challenge.initiated) return;

  if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
    for (let i = 0; i < ChallengeZones.length; i++) {
      const ChallengeZone = ChallengeZones[i];
      const overlappingArea =
        (Math.min(
          player.position.x + player.width,
          ChallengeZone.position.x + ChallengeZone.width
        ) -
          Math.max(player.position.x, ChallengeZone.position.x)) *
        (Math.min(
          player.position.y + player.height,
          ChallengeZone.position.y + ChallengeZone.height
        ) -
          Math.max(player.position.y, ChallengeZone.position.y));
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: ChallengeZone,
        }) &&
        overlappingArea > (player.width * player.height) / 2 &&
        Math.random() < 0.1
      ) {
        if (localStorage.getItem("isClaimed")) {
          window.alert("You've already completed the game");
          window.location.reload();
        }
        console.log("Entered the challenge area");
        window.cancelAnimationFrame(animationId);
        challenge.initiated = true;
        gsap.to("#overlapping_div", {
          opacity: 1,

          yoyo: true,
          duration: 0.4,
          onComplete() {
            gsap.to("#overlapping_div", {
              opacity: 1,
              duration: 0.4,
            });
            animateChallenge();
          },
        });

        // break
      }
    }
  }

  if (keys.w.pressed && lastKey === "w") {
    player.image = player.sprites.up;
    player.moving = true;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 6,
            },
          },
        })
      ) {
        console.log("colliding");
        moving = false;
        break;
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y += 6;
      });

    // background.position.y = background.position.y + 6
    // testBoundary.position.y = background.position.y + 6
  } else if (keys.a.pressed && lastKey == "a") {
    player.moving = true;
    player.image = player.sprites.left;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x + 6,
              y: boundary.position.y,
            },
          },
        })
      ) {
        console.log("colliding");
        moving = false;
        break;
      }
    }
    if (moving)
      movables.forEach((movable) => {
        movable.position.x += 6;
      });
  } else if (keys.s.pressed && lastKey == "s") {
    player.moving = true;
    player.image = player.sprites.down;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 6,
            },
          },
        })
      ) {
        console.log("colliding");
        moving = false;
        break;
      }
    }
    if (moving)
      movables.forEach((movable) => {
        movable.position.y -= 6;
      });
  } else if (keys.d.pressed && lastKey == "d") {
    player.moving = true;
    player.image = player.sprites.right;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x - 6,
              y: boundary.position.y,
            },
          },
        })
      ) {
        console.log("colliding");
        moving = false;
        break;
      }
    }
    if (moving)
      movables.forEach((movable) => {
        movable.position.x -= 6;
      });
  }
}

function animate(){
    const animationId = window.requestAnimationFrame(animate)
    // console.log(animationId)
    background.draw()
    boundaries.forEach(
        (boundary) => {
            boundary.draw()
        })
    ChallengeZones.forEach(ChallengeZone => {
        ChallengeZone.draw()
    })
    player.draw()
    // demon.draw()

    let moving = true
    player.moving = false

    if(challenge.initiated) return

    if (keys.w.pressed || keys.a.pressed ||  keys.s.pressed || keys.d.pressed){
        for( let i = 0; i < ChallengeZones.length; i++){
            const ChallengeZone = ChallengeZones[i]
            const overlappingArea = (Math.min(player.position.x + player.width, ChallengeZone.position.x + ChallengeZone.width )
             - 
             Math.max(player.position.x, ChallengeZone.position.x ))
             * 
             (Math.min(player.position.y + player.height, ChallengeZone.position.y + ChallengeZone.height) 
             - 
             Math.max(player.position.y, ChallengeZone.position.y))
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: ChallengeZone
                    }
                ) && (overlappingArea > (player.width * player.height)/2 &&
                Math.random() < 0.1)
            )  {
                if(localStorage.getItem('isClaimed'))
                {
                    window.alert("You've already completed the game")
                    window.location.reload();
            }
                console.log("Entered the challenge area")
                window.cancelAnimationFrame(animationId)
                challenge.initiated = true
                gsap.to('#overlapping_div', {
                    opacity:1,
                    yoyo: true,
                    duration: 0.4,
                    onComplete(){
                        gsap.to('#overlapping_div', {
                            opacity: 1,
                            duration: 0.4
                        })
                        animateChallenge()
                    }
                 })
                
                // break
            }
        }

    }
    

    if (keys.w.pressed && lastKey==="w"){
        player.image = player.sprites.up
        player.moving = true
        for( let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 6
                        }
                    }
                })
            )  {
                console.log("colliding")
                moving = false
                break
            }
        }

        
        if (moving)
        movables.forEach((movable) => {
            movable.position.y += 6;
        })
        
        // background.position.y = background.position.y + 6
        // testBoundary.position.y = background.position.y + 6
    }

    
    else if (keys.a.pressed && lastKey=="a"){
        player.moving = true
        player.image = player.sprites.left
        for( let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x + 6,
                            y: boundary.position.y
                        }
                    }
                })
            )  {
                console.log("colliding")
                moving = false
                break
            }
        }
        if (moving)
        movables.forEach((movable) => {
            movable.position.x += 6;
        })
    }
    else if (keys.s.pressed && lastKey=="s"){
        player.moving = true
        player.image = player.sprites.down
        for( let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 6
                        }
                    }
                })
            )  {
                console.log("colliding")
                moving = false
                break
            }
        }
        if (moving)
        movables.forEach((movable) => {
            movable.position.y -= 6;
        })
    }
    else if (keys.d.pressed && lastKey=="d"){
        player.moving = true
        player.image = player.sprites.right
        for( let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x - 6,
                            y: boundary.position.y
                        }
                    }
                })
            )  {
                console.log("colliding")
                moving = false
                break
            }
        }
        if (moving)
        movables.forEach((movable) => {
            movable.position.x -= 6;
        })
    }
}   
// img.onload("heyyyyy  ")
animate();

function animateChallenge() {
  window.requestAnimationFrame(animateChallenge);
  console.log("animation challenge ");
}

let lastKey = "";
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = true;
      lastKey = "w";
      break;
    case "a":
      keys.a.pressed = true;
      lastKey = "a";
      break;
    case "s":
      keys.s.pressed = true;
      lastKey = "s";
      break;
    case "d":
      keys.d.pressed = true;
      lastKey = "d";
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
  }
});
