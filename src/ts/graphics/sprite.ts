namespace MG {

    export class Sprite {

        private _width: number;
        private _height: number;
        private _textures: Texture[] = [];
        private _currentTexture: Texture;


        public constructor (width: number, height: number, textureNames: string[]) {
            this._width = width;
            this._height = height;

            for (let tn of textureNames) if (tn !== undefined) this._textures.push(TextureManager.getTexture(tn))

            // this._currentTexture = TextureManager.getTexture(textureNames[0]);
            this._currentTexture = this._textures[0];

            // TODO // add animation/multiple frame support
        }

        public get width (): number {
            return this._width;
        }

        public get height (): number {
            return this._height;
        }

        public set currentTexture (index: number) {
            let i: number = index >= this._textures.length ? this._textures.length - 1 : index;
            this._currentTexture = this._textures[i];
        }

        public get currentTexture (): number {
            return this._textures.indexOf(this._currentTexture);
        }

        public update (deltaTime: number): void {
            // for when we need to animate
        }

        public draw (transform: Transform, camera: Camera, bDrawDebugs: boolean): void {
            this._currentTexture.draw(camera, bDrawDebugs, transform.position.x, transform.position.y, transform.rotation, this._width, this._height);
        }
    }
}