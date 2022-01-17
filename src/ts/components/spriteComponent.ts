namespace MG {

    export interface ISpriteComponentBuildData extends IBaseComponentBuildData {
        textureName: string,
        width: number,
    }

    export class SpriteComponent extends BaseComponent {

        private _sprite: Sprite;

        public constructor (name: string, textureNames: string[], width: number = 100, height?: number, sprite?: Sprite) {
            super(name);
            if (sprite) this._sprite = sprite;
            else this._sprite = new Sprite(width, height!==undefined?height:width, textureNames);
        }

        public get dimensions (): Vector2 {
            return new Vector2(this._sprite.width, this._sprite.height);
        }

        public get frame (): number {
            return this._sprite.currentTexture;
        }

        public set frame (f: number) {
            this._sprite.currentTexture = f;
        }

        /**
         * Enables/initialises animation of the sprite
         * @param duration The time, in milliseconds (ms), one play of the animation takes
         * @param playIterations The number of times the animation will loop before finishing. -1 for infinite
         * @param playDirection The direction the animation will play in. Default: Forwards
         */
        public enableAnimation (duration: number, playIterations: number, playDirection?: SpriteAnimationDirection) {
            this._sprite.enableAnimation(duration, playIterations, playDirection);
        }

        public play (): void {
            this._sprite.startAnimation();
        }

        public pause (): void {
            this._sprite.pauseAnimation();
        }

        public static fromSprite (name: string, sprite: Sprite): SpriteComponent {
            return new SpriteComponent(name, undefined, undefined, undefined, sprite);
        }

        public update (deltaTime: number): void {
            super.update(deltaTime);

            this._sprite.update(deltaTime);
        }

        public render (transform: Transform, camera: Camera, bDrawDebugs: boolean): void {
            super.render(transform, camera);

            this._sprite.draw(transform, camera, bDrawDebugs);
        }
    }
}