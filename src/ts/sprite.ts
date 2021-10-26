namespace MG {

    export class Sprite {

        private _width: number;
        private _height: number;
        private _currentTexture: Texture;

        private _tempLoc: Vector2 = new Vector2(500, 200);

        public constructor (width: number, height: number, textureName: string) {
            this._width = width;
            this._height = height;

            this._currentTexture = TextureManager.getTexture(textureName);

            // TODO // add animation/multiple frame support
        }

        public update (deltaTime: number): void {

        }

        public draw (): void {
            // TODO // take in this object's location at some point too, and time
            this._currentTexture.draw(this._tempLoc.x, this._tempLoc.y, 30, this._width, this._height);
        }
    }
}