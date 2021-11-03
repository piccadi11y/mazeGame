/// <reference path="oObject.ts"/>

namespace MG {

    export class CameraObject extends oObject {

        private _cameraComponent: CameraComponent;

        public constructor (id: number, name: string, width: number, height: number) {
            super(id, name, undefined);

            this._cameraComponent = new CameraComponent(name + '_cameraComponent', width, height);
            this._cameraComponent.setOwner(this);
        }

        public get cameraComponent (): CameraComponent {
            return this._cameraComponent;
        }

        public update (deltaTime: number): void {
            super.update(deltaTime);

            this._cameraComponent.update(deltaTime);
        }
    }
}