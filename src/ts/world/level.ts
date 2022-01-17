namespace MG {

    export interface lSpawnPointBuildData {
        name: string,
        type: SpawnPointType,
        textureN: string,
        activeTextureN: string,
        x: number,
        y: number
    }

        interface lTileBuildData {
        textureName: string,
        x: number,
        y: number,
        rotation: number,
        collisionType: CollisionType
    }

    export interface loObjectBuildData {
        objectBuildData: oObjectBuildData,
        x: number,
        y: number
    }

    export interface LevelBuildData {
        name: string,
        width: number,
        height: number,
        gridSize: number,
        colour: string,
        x: number,
        y: number,
        borderCollisions: boolean[],
        spawnPoint: lSpawnPointBuildData,
        tiles: lTileBuildData[],
        objects: loObjectBuildData[]
    }

    export class Level {
        
        private _name: string;
        private _width: number;
        private _height: number;
        private _gridSize: number;
        private _transform: Transform = new Transform();    // TODO // this will be relevant later when the engine supports multiple levels/streaming
        private _levelDetectionCollision: CollisionComponent;

        private _baseColour: Colour;
        private _baseTexture: Sprite;
        private _tiles: Tile[] = [];

        private _rootObject: oObject;
        private _spawnPoint: SpawnPoint = undefined; // TODO // implement spawn point logic for first entry into new world/game and on death (?)
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
            this._baseTexture = new Sprite(this._width, this._height, [`LEVEL_${this._name}_BASE`]);

            this._levelDetectionCollision = new CollisionComponent(`${this._name}_levelCollisionComponent`, this._width, this._height, this._transform, CollisionType.NON_BLOCKING);

        }

        public get name (): string {
            return this._name;
        }

        public get width (): number {
            return this._width;
        }

        public get height (): number {
            return this._height;
        }

        public get location (): Vector2 {
            return this._transform.position;
        }

        public get gridSize (): number {
            return this._gridSize;
        }

        public get centre (): Vector2 {
            return this._transform.position;
        }

        public get collisionShape (): CollisionComponent {
            return this._levelDetectionCollision;
        }

        public get tiles (): Tile[] {
            return this._tiles;
        }

        public get spawnPoint (): SpawnPoint {
            return this._spawnPoint;
        }

        public set spawnPoint (sp: SpawnPoint) {
            this._spawnPoint = sp;
        }

        private generateBorderCollisions (): void {
            let oTemp;
            let borderWidth: number = this._gridSize;

            if (this._bBorderCollisions[0]) {
                oTemp = new oObject(`${this._name}_levelCollisionObject_T`, this);
                oTemp.enableCollision(this._width, borderWidth);
                oTemp.position.y = -this._height/2 - borderWidth/2;
                this._rootObject.addChild(oTemp);
            }
            if (this._bBorderCollisions[1]) {
                oTemp = new oObject(`${this._name}_levelCollisionObject_R`, this);
                oTemp.enableCollision(borderWidth, this._height);
                oTemp.position.x = this._width/2 + borderWidth/2;
                this._rootObject.addChild(oTemp);
            }
            if (this._bBorderCollisions[2]) {
                oTemp = new oObject(`${this._name}_levelCollisionObject_B`, this);
                oTemp.enableCollision(this._width, borderWidth);
                oTemp.position.y = this._width/2 + borderWidth/2;
                this._rootObject.addChild(oTemp);
            }
            if (this._bBorderCollisions[3]) {
                oTemp = new oObject(`${this._name}_levelCollisionObject_L`, this);
                oTemp.enableCollision(borderWidth, this._height);
                oTemp.position.x = -this._height/2 - borderWidth/2;
                this._rootObject.addChild(oTemp);
            }
        }

        /*public static load (data: object): Level {
            let level: Level = new Level(data['name'], data['width'], data['height'], data['gridSize'], Colour.fromString(data['colour']), data['xPos'], data['yPos'], data['levelCollisions']);

            // tile logic goes here
            let tTemp: Tile;
            for (let t of data['tiles']) {
                tTemp = new Tile(t['obj']['name'], level);
                tTemp.position.x = t['x'] * level.gridSize - level._width/2 + level.gridSize/2;
                tTemp.position.y = t['y'] * level.gridSize - level._height/2 + level.gridSize/2;
                tTemp.rotation = t['d'];
                tTemp.update(0);
                // TODO // move collision creation to tile constructor
                if (t['collision'] === "wall") tTemp.enableCollisionFromSprite(level.name + '_TEXTURECOMPONENT_' + t['obj']['name'], true);        // in theory this is working????
                level.tiles.push(tTemp);
            }

            // spawn/create objects
            let oTemp: oObject;
            for (let o of data['objects']) {
                oTemp = oObject.load(o['obj'], level);
                oTemp.position.x = o['x'];
                oTemp.position.y = o['y'];
                level.rootObject.addChild(oTemp);
            }

            // spawnpoint/checkpoint spawn/registration
            let spD: object = data['spawnPoint'];
            if (spD) {
                let sp: SpawnPoint;
                sp = SpawnPoint.load(spD, level);
                if (sp.type === SpawnPointType.SPAWN) LevelManager.registerSpawn(sp);
                level.rootObject.addChild(sp);
                level.spawnPoint = sp;
                level.spawnPoint.position.x = spD['x'] * level.gridSize - level._width/2 + level.gridSize/2;
                level.spawnPoint.position.y = spD['y'] * level.gridSize - level._height/2 + level.gridSize/2;
                level.spawnPoint.update(0);
            }
            

            return level;
        }*/

        public static load (lData: LevelBuildData): Level {
            let level: Level = new Level(lData.name, lData.width, lData.height, lData.gridSize, Colour.fromString(lData.colour), lData.x, lData.y, lData.borderCollisions);

            // TODO // t.textureName['name'] -> an actual string once TileBuildData/TextureBuildData is sorted
            // TODO // refactor tile, oObject and sp constructors to append object to level rather than doing it after building/loading it here
            // tile build logic
            let tTemp: Tile;
            for (let t of lData.tiles) {
                tTemp = new Tile(t.textureName, level);
                tTemp.position.x = t.x * level.gridSize - level._width/2 + level.gridSize/2;
                tTemp.position.y = t.y* level.gridSize - level._height/2 + level.gridSize/2;
                tTemp.rotation = t.rotation;
                tTemp.update(0);
                // TODO // move collision creation to tile constructor
                if (t.collisionType === CollisionType.BLOCKING) tTemp.enableCollisionFromSprite(level.name + '_TEXTURECOMPONENT_' + t.textureName['name'], true);
                level.tiles.push(tTemp);
            }

            // spawn objects
            let oTemp: oObject;
            for (let o of lData.objects) {
                oTemp = oObject.load(o.objectBuildData, level);
                oTemp.position.x = o.x;
                oTemp.position.y = o.y;
                level.rootObject.addChild(oTemp);
            }

            // spawnpoint/checkpoint spawn/registration
            let spD: lSpawnPointBuildData = lData.spawnPoint;
            if (spD) {
                let sp: SpawnPoint;
                sp = SpawnPoint.load(spD, level);
                if (sp.type === SpawnPointType.SPAWN) LevelManager.registerSpawn(sp);
                level.rootObject.addChild(sp); // do this in sp constructor
                level.spawnPoint = sp;
                sp.position.x = spD.x * level.gridSize - level._width/2 + level.gridSize/2;
                sp.position.y = spD.y * level.gridSize - level._height/2 + level.gridSize/2;
                sp.update(0);
            }

            return level;
        }

        public get rootObject (): oObject {
            return this._rootObject;
        }

        public update (deltaTime: number): void {

            this._rootObject.update(deltaTime);

        }

        public checkHasPlayer (point: Vector2): boolean {
            if (this._levelDetectionCollision.checkPointWithin(point)) return true;
            return false;
        }

        public render (bDrawDebugs: boolean = false): void {
            // render level
            this._baseTexture.draw(this._transform, LevelManager.camera, bDrawDebugs);

            // render tiles
            for (let t of this._tiles) t.render(LevelManager.camera, bDrawDebugs);

            // render objects
            this._rootObject.render(LevelManager.camera, bDrawDebugs);

        }

    }
}