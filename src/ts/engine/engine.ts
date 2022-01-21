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
            LevelManager.initialise(1000);      // TODO // not convinced this limit does anything to help, or anything when surpassed
            

            // let player: Player = new Player('player', [Assets.Textures.defaultPlayerTexture], 50);
            let player: Player = new Player('player', Assets.Textures.playerFrames, 50);
            player.enableCollisionFromSprite();
            player.createPlayerCamera(this._canvas.width, this._canvas.height);
            player.enableAnimations(2000, -1);

            // temp, while testing everything
            LevelManager.load(Assets.Levels.testLevels);
            TileOffscreenRenderer.initialise(TextureManager.loadedTextures, LevelManager.loadedLevels[0].gridSize);

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
            let tbtn: Button = new Button('btnTest', 75, 20);
            tbtn.pos(20, 100);
            tbtn.setTextures([new Colour(119, 119, 119), new Colour(85, 85, 85), new Colour(51, 51, 51)]);
            tbtn.value = 'Respawn';
            tbtn.font = 'bold 10px consolas';
            tbtn.colour = 'white';
            tbtn.onClickFunction = () => LevelManager.spawnPlayer();
            tl.addElement(tbtn);

            let ed: UserInterfaceLayer = new UserInterfaceLayer('levelEditor');
            UserInterfaceManager.addLayer(ed);
            let edML: Label = new Label('lblLevelMouseLocation', 80, 20);
            edML.colour = 'red';
            edML.value = 'test';
            edML.font = '20px consolas'
            edML.pos(-100, -100);
            ed.addElement(edML);

            TileOffscreenRenderer.render();
            console.log(TileOffscreenRenderer.getTextureLocation(Assets.Textures.TILE_WALL_SINGLE_CORNER_INTERIOR.name));
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

            // level mouse rel position (for editor)
            // TODO // hide this away from normal gameplay, along with the rest of the debug ui I suppose
            let mouseLocLBL: Label = UserInterfaceManager.getLayerByName('levelEditor').getElementByName('lblLevelMouseLocation') as Label;
            mouseLocLBL.pos(InputHandler.mousePosition.x - mouseLocLBL.width - 5, InputHandler.mousePosition.y);
            mouseLocLBL.value = (() => {
                let currentLevel = LevelManager.player.currentLevel;
                let mouseLoc: Vector2 = InputHandler.mousePosition;
                let worldTL: Vector2 = Vector2.Zero;
                worldTL.copyFrom(LevelManager.camera.view.position);
                worldTL.x += mouseLoc.x - (currentLevel.location.x - currentLevel.width/2) - currentLevel.gridSize/2;
                worldTL.y += mouseLoc.y - (currentLevel.location.y - currentLevel.height/2) - currentLevel.gridSize/2;
                worldTL.x /= currentLevel.gridSize;
                worldTL.y /= currentLevel.gridSize;

                return worldTL.toString(true);
            })()

            UserInterfaceManager.update(this.FRAME_TIME/1000);
            UserInterfaceManager.render();

            const texLoc: Vector2 = TileOffscreenRenderer.getTextureLocation(Assets.Textures.TILE_WALL_POST.name);
            /*ctx.drawImage(
                TileOffscreenRenderer.ctx.canvas,
                texLoc.x,
                texLoc.y,
                TileOffscreenRenderer.width,
                TileOffscreenRenderer.width,
                20,
                500,
                TileOffscreenRenderer.width,
                TileOffscreenRenderer.width
            )*/
            ctx.drawImage(TileOffscreenRenderer.ctx.canvas, 20, 200)

            // ctx.fillRect(300, 200, 50, 50);


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