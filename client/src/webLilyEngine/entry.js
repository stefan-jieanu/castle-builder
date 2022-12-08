import WebLily from './WebLily.ts';

function createLilySketch(canvasRef) {
    // Remove previous canvas if it exists
    document.getElementById("sketch-canvas").innerHTML = "";

    let lily = new WebLily(canvasRef.current);
}

export default createLilySketch;