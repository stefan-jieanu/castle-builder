import Game from './Game.ts';

export const createGame = (mountRef, windowW, windowH) => {
  // Remove previous canvas if it exists
  document.getElementById("game-canvas").innerHTML = "";

  const game = new Game(windowW, windowH);

  // Add app view(canvas) to DOM
  mountRef.current.appendChild(game.getView());

  // Start the game app
  game.run();


  document.addEventListener('keydown', (key) => {
    game.onKeyDown(key);
  });

  document.addEventListener('keyup', (key) => {
    game.onKeyUp(key);
  });

   return game.getPIXIApp();
}