/// <reference path="../engine/oObject.ts"/>

namespace MG {

    export interface ISpawnPointBuildData extends IoObjectBuildData {
        name: string,
        spType: SpawnPointType,
        textureN: string,
        activeTextureN?: string,
        x: number,
        y: number
    }

    export enum SpawnPointType {
        SPAWN = 'start',
        CHECKPOINT = 'checkpoint',
        END = 'end'
    }

    export class SpawnPoint extends oObject {

        private _type: SpawnPointType;
        private _checkpointActive: boolean = false;

        public constructor (name: string, level: Level, type: SpawnPointType, textureName: string, activeTextureName: string = undefined) {
            super(name, level);

            this._type = type;
            this.addComponent(new SpriteComponent(`${this.name}_spriteC`, [textureName, activeTextureName], type===SpawnPointType.SPAWN?level.gridSize*3:level.gridSize));

            // if type==checkpoint, create no blocking collision
            if (this._type === SpawnPointType.CHECKPOINT || this._type === SpawnPointType.END) {
                this.enableCollisionFromSprite(`${this.name}_spriteC`, true, CollisionType.NON_BLOCKING);
            }
        }

        public get type (): SpawnPointType {
            return this._type;
        }

        public static load (data: ISpawnPointBuildData, level: Level): SpawnPoint {
            return new SpawnPoint(data.name, level, data.spType, data.textureN, data.activeTextureN?data.activeTextureN:undefined);
        }

        public onCollision (collidingObject: oObject): void {
            super.onCollision(collidingObject);

            if (this._type === SpawnPointType.END) LevelManager.restart();
            else if (this._type === SpawnPointType.CHECKPOINT && this._checkpointActive === false) LevelManager.setCheckpoint(this);
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