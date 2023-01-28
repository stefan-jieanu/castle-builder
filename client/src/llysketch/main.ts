import { 
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  Color,
} from 'three';
import { OrbitControls } from './OrbitControls';

export default class LlySketch {
  public static instance: LlySketch | null;
  
  private _canvas: HTMLCanvasElement;
  private _scene: Scene;
  private _camera: PerspectiveCamera;
  private _renderer: WebGLRenderer;
  private _cube: Mesh;
  private _controls: OrbitControls;

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
    this._scene.background = new Color(0x662277);
    this._controls = new OrbitControls(this._camera, this._renderer.domElement);

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
    this._controls.update();
  }

  public stop(): void {
    this._renderer.dispose();
    LlySketch.instance = null;
  }

  public onResize(e: UIEvent): void {
    this.resize();
  }

  public onKeyDown(e: KeyboardEvent): void {

  }

  public onKeyUp(e: KeyboardEvent): void {

  }

  public onMouseMove(e: MouseEvent): void {

  }

  public onMouseDown(e: MouseEvent): void {

  }

  public onMouseUp(e: MouseEvent): void {

  }

  public onClick(e: MouseEvent): void {

  }

  public onDoubleClick(e: MouseEvent): void {

  }

  private resize(): void {
    // Resize canvas in DOM
    this._canvas.width = window.innerWidth;
    this._canvas.height = window.innerHeight;
    console.log('resize');

    // Resize renderer
    this._camera.aspect = this._canvas.width / this._canvas.height;
    this._camera.updateProjectionMatrix();
    this._renderer.setSize(this._canvas.width, this._canvas.height);
  }
}
