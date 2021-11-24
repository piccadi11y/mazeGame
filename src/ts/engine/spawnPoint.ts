namespace MG {

    export enum SpawnPointType {
        SPAWN = 'start',
        CHECKPOINT = 'checkpoint'
    }

    export class SpawnPoint extends oObject {

        private _type: SpawnPointType;
        private _checkpointActive: boolean = false;

        public constructor (name: string, level: Level, type: SpawnPointType, textureName: string, activeTextureName: string = undefined) {
            super(name, level);

            this._type = type;
            this.addComponent(new SpriteComponent(`${this.name}_spriteC`, [textureName, activeTextureName], type===SpawnPointType.SPAWN?level.gridSize*3:level.gridSize));

            // if type==checkpoint, create no blocking collision
            if (this._type === SpawnPointType.CHECKPOINT) {
                this.enableCollisionFromSprite(`${this.name}_spriteC`, true, CollisionType.NON_BLOCKING);
            }
        }

        public get type (): SpawnPointType {
            return this._type;
        }

        public static load (data: object, level: Level): SpawnPoint {
            return new SpawnPoint(data['name'], level, data['type'], data['tex']['name'], data['texActive']?data['texActive']['name']:undefined);
        }

        public onCollision (collidingObject: oObject): void {
            super.onCollision(collidingObject);
            console.log(`ow, ${collidingObject.name} is running me down`);

            if (this._type === SpawnPointType.CHECKPOINT && this._checkpointActive === false) LevelManager.setCheckpoint(this);
        }

        public enable (): void {
            if (this._type === SpawnPointType.SPAWN) return;
            this._checkpointActive = true;
            (this.getComponent(`${this.name}_spriteC`) as SpriteComponent).frame = 1;
        }

        public disable (): void {
            if (this._type === SpawnPointType.SPAWN) return;
            this._checkpointActive = false;
            (this.getComponent(`${this.name}_spriteC`) as SpriteComponent).frame = 0;
        }
    }
}