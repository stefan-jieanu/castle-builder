import React from 'react'
import WebLily from 'weblily';
// import { useDispatch } from 'react-redux';
// import { create, reset } from '../../store/lilySlice';

// export default function SketchCanvas() {
//   const canvasRef = React.useRef(null);

//   React.useEffect(() => {
//     console.log('Sketch canvas component mounted');

//     const app = WebLily.create(canvasRef.current);
//     app.start();

//     return() => {
//       // stop engine
//       console.log('Sketch canvas component unmounted');
//       app.stop();
//     }
//   }, );

//   return (
//     <canvas
//       id="sketch-canvas"
//       ref={canvasRef}
//       style={{
//         width: '100%',
//         height: '100%'
//       }}
//       >
//     </canvas>
//   )
// }

const SketchCanvas = React.memo(props => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    console.log('Sketch canvas component mounted');

    // createLilySketch(canvasRef);
    const app = WebLily.create(canvasRef.current);
    app.start();

    window.addEventListener('resize', app.resizeCallback.bind(app));

    return() => {
      // stop engine
      console.log('Sketch canvas component unmounted');
      app.stop();
    }
  }, );

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