import React from 'react';
import { memo, useEffect, useRef, useCallback } from 'react';
import WebLily from 'weblily';

const SketchCanvas = memo(props => {
  const canvasRef = useRef(null);
  let appRef = useRef(null);

  const handleMouseDown = useCallback((e) => {
    appRef.current.mouseDownCallback(e);
  }, []);
  
  const handleMouseUp = useCallback((e) => {
    appRef.current.mouseUpCallback(e);
  }, []);
  
  const handleMouseWheel = useCallback((e) => {
    appRef.current.mouseScrollCallback(e);
  }, []);

  const handleMouseMove = useCallback((e) => {
    appRef.current.mouseMoveCallback(e);
  }, []);

  useEffect(() => {
    console.log('Sketch canvas component mounted');

    // createLilySketch(canvasRef);
    const app = WebLily.create(canvasRef.current);
    app.start();

    const canvasElem = canvasRef.current;

    window.addEventListener('resize', app.resizeCallback.bind(app));
    canvasElem.addEventListener('mousedown', handleMouseDown, false);
    canvasElem.addEventListener('mouseup', handleMouseUp, false);
    canvasElem.addEventListener('wheel', handleMouseWheel, false);
    canvasElem.addEventListener('mousemove', handleMouseMove, false);

    appRef.current = app;

    return() => {
      // stop engine
      console.log('Sketch canvas component unmounted');
      canvasElem.removeEventListener('mousedown', handleMouseDown);
      canvasElem.removeEventListener('mouseup', handleMouseUp);
      canvasElem.removeEventListener('wheel', handleMouseWheel);
      canvasElem.removeEventListener('mousemove', handleMouseMove);
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