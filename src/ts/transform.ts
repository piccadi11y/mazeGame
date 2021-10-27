namespace MG {

    export class Transform {

        private _position: Vector2 = Vector2.Zero;
        private _rotation: number = 0;

        public get position (): Vector2 {
            return this._position;
        }

        public set position (pos: Vector2) {
            this._position = pos;
        }

        public get rotation (): number {
            return this._rotation;
        }

        public set rotation (degrees: number) {
            this._rotation = degrees;
        }

        public copyFrom (transform: Transform): void {
            this._rotation = transform.rotation;
            this._position.CopyFrom(transform.position);
        }
    }

}