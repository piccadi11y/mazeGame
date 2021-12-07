namespace MG {

    export class Engine {


        private _canvas: HTMLCanvasElement;

        private FRAME_TIME: number = 0;
        private LAST_FRAME: number = 0;


        public constructor (canvasID?: string) {
            window.onresize = ()=>this.resize();
            document.addEventListener('contentAdded', e => this.resize());      // so that when header/footer are loaded in canvas is resized
            this._canvas = Utilities.initialise(canvasID);
        }


        public Start (): void {
            TextureManager.load();
            InputHandler.initialise(this._canvas);
            LevelManager.initialise(100);
            

            // let player: Player = new Player('player', [Assets.Textures.defaultPlayerTexture], 50);
            let player: Player = new Player('player', Assets.Textures.playerFrames, 50);
            player.enableCollisionFromSprite();
            player.createPlayerCamera(this._canvas.width, this._canvas.height);
            player.enableAnimations(2000, -1);

            // temp, while testing everything
            LevelManager.load(Assets.Levels.testLevels);

            LevelManager.bDrawDebugs = Assets.GameOptions.bDrawDebugs;
            if (LevelManager.bDrawDebugs) TextureManager.addTexture(new Texture('collisionDebug', 1, 1, Colour.red()));

            // ui setup
            let tl: UserInterfaceLayer = new UserInterfaceLayer('performanceMetrics');
            UserInterfaceManager.addLayer(tl);
            let tlbl: Label = new Label('lblFrameData', 80, 15);
            tlbl.pos(20, 20);
            tlbl.colour = 'pink';
            tl.addElement(tlbl);
            tlbl = new Label('lblWorldData', 55, 15);
            tlbl.pos(20, 40);
            tlbl.colour = 'pink';
            tl.addElement(tlbl);
            tlbl = new Label('lblPositionData', 30, 15);
            tlbl.pos(20, 60);
            tlbl.colour = 'pink';
            tl.addElement(tlbl);
            tlbl = new Label('lblMousePosition', 50, 15);
            tlbl.pos(20, 80);
            tlbl.colour = 'pink';
            tl.addElement(tlbl);
            let tbtn: Button = new Button('btnTest', 200, 200);
            tbtn.pos(20, 100);
            tbtn.setTextures([Colour.white(), Colour.red(), Colour.blue()], ['', Assets.Textures.defaultPlayerTexture['name'], '']);
            tl.addElement(tbtn);

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
            (UserInterfaceManager.getLayerByName('performanceMetrics').getElementByName('lblFrameData') as Label).value = `${this.FRAME_TIME}ms | FPS: ${fps}`;
            (UserInterfaceManager.getLayerByName('performanceMetrics').getElementByName('lblWorldData') as Label).value = LevelManager.player.currentLevel?LevelManager.player.currentLevel.name:'the void';

            let relPosX, relPosY: number;
            if (LevelManager.player.currentLevel) {
                relPosX = LevelManager.player.position.x < LevelManager.currentLevel.centre.x ? -1 : 1;
                relPosY = LevelManager.player.position.y < LevelManager.currentLevel.centre.y ? -1 : 1;
            }
            (UserInterfaceManager.getLayerByName('performanceMetrics').getElementByName('lblPositionData') as Label).value = `${relPosX}, ${relPosY}`;
            (UserInterfaceManager.getLayerByName('performanceMetrics').getElementByName('lblMousePosition') as Label).value = `${InputHandler.mousePosition.x}, ${InputHandler.mousePosition.y}`;

            UserInterfaceManager.update(this.FRAME_TIME/1000);
            UserInterfaceManager.render();


            this.LAST_FRAME = performance.now();
            LevelManager.FRAME++;
            requestAnimationFrame(()=>this.mainLoop());
        }

        private resize (): void {
            if (this._canvas === undefined) return;

            this._canvas.width = this._canvas.clientWidth;
            this._canvas.height = this._canvas.clientHeight;

            if (LevelManager.camera) LevelManager.cameraObject.cameraComponent.handleResize(this._canvas.width, this._canvas.height);
            UserInterfaceManager.resize(this._canvas.width, this._canvas.height);
        }
    }
}