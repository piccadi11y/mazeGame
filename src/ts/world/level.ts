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

        public constructor (name: string, width: number, height: number, gridSize: number, colour: Colour, levelCollisions?: boolean[]) {
            this._name = name;
            this._width = width;
            this._height = height;
            this._gridSize = gridSize;
            this._baseColour = colour;
            this._rootObject = new oObject('_ROOT_', this, 2);
            this._bBorderCollisions = levelCollisions;
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

        public load () {
            TextureManager.addTexture(new Texture(`LEVEL_${this._name}_BASE`, 1, 1, this._baseColour));
            this._baseTexture = new Sprite(this._width, this._height, `LEVEL_${this._name}_BASE`);

            // still loading this here as i haven't implemented texture loading on program start
            TextureManager.addTexture(Texture.load(Assets.Textures.testObjectTexture))
            let oTemp = oObject.load(Assets.Objects.testLevelCentre, this);
            this._rootObject.addChild(oTemp);
            oTemp = oObject.load(Assets.Objects.testLevelCentre, this);
            oTemp.position.x = 200;
            oTemp.position.y = 100;
            this._rootObject.addChild(oTemp);



            // add level border collisions
            this.generateBorderCollisions();
            

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