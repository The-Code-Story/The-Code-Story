class Boundary {
  static width = 72;
  static height = 72;
  constructor({ position }) {
    (this.position = position), (this.width = 72), (this.height = 72);
  }

    draw(){
        c.fillStyle = "rgba(0,0,255,0)"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class Sprite {
  constructor({ position, velocity, image, frames = { max: 1 }, sprites }) {
    this.position = position;
    this.velocity = velocity;
    this.frames = { ...frames, val: 0, elapsed: 0 };
    this.image = image;
    this.frames.max = frames.max;
    this.image.onload = () => {
      this.width = this.image.width / this.frames.max;
      this.height = this.image.height;
    };
    this.moving = false;
    this.sprites = sprites;
  }

  draw() {
    // console.log(this.position.y)
    // c.drawImage(this.image, this.position.x, this.position.y)
    // console.log(this.image.width + this.frames.ma    x)
    // console.log(this.image.width/ this.frames.max)
    c.drawImage(
      this.image,
      this.frames.val * this.width,
      0,
      this.image.width / this.frames.max,
      this.image.height,
      this.position.x,
      this.position.y,
      this.image.width / this.frames.max,
      this.image.height
    );

    if (this.moving) {
      if (this.frames.max > 1) {
        this.frames.elapsed++;
      }
      if (this.frames.elapsed % 10 === 0) {
        if (this.frames.val < this.frames.max - 1) this.frames.val++;
        else this.frames.val = 0;
      }
    }
  }
}
