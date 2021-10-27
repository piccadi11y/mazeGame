namespace MG {

    export class CameraComponent extends BaseComponent {

        private _camera: Camera = new Camera();
        private _target: oObject = undefined;

        public constructor (name: string, width: number, height: number) {
            super(name);

            this._camera.resizeScreen(width, height);
        }

        public get camera (): Camera {
            return this._camera;
        }

        public setTarget (target: oObject): void {
            this._target = target;
        }

        public handleResize (width: number, height: number): void {
            this._camera.resizeScreen(width, height);
        }

        public update (deltaTime: number): void {
            super.update(deltaTime);

            if (this._target !== undefined) this._owner.worldTransform.copyFrom(this._target.worldTransform);

            this._camera.update(deltaTime, this._owner.worldTransform);
        }

    }
}