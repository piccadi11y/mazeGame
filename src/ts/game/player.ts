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

        public update (deltaTime: number): void {
            super.update(deltaTime);

            if (InputHandler.getKey(Keys.ESCAPE).state === State.PRESSED && !LevelManager.isPaused) LevelManager.pause();
        }
    }
}