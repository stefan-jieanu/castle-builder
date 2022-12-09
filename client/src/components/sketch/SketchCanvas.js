import React from 'react'
// import createLilySketch from '../../webLilyEngine/entry';
import WebLily from 'weblily';

const SketchCanvas = React.memo(props => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    console.log('Sketch canvas component mounted');

    // createLilySketch(canvasRef);
    let app = WebLily.create(canvasRef.current);

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