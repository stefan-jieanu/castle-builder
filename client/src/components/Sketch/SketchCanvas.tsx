import { memo, useEffect, useRef, useCallback } from 'react'
import LlySketch from '../../llysketch/main'

// Use memo to save component in memory
const SketchCanvas = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let app: LlySketch;

  const handleResize = useCallback((e: UIEvent) => {
    app.onResize();
  }, []);

  useEffect(() => {
    app = LlySketch.create(canvasRef.current!);
    app.start()
    window.addEventListener('resize', handleResize, false);

    return() => {
      app.stop()
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <canvas className='absolute' ref={canvasRef}></canvas>
  )
})

export default SketchCanvas