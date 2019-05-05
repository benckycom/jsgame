export default class Paddle {
  constructor(gameiWidth, gameHeight) {
    this.width = 150;
    this.heigth = 20;
    this.position = {
      x: gameiWidth / 2 - this.width / 2,
      y: gameHeight - this.heigth - 10
    };

    this.maxSpeed = 5;
    this.speed = 0;
  }
  draw(ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.heigth);
  }

  // update(delatTime) {
  //   if (!delatTime) return;
  //   this.position.x += 5 / delatTime;
  // }

  update(delatTime) {
    if (!delatTime) return;
    this.position.x += this.speed;
    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.width > 800) this.position.x = 800 - this.width;
  }
  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRigth() {
    this.speed = this.maxSpeed;
  }
}
