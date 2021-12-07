/// <reference path='userInterfaceLayer.ts'/>

namespace MG {

    export class UserInterfaceManager {

        private static _layers: UserInterfaceLayer[] = [];
        // private static _layers: {[name: string]: UserInterfaceLayer} = {};
        private static _vpDimensions: Vector2 = new Vector2(1000);
        private static _camera: Camera = new Camera();

        private constructor () {}

        public static get vpDimensions (): Vector2 {
            return this._vpDimensions;
        }

        public static addLayer (layer: UserInterfaceLayer): void {
            this._layers.push(layer);
            // this._layers[layer.name] = layer;
            // console.log(this._layers);
            // for (let n in this._layers) console.log(this._layers[n].name);
        }

        public static getLayerByName(name: string): UserInterfaceLayer {
            for (let l of this._layers) if (l.name === name) return l;
            return undefined;
        }

        public static update (deltaTime: number): void {
            for (let l of this._layers) if (l.bShouldTick) l.update(deltaTime);

        }

        public static render (): void {
            for (let l of this._layers) l.render(this._camera);
        }

        public static resize (width: number, height: number): void {
            console.log('resizing ui!');
            // not sure I will need these, can probably just use the camera
            this._vpDimensions.x = width;
            this._vpDimensions.y = height;

            this._camera.resizeScreen(width, height);
            let tTransform: Transform = new Transform();
            tTransform.position.copyFrom(new Vector2(width/2, height/2));
            this._camera.update(0, tTransform);
        }
    }
}