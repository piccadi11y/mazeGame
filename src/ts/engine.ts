namespace MG {

    export class Engine {

        private _canvas: HTMLCanvasElement;
        private _testObject: oObject;
        private _camera: oObject;
        private _centreObject: oObject;

        private FRAME_TIME: number = 0;
        private LAST_FRAME: number = 0;

        public constructor (canvasID?: string) {
            window.onresize = ()=>this.Resize();
            this._canvas = Utilities.Initialise(canvasID);
            this.Resize();
        }


        public Start (): void {

            InputHandler.Initialise();
            TextureManager.addTexture(new Texture('testTex', 10, 10, Colour.blue()));
            TextureManager.addTexture(new Texture('testTexCentre', 1, 1, Colour.green()));
            let texTemp = TextureManager.getTexture('testTex');
            texTemp.addLayer([new Vector2(9), new Vector2(3,5)], Colour.red());
            texTemp.addLayer([new Vector2(4), new Vector2(6,9)], Colour.white());
            texTemp = undefined;
            TextureManager.releaseTexture('testTex');
            this._testObject = new oObject(1, 'testObject');
            this._testObject.addComponent(new SpriteComponent('testSprite', 'testTex', 200))
            this._testObject.position = new Vector2(500, 300);
            this._centreObject = new oObject(2, 'centreObject');
            this._centreObject.addComponent(new SpriteComponent('centreSprite', 'testTexCentre', 50));

            this._camera = new oObject(0, 'camera')
            let cc: CameraComponent = new CameraComponent('cameraComponent', this._canvas.width, this._canvas.height)
            this._camera.addComponent(cc);
            cc.setTarget(this._testObject);



            this.MainLoop();
        }


        private MainLoop (): void {
            this.FRAME_TIME = (performance.now() - this.LAST_FRAME) / 1000;

            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);


            // obviously not production ready movement logic, but good enough for testing
            let xDir = (() => {
                let aR = InputHandler.getKey(Keys.ARROW_RIGHT).state === State.PRESSED? 1 : 0;
                let aL = InputHandler.getKey(Keys.ARROW_LEFT).state === State.PRESSED? 1 : 0;
                return aR - aL;
            })()
            let yDir = (() => {
                let aU = InputHandler.getKey(Keys.ARROW_UP).state === State.PRESSED? 1 : 0;
                let aD = InputHandler.getKey(Keys.ARROW_DOWN).state === State.PRESSED? 1 : 0;
                return aD - aU;
            })()
            let velX = xDir * 50 * this.FRAME_TIME;
            let velY = yDir * 50 * this.FRAME_TIME;

            this._testObject.position.x += velX;
            this._testObject.position.y += velY;

            this._testObject.update(this.FRAME_TIME);
            this._centreObject.update(this.FRAME_TIME);
            this._camera.update(this.FRAME_TIME);

            this._testObject.render((this._camera.getComponent('cameraComponent') as CameraComponent).camera);
            this._centreObject.render((this._camera.getComponent('cameraComponent') as CameraComponent).camera);

            let fps = Math.round(1 / this.FRAME_TIME);
            ctx.fillStyle = 'red';
            ctx.fillText(`${this.FRAME_TIME}s | FPS: ${fps}`, 20, 20);


            this.LAST_FRAME = performance.now();
            requestAnimationFrame(()=>this.MainLoop());
        }

        private Resize (): void {
            if (this._canvas === undefined) return;

            this._canvas.width = this._canvas.clientWidth;
            this._canvas.height = this._canvas.clientHeight;

            if (this._camera) (this._camera.getComponent('cameraComponent') as CameraComponent).handleResize(this._canvas.width, this._canvas.height);

        }
    }
}