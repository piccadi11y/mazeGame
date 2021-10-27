namespace MG {

    export class Sprite {

        private _width: number;
        private _height: number;
        private _currentTexture: Texture;


        public constructor (width: number, height: number, textureName: string) {
            this._width = width;
            this._height = height;

            this._currentTexture = TextureManager.getTexture(textureName);

            // TODO // add animation/multiple frame support
        }

        public update (deltaTime: number): void {

        }

        public draw (transform: Transform, camera: Camera): void {
            // TODO // take in this object's location at some point too, and time
            this._currentTexture.draw(camera, transform.position.x, transform.position.y, transform.rotation, this._width, this._height);
        }
    }
}