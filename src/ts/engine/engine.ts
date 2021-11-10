namespace MG {

    export class Engine {

        private _canvas: HTMLCanvasElement;
        // private _playerObject: PlayerObject;
        // private _camera: CameraObject;

        // private _testLevel: Level;

        private FRAME_TIME: number = 0;
        private LAST_FRAME: number = 0;

        public constructor (canvasID?: string) {
            window.onresize = ()=>this.Resize();
            this._canvas = Utilities.initialise(canvasID);

            // TODO // ensure onload or something the canvas is resized so it doesn't end up looking squished as it does now. needs investigation
        }


        public Start (): void {

            InputHandler.initialise();
            LevelManager.initialise();
            // TODO // eventually move all of this to extended functions outside of the engine (for creating the game without too much hard-coding in the engine)
            
            TextureManager.addTexture(Texture.load(Assets.Textures.defaultPlayerTexture))
            // TODO // perhaps load all textures at start; create a function in textureManager to create all textures contained in Assets.Textures so all everything else has to do is worry about referencing them but never creating them
            let playerObject: PlayerObject = new PlayerObject('player');
            playerObject.addComponent(new SpriteComponent('testPlayerSprite', Assets.Textures.defaultPlayerTexture['name'], 200))
            playerObject.position = new Vector2(-300, 0);
            playerObject.enableCollisionFromSprite('testPlayerSprite', false);


            
            let camera: CameraObject = new CameraObject('playerCamera', this._canvas.width, this._canvas.height);
            camera.cameraComponent.setTarget(playerObject);

            // LevelManager.player = playerObject;
            // LevelManager.camera = camera;

            LevelManager.currentLevel = new Level('testLevel', 1000, 1000, 50, Colour.white());

            TextureManager.addTexture(new Texture('collisionDebug', 1, 1, Colour.red()));



            this.Resize();
            this.mainLoop();
        }


        private mainLoop (): void {
            this.FRAME_TIME = (performance.now() - this.LAST_FRAME) / 1000;

            // clear
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);

            LevelManager.update(this.FRAME_TIME);
            LevelManager.render();

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

            if (LevelManager.camera) LevelManager.camera.cameraComponent.handleResize(this._canvas.width, this._canvas.height);

        }
    }
}