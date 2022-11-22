import * as PIXI from 'pixi.js';
// @ts-ignore
import Player from './Player.ts';

export default class Game {
  background: number;
  app: PIXI.Application;
  player: Player;

  constructor(windowWidth: number, windowHeight: number) {
    this.app = new PIXI.Application({
      width: windowWidth,
      height: windowHeight,
      backgroundColor: 0x073d04,
    });

    this.player = new Player(100, 100, 50, 50);

    // Add it to the stage to render
    this.app.stage.addChild(this.player);

    this.app.ticker.add((delta) => {
      this.update(delta);
    });
  }

  run(): void {
    this.app.start();
  }

  update(delta: number): void {
    this.player.update(delta);
  }

  getView(): PIXI.ICanvas {
    return this.app.view;
  }

  getPIXIApp(): PIXI.Application {
    return this.app;
  }

  onKeyUp(key): void {
    this.player.onMoveInput(key);
  }

  onKeyDown(key): void {
    this.player.onMoveReset();
  }
}