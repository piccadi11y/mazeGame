/// <reference path='../world/transform.ts'/>

namespace MG {

    export class UserInterfaceNode {
        
        protected _bShouldTick: boolean = false;
        private _name: string;
        private _transform: Transform = new Transform();


        protected constructor (name: string) {
            this._name = name;
        }

        protected get transform (): Transform {
            return this._transform;
        }

        protected get position (): Vector2 {
            return this._transform.position;
        }

        protected set position (pos: Vector2) {
            this._transform.position.copyFrom(pos);
        }

        public pos (x?: number, y?: number) {
            if (x && y) this.position = new Vector2(x, y);
            else if (x) this.position.x = x;
            else if (y) this.position.y = y;
            return this.position;
        }

        protected get rotation (): number {
            return this._transform.rotation;
        }

        public get name (): string {
            return this._name;
        }

        public get bShouldTick (): boolean {
            return this._bShouldTick;
        }


        public update (deltaTime: number): void {

        }
    }
}