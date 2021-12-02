/// <reference path='../world/transform.ts'/>

namespace MG {

    export class UserInterfaceNode {
        
        protected _bShouldTick: boolean = false;
        private _name: string;
        private _transform: Transform = new Transform();


        protected constructor (name: string) {
            this._name = name;
        }

        public get position (): Vector2 {
            return this._transform.position;
        }

        public get rotation (): number {
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