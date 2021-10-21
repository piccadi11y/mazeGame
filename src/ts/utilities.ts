namespace MG {

    export var ctx: CanvasRenderingContext2D;

    export class Utilities {

        public static Initialise (id?:string): HTMLCanvasElement {
            let canvas: HTMLCanvasElement;
            
            if (id !== undefined) {
                canvas = document.getElementById(id) as HTMLCanvasElement;
                if (canvas === undefined) throw new Error('Cannot finda  canvas element named' + id);
            } else {
                canvas = document.createElement('canvas') as HTMLCanvasElement;
                document.body.appendChild(canvas);
            }

            ctx = canvas.getContext('2d')
            if (ctx === undefined) throw new Error('Unable to initialise')

            return canvas;
        }
    }
}