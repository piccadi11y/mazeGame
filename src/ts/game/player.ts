namespace MG {

    export class Player extends PlayerObject {

        private _health: number = 10;

        public constructor (name: string, textures: object[], width: number) {
            super(name, textures, width);
        }

        public createPlayerCamera (vpWidth: number, vpHeight: number): void {
            let c: CameraObject = new CameraObject(`${this.name}Camera`, vpWidth, vpHeight);
            c.cameraComponent.setTarget(this);
        }
    }
}