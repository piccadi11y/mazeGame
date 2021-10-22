namespace MG {

    export class Engine {

        private _canvas: HTMLCanvasElement;

        public constructor (canvasID?: string) {
            window.onresize = ()=>this.Resize();
            this._canvas = Utilities.Initialise(canvasID);
            this.Resize();
        }


        public Start (): void {

            InputHandler.Initialise();

            this.MainLoop();
        }


        private MainLoop (): void {

            ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

            ctx.fillStyle = 'green';
            ctx.fillRect(10, 10, 150, 255);


            requestAnimationFrame(()=>this.MainLoop());
        }

        private Resize (): void {
            if (this._canvas === undefined) return;

            this._canvas.width = this._canvas.clientWidth;
            this._canvas.height = this._canvas.clientHeight;

        }
    }
}