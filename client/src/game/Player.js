import * as PIXI from 'pixi.js';

export default class Player extends PIXI.Graphics {
  constructor(x, y, w, h) {
    super(x, y, w, h);
    this.beginFill(0xff0000);
    this.drawRect(100, 100, 50, 50);

    this.moveSpeed = 5;
    this.moveVec = {
      x: 0,
      y: 0
    }
  }

  update(delta) {
    this.position.x += this.moveVec.x * delta;
    this.position.y += this.moveVec.y * delta;
  }

  onMoveInput(key) {
    if (key.key == 'w') {
      this.moveVec.y = -this.moveSpeed;
    }
    if (key.key == 's') {
      this.moveVec.y = this.moveSpeed;
    }
    if (key.key == 'a') {
      this.moveVec.x = -this.moveSpeed;
    }
    if (key.key == 'd') {
      this.moveVec.x = this.moveSpeed;
    }
  }

  onMoveReset(key) {
    this.moveVec = {
      x: 0,
      y: 0
    }
  }
}