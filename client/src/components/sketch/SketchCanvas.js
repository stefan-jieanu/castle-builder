import React from 'react';
import { memo, useEffect, useRef, useCallback } from 'react';
import WebLily from 'weblily';

const SketchCanvas = memo(props => {
  const canvasRef = useRef(null);
  let appRef = useRef(null);

  const handleResize = useCallback((e) => {
    appRef.current.onResize(e);
  }, []);

  const handleKeyDown = useCallback((e) => {
    appRef.current.onKeyDown(e);
  }, []);

  const handleKeyUp = useCallback((e) => {
    appRef.current.onKeyUp(e);
  }, []);

  const handleMouseDown = useCallback((e) => {
    appRef.current.onMouseDown(e);
  }, []);
  
  const handleMouseUp = useCallback((e) => {
    appRef.current.onMouseUp(e);
  }, []);
  
  const handleMouseWheel = useCallback((e) => {
    appRef.current.onMouseScroll(e);
  }, []);

  const handleMouseMove = useCallback((e) => {
    appRef.current.onMouseMove(e);
  }, []);

  const handleContextMenu = useCallback((e) => {
    e.preventDefault();
  }, []);
  
  useEffect(() => {
    console.log('Sketch canvas component mounted');

    // createLilySketch(canvasRef);
    const app = WebLily.create(canvasRef.current);
    app.start();
    const canvasElem = canvasRef.current;

    window.addEventListener('resize', handleResize, false);
    window.addEventListener('keydown', handleKeyDown, false);
    window.addEventListener('keyup', handleKeyUp, false);
    canvasElem.addEventListener('mousedown', handleMouseDown, false);
    canvasElem.addEventListener('mouseup', handleMouseUp, false);
    canvasElem.addEventListener('wheel', handleMouseWheel, false);
    canvasElem.addEventListener('mousemove', handleMouseMove, false);
    canvasElem.addEventListener('contextmenu', handleContextMenu, false);

    appRef.current = app;

    return() => {
      // stop engine
      console.log('Sketch canvas component unmounted');
      canvasElem.removeEventListener('mousedown', handleMouseDown);
      canvasElem.removeEventListener('mouseup', handleMouseUp);
      canvasElem.removeEventListener('wheel', handleMouseWheel);
      canvasElem.removeEventListener('mousemove', handleMouseMove);
      canvasElem.removeEventListener('contextmenu', handleContextMenu);
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