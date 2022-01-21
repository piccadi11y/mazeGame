namespace MG {

    export interface ITileInstance {
        x: number,
        y: number,
        rotation: number
    }

    export interface ITileBuildData {
        textureName: string,
        collisionType: CollisionType,
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

    export class TileOffscreenRenderer {
        private static _texturesUsed: {[name: string]: Vector2} = {};
        private static _textureCount: number;
        private static _textureWidth: number;
        private static _ctx: CanvasRenderingContext2D;

        public static get ctx (): CanvasRenderingContext2D {
            return this._ctx;
        }

        public static get width (): number {
            return this._textureWidth
        }

        public static getTextureLocation (textureName: string): Vector2 {
            return this._texturesUsed[textureName];
        }

        public static initialise (textureNames: string[], tWidth: number): void {
            this._textureWidth = tWidth;
            this._textureCount = textureNames.length;
            this._ctx = (document.createElement('canvas') as HTMLCanvasElement).getContext('2d');
            this._ctx.canvas.height = this._textureWidth * 4;
            this._ctx.canvas.width = textureNames.length * this._textureWidth;

            for (let i = 0; i < this._textureCount; ++i) {
                this._texturesUsed[textureNames[i]] = new Vector2(this._textureWidth * i, 0);
            }

        }

        /**
         * To be called once before main loop, renders all used tile textures for access by tiles during render loop.
         */
        public static render (): void {
            let c: Camera = new Camera();
            let cTrans: Transform = new Transform();
            c.resizeScreen(this._textureWidth * this._textureCount, this._textureWidth);
            c.resizeScreen(0, 0);
            c.update(0, cTrans);
            let _bCTX = ctx;
            ctx = this._ctx;
            for (let key in this._texturesUsed) {
                const tex: Texture = TextureManager.getTexture(key)
                tex.draw(c, false, true, this._texturesUsed[key].x + this._textureWidth/2, 0 + (this._textureWidth/2), 0, this._textureWidth, this._textureWidth);
                tex.draw(c, false, true, this._texturesUsed[key].x + this._textureWidth/2, 1 * this._textureWidth + (this._textureWidth/2), 90, this._textureWidth, this._textureWidth);
                tex.draw(c, false, true, this._texturesUsed[key].x + this._textureWidth/2, 2 * this._textureWidth + (this._textureWidth/2), 180, this._textureWidth, this._textureWidth);
                tex.draw(c, false, true, this._texturesUsed[key].x + this._textureWidth/2, 3 * this._textureWidth + (this._textureWidth/2), 270, this._textureWidth, this._textureWidth);
            }
            ctx = _bCTX;
        }
    }

    export class Tile extends oObject{

        private _width: number;
        private _textureName: string;
        private _foundationalTile: boolean = false;

        public constructor (textureName: string, level: Level) {
            super(`${level.name}_TILE_${textureName}`, level);
            if (textureName.substring(0, 4) === 'TILE') this._foundationalTile = true;
            this._textureName = textureName;
            this._width = this._level.gridSize;

            let ts: Sprite = TileSpriteManager.getSprite(textureName);
            if (ts === undefined) {
                ts = TileSpriteManager.addSprite(this._width, textureName);
            }
            this.addComponent(SpriteComponent.fromSprite(Tile.spriteName(level.name, textureName), ts));

            level.tiles.push(this);

        }

        public static spriteName (levelName: string, textureName: string): string {
            return `${levelName}_TEXTURECOMPONENT_${textureName}`
        }

        public update (deltaTime: number): void {
            super.update(deltaTime);

            let lt = new Transform();
            lt.position.copyFrom(this.level.location);
            this.updateWorldTransform(lt);
        }

        public render (camera: Camera, bDrawDebugs: boolean = false): void {
            if (!this._foundationalTile) {
                super.render(camera, bDrawDebugs);
                return;
            }
            const view = camera.view;

            let renderCoords: Vector2 = Vector2.Zero;
            renderCoords.copyFrom(this.worldTransform.position);
            renderCoords.x -= view.position.x;
            renderCoords.y -= view.position.y;

            let texLoc: Vector2 = TileOffscreenRenderer.getTextureLocation(this._textureName);
            let rotLoc: number = this.worldTransform.rotation / 90;
            let texW: number = TileOffscreenRenderer.width;
            

            ctx.drawImage(
                TileOffscreenRenderer.ctx.canvas,
                texLoc.x,
                texW * rotLoc,
                texW,
                texW,
                renderCoords.x - texW/2,
                renderCoords.y - texW/2,
                texW,
                texW
            );


            if (bDrawDebugs) {
                // collision
                if (this._collisionComponent !== undefined) {
                    let tex: Texture = TextureManager.getTexture('collisionDebug');
                    tex.draw(camera, true, true, this._collisionComponent.transform.position.x, this._collisionComponent.transform.position.y, 0, this._collisionComponent.width, this._collisionComponent.height);
                }
            
            }
        }

    }
}