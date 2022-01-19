/// <reference path="userInterfaceNode.ts"/>

namespace MG {

    export class UserInterfaceElement extends UserInterfaceNode {

        protected _width: number;
        protected _height: number;

        protected _children: UserInterfaceElement[] = [];
        private _sprite: Sprite;

        protected constructor (name: string, width: number, height: number) {
            super(name);

            this._width = width;
            this._height = height;
        }

        protected get sprite (): Sprite {
            return this._sprite;
        }

        protected setSprite (textureNames: string[]): void {
            this._sprite = new Sprite(this._width, this._height, textureNames);
            this._sprite.bCentreTexture = false;
        }

        public get width (): number {
            return this._width;
        }

        public get height (): number {
            return this._height;
        }

        public pos (x?: number, y?: number): Vector2 {
            let out: Vector2 = super.pos(x, y);

            for (let child of this._children) {
                let newPos: Vector2 = child.position;
                newPos.x += x;
                newPos.y += y;
                child.position = newPos;
            }

            return out;
        }

        public getElementByName (name: string): UserInterfaceElement {
            if (this.name === name) return this;

            for (let child of this._children) {
                let result = child.getElementByName(name);
                if (result !== undefined) return result;
            }

            return undefined;
        }
        

        public update (deltaTime: number): void {
            super.update(deltaTime);

            for (let child of this._children) if (child.bShouldTick) child.update(deltaTime);
        }

        public render (camera: Camera): void {

            // print bg texture/sprite if defined???

            if (this._sprite) this._sprite.draw(this.transform, camera, LevelManager.bDrawDebugs);

            if (LevelManager.bDrawDebugs) {
                ctx.strokeStyle = 'purple';
                ctx.strokeRect(this.position.x, this.position.y, this._width, this._height);
            }

            for (let child of this._children) child.render(camera);
        }
    }
}