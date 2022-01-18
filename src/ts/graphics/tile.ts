namespace MG {

    export interface ITileInstance {
        x: number,
        y: number,
        rotation: number,
        collisionType: CollisionType
    }

    export interface ITileBuildData {
        textureName: string,
        instances: ITileInstance[]
    }

    class TileSpriteManager {
        private static _sprites: {[name: string]: Sprite} = {};

        public static getSprite (textureName: string): Sprite {
            // if (TileSpriteManager._sprites[textureName] === undefined) return undefined;
            return (TileSpriteManager._sprites[textureName]);
        }

        public static addSprite (width: number, textureName: string): Sprite {
            if (TileSpriteManager.getSprite(textureName)) {
                console.warn('The tile-sprite using texture', textureName, 'already exists.');
                return TileSpriteManager.getSprite(textureName);
            }
            let s: Sprite = new Sprite(width, width, [textureName]);
            TileSpriteManager._sprites[textureName] = s;
            return s;
        }
    }

    export class Tile extends oObject{

        private _width: number;

        public constructor (textureName: string, level: Level) {
            super(`${level.name}_TILE_${textureName}`, level);
            this._width = this._level.gridSize;

            let ts: Sprite = TileSpriteManager.getSprite(textureName);
            if (ts === undefined) ts = TileSpriteManager.addSprite(this._width, textureName);
            this.addComponent(SpriteComponent.fromSprite(Tile.spriteName(level.name, textureName), ts));

        }

        public static spriteName (levelName: string, textureName: string): string {
            return `${levelName}_TEXTURECOMPONENT_${textureName}`
        }

    }
}