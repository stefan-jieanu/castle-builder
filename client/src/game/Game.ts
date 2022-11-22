import * as PIXI from 'pixi.js';
// @ts-ignore
import Player from './Player.ts';

import { useSelector, useDispatch } from 'react-redux';

export default class Game {
  static instance: Game;
  background: number;
  app: PIXI.Application;
  player: Player;

  test: any;
  testSend: () => void;

  constructor(windowWidth: number, windowHeight: number) {
    Game.instance = this;

    this.app = new PIXI.Application({
      width: windowWidth,
      height: windowHeight,
      backgroundColor: 0x46af23,
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

  onKeyDown(key): void {
    if (key.key === 'f') {
      console.log(this.test);
    }

    if (key.key === 'g') {
      Game.instance.testSend();
    }
    this.player.onMoveInput(key);
  }

  onKeyUp(key): void {
    this.player.onMoveReset();
  }
}