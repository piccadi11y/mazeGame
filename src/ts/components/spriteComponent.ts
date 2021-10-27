namespace MG {

    export class SpriteComponent extends BaseComponent {

        private _sprite: Sprite;

        public constructor (name: string, textureName: string, width: number = 100, height?: number) {
            super(name);

            this._sprite = new Sprite(width, height!==undefined?height:width, textureName);
        }

        public update (deltaTime: number): void {
            super.update(deltaTime);

            this._sprite.update(deltaTime);
        }

        public render (transform: Transform, camera: Camera): void {
            super.render(transform, camera);

            this._sprite.draw(transform, camera);
        }
    }
}