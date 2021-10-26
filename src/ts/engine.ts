namespace MG {

    export class Engine {

        private _canvas: HTMLCanvasElement;
        private _spriteComponent: SpriteComponent;

        public constructor (canvasID?: string) {
            window.onresize = ()=>this.Resize();
            this._canvas = Utilities.Initialise(canvasID);
            this.Resize();
        }


        public Start (): void {

            InputHandler.Initialise();
            TextureManager.addTexture(new Texture('testTex', 10, 10, Colour.blue()));
            let texTemp = TextureManager.getTexture('testTex');
            texTemp.addLayer([new Vector2(9), new Vector2(3,5)], Colour.red());
            texTemp.addLayer([new Vector2(4), new Vector2(6,9)], Colour.white());
            console.log('testTex', texTemp);
            texTemp = undefined;
            TextureManager.releaseTexture('testTex');
            this._spriteComponent = new SpriteComponent('testSprite', 'testTex', 300);

            this.MainLoop();
        }


        private MainLoop (): void {

            // ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);

            ctx.fillStyle = 'green';
            ctx.fillRect(10, 10, 200, 200);

            this._spriteComponent.render();


            requestAnimationFrame(()=>this.MainLoop());
        }

        private Resize (): void {
            if (this._canvas === undefined) return;

            this._canvas.width = this._canvas.clientWidth;
            this._canvas.height = this._canvas.clientHeight;

        }
    }
}