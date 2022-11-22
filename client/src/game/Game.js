import * as PIXI from 'pixi.js';
import Player from './Player';

export const game = (mountRef) => {
  const app = new PIXI.Application({
    width: 1152,
    height: 650,
    backgroundColor: 0x073d04,
  });

  // Remove previous canvas if it exists, helps on dev
  document.getElementById("game-canvas").innerHTML = "";

  // On first render add app to DOM
  mountRef.current.appendChild(app.view);
  // Start the PixiJS app
  app.start();

  let player = new Player();

  document.addEventListener('keydown', (key) => {
    player.onMoveInput(key);
  });

  document.addEventListener('keyup', (key) => {
    player.onMoveReset(key);
  });

  // Add it to the stage to render
  app.stage.addChild(player);

  app.ticker.add((delta) => {
    player.update(delta);
  });

   return app;
}
