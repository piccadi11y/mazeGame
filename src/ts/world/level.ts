namespace MG {

    export class Level {
        
        private _name: string;
        private _width: number;
        private _height: number;
        private _gridSize: number;
        private _transform: Transform = new Transform();    // TODO // this will be relevant later when the engine supports multiple levels/streaming

        private _baseColour: Colour;
        private _baseTexture: Sprite;

        private _rootObject: oObject;
        private _playerObject: oObject;
        private _spawnPoint: oObject = undefined; // TODO // implement spawn point logic for first entry into new world/game and on death (?)
        private _activeCamera: CameraComponent;

        public constructor (name: string, width: number, height: number, gridSize: number, colour: Colour) {
            this._name = name;
            this._width = width;
            this._height = height;
            this._gridSize = gridSize;
            this._baseColour = colour;
            this._rootObject = new oObject(2, '_ROOT_')
        }

        public load () {
            TextureManager.addTexture(new Texture(`LEVEL_${this._name}_BASE`, 1, 1, this._baseColour));
            this._baseTexture = new Sprite(this._width, this._height, `LEVEL_${this._name}_BASE`);


            TextureManager.addTexture(new Texture('testTexCentre', 1, 1, Colour.green()));
            let oTemp = new oObject(3, 'centreObject');
            oTemp.addComponent(new SpriteComponent('centreSprite', 'testTexCentre', 50));
            this._rootObject.addChild(oTemp);
            oTemp = new oObject(4, 'centreObject2');
            oTemp.addComponent(new SpriteComponent('centreSprite2', 'testTexCentre', 50));
            oTemp.position.x = 200;
            oTemp.position.y = 100;
            this._rootObject.addChild(oTemp);
        }

        // in future support multiple cameras (in level), for now, just set camera that follows player through levels
        public addCamera (camera: oObject): void {
            this._activeCamera = (camera.getComponent('cameraComponent') as CameraComponent);
        }

        public setPlayer (player: oObject): void {
            this._playerObject = player;
        }

        public update (deltaTime: number): void {
            // obviously not production ready movement logic, but good enough for testing
            // TODO // eventually add this logic to the player object once i enable custom on update functions for all oObjects (so they can be extended for the game)
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
            let velX = xDir * 100 * deltaTime;
            let velY = yDir * 100 * deltaTime;

            this._playerObject.position.x += velX;
            this._playerObject.position.y += velY;


            this._rootObject.update(deltaTime);
            this._playerObject.update(deltaTime);
            this._activeCamera.update(deltaTime);

        }

        public render (): void {
            // render level
            this._baseTexture.draw(this._transform, this._activeCamera.camera);

            // render objects
            this._rootObject.render(this._activeCamera.camera);
            this._playerObject.render(this._activeCamera.camera);

        }

    }
}