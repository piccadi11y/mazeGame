namespace MG {

    export class Camera {

        private _view: Transform = new Transform();

        private _screenWidth: number;
        private _screenHeight: number;

        public get view (): Transform {
            let nV = new Transform();
            nV.copyFrom(this._view);
            nV.position.x -= this._screenWidth/2;
            nV.position.y -= this._screenHeight/2;
            return nV;
        }

        public resizeScreen (width: number, height: number): void {
            this._screenWidth = width;
            this._screenHeight = height;
        }

        public update (deltaTime: number, view: Transform): void {
            this._view.copyFrom(view);
        }
        
    }
}