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
        private _spawnPoint: oObject = undefined; // TODO // implement spawn point logic for first entry into new world/game and on death (?)

        public constructor (name: string, width: number, height: number, gridSize: number, colour: Colour) {
            this._name = name;
            this._width = width;
            this._height = height;
            this._gridSize = gridSize;
            this._baseColour = colour;
            this._rootObject = new oObject(2, '_ROOT_', this);
        }

        public load () {
            TextureManager.addTexture(new Texture(`LEVEL_${this._name}_BASE`, 1, 1, this._baseColour));
            this._baseTexture = new Sprite(this._width, this._height, `LEVEL_${this._name}_BASE`);


            TextureManager.addTexture(new Texture('testTexCentre', 1, 1, Colour.green()));
            let oTemp = new oObject(3, 'centreObject', this);
            oTemp.addComponent(new SpriteComponent('centreSprite', 'testTexCentre', 50));
            oTemp.enableCollisionFromSprite('centreSprite');
            this._rootObject.addChild(oTemp);
            oTemp = new oObject(4, 'centreObject2', this);
            oTemp.addComponent(new SpriteComponent('centreSprite2', 'testTexCentre', 50));
            oTemp.enableCollisionFromSprite('centreSprite2');
            oTemp.position.x = 200;
            oTemp.position.y = 100;
            this._rootObject.addChild(oTemp);

            // add level border collisions
            oTemp = new oObject(5, 'levelCollisionObject_L', this);
            oTemp.enableCollision(10, this._height);
            oTemp.position.x = -505;
            this._rootObject.addChild(oTemp);

            oTemp = new oObject(6, 'levelCollisionObject_R', this);
            oTemp.enableCollision(10, this._height);
            oTemp.position.x = 505;
            this._rootObject.addChild(oTemp);

            oTemp = new oObject(7, 'levelCollisionObject_T', this);
            oTemp.enableCollision(this._width, 10);
            oTemp.position.y = -505;
            this._rootObject.addChild(oTemp);

            oTemp = new oObject(8, 'levelCollisionObject_B', this);
            oTemp.enableCollision(this._width, 10);
            oTemp.position.y = 505;
            this._rootObject.addChild(oTemp);

            // load from obj

        }



        public get rootObject (): oObject {
            return this._rootObject;
        }

        public update (deltaTime: number): void {

            this._rootObject.update(deltaTime);

        }

        public render (): void {
            // render level
            this._baseTexture.draw(this._transform, LevelManager.camera.cameraComponent.camera);

            // render objects
            this._rootObject.render(LevelManager.camera.cameraComponent.camera);

        }

    }
}