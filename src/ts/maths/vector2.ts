namespace MG {

    export class Vector2 {

        private _x: number;
        private _y: number;

        public constructor (x: number = 0, y?: number) {
            this._x = x;
            this._y = y!==undefined?y:x;
        }

        public get x (): number {
            return this._x;
        }

        public set x (value: number) {
            this._x = value;
        }
        
        public get y (): number {
            return this._y;
        }

        public set y (value: number) {
            this._y = value;
        }

        public static get Zero (): Vector2 {
            return new Vector2();
        }

        public static get One (): Vector2 {
            return new Vector2(1, 1);
        }

        public toArray (): number[] {
            return [this._x, this._y];
        }

        public copyFrom (vector: Vector2): void {
            this._x = vector._x;
            this._y = vector._y;
        }

        public static rotateRadians (vec: Vector2, radians: number, bCentered:boolean = false): Vector2 {
            return new Vector2(vec.x * Math.cos(radians) - vec.y * Math.sin(radians), vec.x * Math.sin(radians) + vec.y * Math.cos(radians));
        }

        public static rotate (vec: Vector2, degrees: number, bCentered:boolean = false): Vector2 {
            return Vector2.rotateRadians(vec, degrees * (Math.PI / 180), bCentered);
        }

        public scale (scalarX: number, scalarY?: number): void {
            this._x *= scalarX;
            this._y *= scalarY!==undefined?scalarY:scalarX;
        }

        public static scale (vec: Vector2, scale: number, scaleY?: number): Vector2 {
            return new Vector2(vec.x * scale, vec.y * (scaleY!==undefined?scaleY:scale));
        }
    }
}