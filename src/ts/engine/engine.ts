namespace MG {

    export class Engine {

        private _canvas: HTMLCanvasElement;

        private FRAME_TIME: number = 0;
        private LAST_FRAME: number = 0;

        public constructor (canvasID?: string) {
            window.onresize = ()=>this.resize();
            document.addEventListener('contentAdded', e => this.resize());      // so when header/footer are loaded in canvas is resized
            this._canvas = Utilities.initialise(canvasID);
            
            // TODO // ensure onload or something the canvas is resized so it doesn't end up looking squished as it does now. needs investigation
        }


        public Start (): void {
            TextureManager.load();
            InputHandler.initialise();
            LevelManager.initialise(100);
            
            TextureManager.addTexture(new Texture('collisionDebug', 1, 1, Colour.red()));
            let playerObject: PlayerObject = new PlayerObject('player');
            playerObject.addComponent(new SpriteComponent('testPlayerSprite', Assets.Textures.defaultPlayerTexture['name'], 200))
            playerObject.position = new Vector2(-300, 0);
            playerObject.enableCollisionFromSprite('testPlayerSprite', false);

            let camera: CameraObject = new CameraObject('playerCamera', this._canvas.width, this._canvas.height);
            camera.cameraComponent.setTarget(playerObject);

            // LevelManager.currentLevel = Level.load(Assets.Levels.testLevel);
            LevelManager.loadLevel(Assets.Levels.testLevel2);
            LevelManager.loadLevel(Assets.Levels.testLevel3);
            LevelManager.loadLevel(Assets.Levels.testLevel);

            this.resize();
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
            ctx.fillText(LevelManager.player.currentLevel?LevelManager.player.currentLevel.name:'the void', 20, 40);

            let relPosX, relPosY: number;
            if (LevelManager.player.currentLevel) {
                relPosX = LevelManager.player.position.x < LevelManager.currentLevel.centre.x ? -1 : 1;
                relPosY = LevelManager.player.position.y < LevelManager.currentLevel.centre.y ? -1 : 1;
            }
            ctx.fillText(`${relPosX}, ${relPosY}`, 20, 60);


            this.LAST_FRAME = performance.now();
            requestAnimationFrame(()=>this.mainLoop());
        }

        private resize (): void {
            if (this._canvas === undefined) return;

            this._canvas.width = this._canvas.clientWidth;
            this._canvas.height = this._canvas.clientHeight;

            if (LevelManager.camera) LevelManager.camera.cameraComponent.handleResize(this._canvas.width, this._canvas.height);
        }
    }
}