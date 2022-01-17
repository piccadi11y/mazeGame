namespace MG {

    export interface BaseComponentBuildData {
        type: string,
        name: string
    }

    export abstract class BaseComponent {

        protected _owner: oObject;

        public name: string;

        public constructor (name: string) {
            this.name = name;
        }

        public get owner (): oObject {
            return this._owner;
        }

        public setOwner (obj: oObject): void {
            this._owner = obj;
        }

        public load (): void {

        }

        public update (deltaTime: number): void {

        }

        public render (transform: Transform, camera: Camera, bDrawDebugs?: boolean): void {
            
        }

    }
}