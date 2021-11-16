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
        private _bBorderCollisions: boolean[];

        public constructor (name: string, width: number, height: number, gridSize: number, colour: Colour, x: number = 0, y: number = 0, levelCollisions?: boolean[]) {
            this._name = name;
            this._width = width;
            this._height = height;
            this._gridSize = gridSize;
            this._baseColour = colour;
            this._rootObject = new oObject('_ROOT_', this);
            this._bBorderCollisions = levelCollisions;
            this._transform.position.x = x;
            this._transform.position.y = y;

            this._rootObject.position = this._transform.position;
            this.generateBorderCollisions();
            TextureManager.addTexture(new Texture(`LEVEL_${this._name}_BASE`, 1, 1, this._baseColour));
            this._baseTexture = new Sprite(this._width, this._height, `LEVEL_${this._name}_BASE`);
        }

        private generateBorderCollisions (): void {
            let oTemp;
            let borderWidth: number = 10;

            if (this._bBorderCollisions[0]) {
                oTemp = new oObject('levelCollisionObject_T', this);
                oTemp.enableCollision(this._width, borderWidth);
                oTemp.position.y = -this._height/2 - borderWidth/2;
                this._rootObject.addChild(oTemp);
            }
            if (this._bBorderCollisions[1]) {
                oTemp = new oObject('levelCollisionObject_R', this);
                oTemp.enableCollision(borderWidth, this._height);
                oTemp.position.x = this._width/2 + borderWidth/2;
                this._rootObject.addChild(oTemp);
            }
            if (this._bBorderCollisions[2]) {
                oTemp = new oObject('levelCollisionObject_B', this);
                oTemp.enableCollision(this._width, borderWidth);
                oTemp.position.y = this._width/2 + borderWidth/2;
                this._rootObject.addChild(oTemp);
            }
            if (this._bBorderCollisions[3]) {
                oTemp = new oObject('levelCollisionObject_L', this);
                oTemp.enableCollision(borderWidth, this._height);
                oTemp.position.x = -this._height/2 - borderWidth/2;
                this._rootObject.addChild(oTemp);
            }
        }

        /*public load () {
            TextureManager.addTexture(new Texture(`LEVEL_${this._name}_BASE`, 1, 1, this._baseColour));
            this._baseTexture = new Sprite(this._width, this._height, `LEVEL_${this._name}_BASE`);


            let oTemp = oObject.load(Assets.Objects.testLevelCentre, this);
            this._rootObject.addChild(oTemp);
            oTemp = oObject.load(Assets.Objects.testLevelCentre, this);
            oTemp.position.x = 200;
            oTemp.position.y = 100;
            this._rootObject.addChild(oTemp);            

            // load from obj

        }*/

        public static load (data: object): Level {
            let level: Level = new Level(data['name'], data['width'], data['height'], data['gridSize'], Colour.fromString(data['colour']), data['xPos'], data['yPos'], data['levelCollisions']);

            // tile logic goes here

            // spawn/create objects
            let oTemp: oObject;
            console.log()
            for (let o of data['objects']) {
                oTemp = oObject.load(o['obj'], level);
                oTemp.position.x = o['x'];
                oTemp.position.y = o['y'];
                level.rootObject.addChild(oTemp);
            }

            return level;
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