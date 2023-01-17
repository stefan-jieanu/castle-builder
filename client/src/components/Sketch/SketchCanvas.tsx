import { memo, useEffect, useRef, useCallback } from 'react'
import LlySketch from '../../llysketch/main'

// Use memo to save component in memory
const SketchCanvas = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let app: LlySketch;

  const handleResize = useCallback((e: UIEvent) => {
    app.onResize(e);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    app.onKeyDown(e);
  }, [])

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    app.onKeyUp(e);
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    app.onMouseMove(e);
  }, [])

  const handleMouseDown = useCallback((e: MouseEvent) => {
    app.onMouseDown(e);
  }, [])

  const handleMouseUp = useCallback((e: MouseEvent) => {
    app.onMouseUp(e);
  }, [])

  const handleClick = useCallback((e: MouseEvent) => {
    app.onClick(e);
  }, [])

  const handleDoubleClick = useCallback((e: MouseEvent) => {
    app.onDoubleClick(e);
  }, [])

  useEffect(() => {
    app = LlySketch.create(canvasRef.current!);
    app.start()
    window.addEventListener('resize', handleResize, false);
    window.addEventListener('keydown', handleKeyDown, false);
    window.addEventListener('keyup', handleKeyUp, false);
    window.addEventListener('mousemove', handleMouseMove, false);
    window.addEventListener('mousedown', handleMouseDown, false);
    window.addEventListener('mouseup', handleMouseUp, false);
    window.addEventListener('click', handleClick, false);
    window.addEventListener('dblclick', handleDoubleClick, false);

    return() => {
      app.stop()
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.addEventListener('mousedown', handleMouseDown, false);
      window.addEventListener('mouseup', handleMouseUp, false);
      window.addEventListener('click', handleClick, false);
      window.addEventListener('dblclick', handleDoubleClick, false);
    }
  }, []);

  return (
    <canvas className='absolute' ref={canvasRef}></canvas>
  )
})

export default SketchCanvas