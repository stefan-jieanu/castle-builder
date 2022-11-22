import * as React from 'react';
import { createGame } from '../game/GameEntry';


const GameComponent = React.memo(props => {

  const mountRef = React.useRef(null);

  React.useEffect(() => {
    console.log('game component mounted');
    let app = createGame(mountRef, 1150, 650);

    return () => {
      // On unload stop the application
      console.log('game component unmounted');
      app.stop();
    };
  }, []);

  return(
    <div id="game-canvas" ref={mountRef}></div>
  );
});

export default GameComponent;  