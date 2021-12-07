/// <reference path="userInterfaceContainer.ts"/> 

namespace MG {
    
    export class UserInterfaceLayer extends UserInterfaceContainer {


        public constructor (name: string) {
            let vpD: Vector2 = UserInterfaceManager.vpDimensions;
            super(name, vpD.x, vpD.y);

            this._bShouldTick = true;
        }

        public addElement (el: UserInterfaceElement): void {
            this._elements.push(el);
        }

        public update (deltaTime: number): void {
            for (let e of this._elements) if (e.bShouldTick) e.update(deltaTime);
        }

        public render (camera: Camera): void {
            for (let e of this._elements) e.render(camera);
        }
    }
}