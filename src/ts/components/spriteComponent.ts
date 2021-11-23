namespace MG {

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