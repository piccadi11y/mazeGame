namespace MG {

    export enum SpawnPointType {
        SPAWN = 'start',
        CHECKPOINT = 'checkpoint'
    }

    export class SpawnPoint extends oObject {

        private _type: SpawnPointType;

        public constructor (name: string, level: Level, type: SpawnPointType, textureName: string, activeTextureName: string = undefined) {
            super(name, level);

            this._type = type;
            this.addComponent(new SpriteComponent(`${name}_spriteC`, [textureName, activeTextureName], type===SpawnPointType.SPAWN?level.gridSize*3:level.gridSize));
        }

        public get type (): SpawnPointType {
            return this._type;
        }
    }
}