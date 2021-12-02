/// <reference path="userInterfaceNode.ts"/>

namespace MG {

    export class UserInterfaceElement extends UserInterfaceNode {

        protected _width: number;
        protected _height: number;

        protected _children: UserInterfaceElement[] = [];

        protected constructor (name: string, width: number, height: number) {
            super(name);

            this._width = width;
            this._height = height;
        }


        public getElementByName (name: string): UserInterfaceElement {
            if (this.name === name) return this;

            for (let child of this._children) {
                let result = child.getElementByName(name);
                if (result !== undefined) return result;
            }

            return undefined;
        }

        public render (camera: Camera): void {

            // print bg texture/sprite if defined???

            if (LevelManager.bDrawDebugs) {
                ctx.strokeStyle = 'purple';
                ctx.strokeRect(this.position.x, this.position.y, this._width, this._height);
            }
        }
    }
}