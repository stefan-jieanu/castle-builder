import React from 'react'
import createLilySketch from '../../webLilyEngine/entry';

const SketchCanvas = React.memo(props => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    console.log('Sketch canvas component mounted');

    createLilySketch(canvasRef);

    return() => {
      // stop engine
      console.log('Sketch canvas component unmounted');
    }
  }, []);

  return (
    <>
      <canvas id="sketch-canvas" ref={canvasRef}></canvas>
    </>
  )
})

export default SketchCanvas;