import * as React from 'react';
import { Grid, Typography} from '@mui/material';
import { game } from '../game/Game';


const GameComponent = React.memo(props => {

  const mountRef = React.useRef(null);

  React.useEffect(() => {
    let app = game(mountRef);

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