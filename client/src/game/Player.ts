import * as PIXI from 'pixi.js';

export default class Player extends PIXI.Graphics {
  moveSpeed: number;
  moveVec: {x: number, y: number};

  constructor(x: number, y: number, w: number, h: number) {
    super();
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
    if (key.key === 'w') {
      this.moveVec.y = -this.moveSpeed;
    }
    if (key.key === 's') {
      this.moveVec.y = this.moveSpeed;
    }
    if (key.key === 'a') {
      this.moveVec.x = -this.moveSpeed;
    }
    if (key.key === 'd') {
      this.moveVec.x = this.moveSpeed;
    }
  }

  onMoveReset() {
    this.moveVec = {
      x: 0,
      y: 0
    }
  }
}