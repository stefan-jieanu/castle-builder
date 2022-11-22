import * as React from 'react';
import { createGame } from '../game/GameEntry';
import Controls from './Controls';
import { useSelector, useDispatch } from 'react-redux';
import { updateConf } from '../store/castleConfSlice'; 
import Game from '../game/Game.ts';


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
    <>
      <div id="game-canvas" ref={mountRef}></div>
      <GameUpdater /> 
    </>
  );
});

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export const GameUpdater = () => {
  const dispatch = useDispatch();
  let castleConf = {...useSelector((state) => state.castleConf)};

  function setColorInUI() {
    castleConf.color = 'lalapla';
    dispatch(updateConf(castleConf));
  }

  React.useEffect(() => {
    // Wait 1 sec to make sure the game instance is loaded
    delay(1000).then(() => {
      Game.instance.testSend = setColorInUI;
    })
  }, []);

  return (
    <></>
  );
}

export default GameComponent;  