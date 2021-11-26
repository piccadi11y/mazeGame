namespace MG {

    export class Engine {


        private _canvas: HTMLCanvasElement;

        private FRAME_TIME: number = 0;
        private LAST_FRAME: number = 0;

        public constructor (canvasID?: string) {
            window.onresize = ()=>this.resize();
            document.addEventListener('contentAdded', e => this.resize());      // so when header/footer are loaded in canvas is resized
            this._canvas = Utilities.initialise(canvasID);
        }


        public Start (): void {
            TextureManager.load();
            InputHandler.initialise();
            LevelManager.initialise(100);
            

            // let player: Player = new Player('player', [Assets.Textures.defaultPlayerTexture], 50);
            let player: Player = new Player('player', Assets.Textures.playerFrames, 50);
            player.enableCollisionFromSprite();
            player.createPlayerCamera(this._canvas.width, this._canvas.height);
            player.enableAnimations(2000, -1);

            // LevelManager.currentLevel = Level.load(Assets.Levels.testLevel);
            LevelManager.loadLevel(Assets.Levels.testLevel2);
            LevelManager.loadLevel(Assets.Levels.testLevel3);
            LevelManager.loadLevel(Assets.Levels.testLevel);

            LevelManager.bDrawDebugs = Assets.GameOptions.bDrawDebugs;
            if (LevelManager.bDrawDebugs) TextureManager.addTexture(new Texture('collisionDebug', 1, 1, Colour.red()));

            LevelManager.spawnPlayer();


            this.resize();
            this.mainLoop();
        }


        private mainLoop (): void {
            this.FRAME_TIME = performance.now() - this.LAST_FRAME;

            // clear
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);

            LevelManager.update(this.FRAME_TIME / 1000);
            LevelManager.render();

            // ui bits
            let fps = Math.round(1000 / this.FRAME_TIME);
            ctx.fillStyle = 'pink';
            ctx.fillText(`${this.FRAME_TIME}ms | FPS: ${fps}`, 20, 20);
            ctx.fillText(LevelManager.player.currentLevel?LevelManager.player.currentLevel.name:'the void', 20, 40);

            let relPosX, relPosY: number;
            if (LevelManager.player.currentLevel) {
                relPosX = LevelManager.player.position.x < LevelManager.currentLevel.centre.x ? -1 : 1;
                relPosY = LevelManager.player.position.y < LevelManager.currentLevel.centre.y ? -1 : 1;
            }
            ctx.fillText(`${relPosX}, ${relPosY}`, 20, 60);


            this.LAST_FRAME = performance.now();
            LevelManager.FRAME++;
            requestAnimationFrame(()=>this.mainLoop());
        }

        private resize (): void {
            if (this._canvas === undefined) return;

            this._canvas.width = this._canvas.clientWidth;
            this._canvas.height = this._canvas.clientHeight;

            if (LevelManager.camera) LevelManager.cameraObject.cameraComponent.handleResize(this._canvas.width, this._canvas.height);
        }
    }
}