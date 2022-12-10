import React from 'react'
// import createLilySketch from '../../webLilyEngine/entry';
import WebLily from 'weblily';

const SketchCanvas = React.memo(props => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    console.log('Sketch canvas component mounted');

    // createLilySketch(canvasRef);
    const app = WebLily.create(canvasRef.current);
    app.start();

    return() => {
      // stop engine
      console.log('Sketch canvas component unmounted');
      app.stop();
    }
  }, []);

  return (
    <>
      <canvas
        id="sketch-canvas"
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%'
        }}>
      </canvas>
    </>
  )
})

export default SketchCanvas;