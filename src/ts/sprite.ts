namespace MG {

    export class Sprite {

        private _width: number;
        private _height: number;
        private _currentTexture: Texture;

        public constructor (width: number, height: number, textureName: string) {
            this._width = width;
            this._height = height;

            //this._currentTexture = TextureManager[textureName] // or something
            this._currentTexture = new Texture(this._width, this._height);
        }

        public update (): void {

        }

        public draw (): void {
            this._currentTexture.draw(0, 0);
        }
    }
}