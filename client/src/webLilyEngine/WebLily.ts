class WebLily {
  canvas: HTMLCanvasElement;
  gl: any;

  constructor(canvasRef: HTMLCanvasElement) {
    this.canvas = canvasRef;

    // Initialize the GL context
     this.gl = this.canvas.getContext("webgl");

    // Only continue if WebGL is available and working
    if (this.gl === null) {
      alert(
        "Unable to initialize WebGL. Your browser or machine may not support it."
      );
      return;
    }

    // Clear color
    this.gl.clearColor(1, 0.0, 0, 0);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'q')
        this.drawTriangle();
      if (e.key === 'w') {
        // Clear color
        this.gl.clearColor(0, 0.9, 0, 0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
      }
      if (e.key === 'e') {
        // Clear color
        this.gl.clearColor(0, 0.9, 1, 0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
      }
    });
  }

  drawTriangle() : void {
    // A user-defined function to create and compile shaders
    const initShader = (type: 'VERTEX_SHADER' | 'FRAGMENT_SHADER', source: string) => {
      const shader = this.gl.createShader(this.gl[type]);

      if (!shader) {
        throw new Error('Unable to create a shader.');
      }

      this.gl.shaderSource(shader, source);

      this.gl.compileShader(shader);

      if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
        throw new Error(`An error occurred compiling the shaders: ${this.gl.getShaderInfoLog(shader)}`);
      }

      return shader;
    }

    // Vertex shader
    const vertexShader = initShader('VERTEX_SHADER', `
      attribute vec4 a_position;

      void main() {
        gl_Position = a_position;
      }
    `);

    // Fragment shader
    const fragmentShader = initShader('FRAGMENT_SHADER', `
      void main() {
        gl_FragColor = vec4(0, 0, 0, 1);
      }
    `);

    // WebGL program
    const program = this.gl.createProgram();

    if (!program) {
      throw new Error('Unable to create the program.');
    }

    this.gl.attachShader(program, vertexShader);
    this.gl.attachShader(program, fragmentShader);

    this.gl.linkProgram(program);

    if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
      throw new Error(`Unable to link the shaders: ${this.gl.getProgramInfoLog(program)}`);
    }

    this.gl.useProgram(program);

    // Vertext buffer
    const positionBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);

    const positions = [
      0, 1,
      0.866, -0.5,
      -0.866, -0.5,
    ];
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(positions), this.gl.STATIC_DRAW);

    const index = this.gl.getAttribLocation(program, 'a_position');
    const size = 2;
    const type = this.gl.FLOAT;
    const normalized = false;
    const stride = 0;
    const offset = 0;
    this.gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
    this.gl.enableVertexAttribArray(index);

    // Draw the scene
    this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);
  }
}

export default WebLily;