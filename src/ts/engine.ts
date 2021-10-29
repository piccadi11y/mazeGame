namespace MG {

    export class Engine {

        private _canvas: HTMLCanvasElement;
        private _playerObject: PlayerObject;
        private _camera: oObject;

        private _testLevel: Level;

        private FRAME_TIME: number = 0;
        private LAST_FRAME: number = 0;

        public constructor (canvasID?: string) {
            window.onresize = ()=>this.Resize();
            this._canvas = Utilities.Initialise(canvasID);

            // TODO // ensure onload or something the canvas is resized so it doesn't end up looking squished as it does now. needs investigation
            this.Resize();
        }


        public Start (): void {

            InputHandler.Initialise();
            // TODO // eventually move all of this to extended functions outside of the engine (for creating the game without too much hard-coding in the engine)
            TextureManager.addTexture(new Texture('testTex', 10, 10, Colour.blue()));
            let texTemp = TextureManager.getTexture('testTex');
            texTemp.addLayer([new Vector2(9), new Vector2(3,5)], Colour.red());
            texTemp.addLayer([new Vector2(4), new Vector2(6,9)], Colour.white());
            texTemp = undefined;
            TextureManager.releaseTexture('testTex');
            this._playerObject = new PlayerObject(0, 'testObject');
            this._playerObject.addComponent(new SpriteComponent('testPlayerSprite', 'testTex', 200))
            this._playerObject.position = new Vector2(-300, 0);
            this._playerObject.enableCollisionFromSprite('testPlayerSprite', false);

            this._camera = new oObject(1, 'camera')
            let cc: CameraComponent = new CameraComponent('cameraComponent', this._canvas.width, this._canvas.height)
            this._camera.addComponent(cc);
            cc.setTarget(this._playerObject);

            this._testLevel = new Level('testLevel', 1000, 1000, 50, Colour.white());
            this._testLevel.addCamera(this._camera);
            this._testLevel.setPlayer(this._playerObject);
            this._testLevel.load();

            TextureManager.addTexture(new Texture('collisionDebug', 1, 1, Colour.red()));

            this._playerObject.currentLevel = this._testLevel;


            this.mainLoop();
        }


        private mainLoop (): void {
            this.FRAME_TIME = (performance.now() - this.LAST_FRAME) / 1000;

            // clear
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);

            this._testLevel.update(this.FRAME_TIME);
            this._testLevel.render();

            // ui bits
            let fps = Math.round(1 / this.FRAME_TIME);
            ctx.fillStyle = 'red';
            ctx.fillText(`${this.FRAME_TIME}s | FPS: ${fps}`, 20, 20);


            this.LAST_FRAME = performance.now();
            requestAnimationFrame(()=>this.mainLoop());
        }

        private Resize (): void {
            if (this._canvas === undefined) return;

            this._canvas.width = this._canvas.clientWidth;
            this._canvas.height = this._canvas.clientHeight;

            if (this._camera) (this._camera.getComponent('cameraComponent') as CameraComponent).handleResize(this._canvas.width, this._canvas.height);

        }
    }
}