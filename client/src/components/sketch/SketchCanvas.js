import React from 'react';
import { memo, useEffect, useRef, useCallback } from 'react';
import WebLily from 'weblily';

const SketchCanvas = memo(props => {
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log('Sketch canvas component mounted');

    // createLilySketch(canvasRef);
    const app = WebLily.create(canvasRef.current);
    app.start();

    const canvasElem = canvasRef.current;

    window.addEventListener('resize', app.resizeCallback.bind(app));
    canvasElem.addEventListener('mousedown', app.mouseDownCallback.bind(app));


    return() => {
      // stop engine
      console.log('Sketch canvas component unmounted');
      app.stop();
    }
  }, []);
  
  return (
    <div id='canvas-wrapper'>
      <canvas
        id='sketch-canvas'
        ref={canvasRef}>
      </canvas>
    </div>
  )
})

export default SketchCanvas;