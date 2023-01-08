import { 
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh
} from 'three';

export default class LlySketch {
  public static instance: LlySketch | null;
  
  private _canvas: HTMLCanvasElement;
  private _scene: Scene;
  private _camera: PerspectiveCamera;
  private _renderer: WebGLRenderer;
  private _cube: Mesh;

  public static create(canvas: HTMLCanvasElement): LlySketch {
    return new LlySketch(canvas);
  }

  public constructor(canvas: HTMLCanvasElement) {
    if (LlySketch.instance) throw new Error('[Lly] multiple sketch instances!');
    LlySketch.instance = this;
    this._canvas = canvas;

    this._scene = new Scene();
    this._camera = new PerspectiveCamera(75, this._canvas.width / this._canvas.height, 0.1, 1000);
    this._renderer = new WebGLRenderer({canvas: this._canvas, alpha: true});
    this._renderer.setSize(this._canvas.width, this._canvas.height);

    this.resize();

    const geometry = new BoxGeometry( 1, 1, 1 );
    const material = new MeshBasicMaterial( { color: 0x00aacc } );
    this._cube = new Mesh( geometry, material );
    this._scene.add(this._cube);

    this._camera.position.z = 5;
  }

  public start(): void {
    this.loop();
  }

  public loop(): void {
    requestAnimationFrame(this.loop.bind(this));
    this._renderer.render(this._scene, this._camera);
    this._cube.rotation.x += 0.01;
    this._cube.rotation.y += 0.02;
  }

  public stop(): void {
    LlySketch.instance = null;
  }

  public onResize(): void {
    this.resize();
  }

  private resize(): void {
    // Resize canvas in DOM
    this._canvas.width = window.innerWidth;
    this._canvas.height = window.innerHeight - 65;

    // Resize renderer
    this._camera.aspect = this._canvas.width / this._canvas.height;
    this._renderer.setSize(this._canvas.width, this._canvas.height);
  }
}
