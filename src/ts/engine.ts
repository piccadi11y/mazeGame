namespace MG {

    export class Engine {

        private _canvas: HTMLCanvasElement;
        private _testObject: oObject;

        private FRAME_TIME: number = 0;
        private LAST_FRAME: number = 0;

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
            TextureManager.addTexture(new Texture('testChildTexture', 3, 3, Colour.green()));
            texTemp = TextureManager.getTexture('testChildTexture');
            texTemp.addLayer([new Vector2(2, 0), new Vector2(1), new Vector2(0, 2), new Vector2(2)], new Colour(255, 255, 0));
            texTemp.addLayer([Vector2.Zero], new Colour(255, 0, 255));
            texTemp = undefined;
            TextureManager.releaseTexture('testTex');
            TextureManager.releaseTexture('testChildTexture');
            this._testObject = new oObject(0, 'testObject');
            this._testObject.addComponent(new SpriteComponent('testSprite', 'testTex', 200))
            this._testObject.position = new Vector2(500, 300);
            this._testObject.addChild(new oObject(1, 'testChild'));
            let child: oObject = this._testObject.getObjectByName('testChild');
            child.addComponent(new SpriteComponent('testChildSprite', 'testChildTexture', 100));
            child.rotation = 45;
            child.position.x = 250;
            this._testObject.addChild(new oObject(2, 'child^2'));
            child = this._testObject.getObjectByName('child^2')
            child.addComponent(new SpriteComponent('child^2Sprite', 'testChildTexture', 50));
            child.rotation = -135;
            child.position.x = 450;

            this.MainLoop();
        }


        private MainLoop (): void {
            this.FRAME_TIME = (performance.now() - this.LAST_FRAME) / 1000;

            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);


            this._testObject.rotation += 90 * this.FRAME_TIME;
            this._testObject.update(this.FRAME_TIME);
            this._testObject.render();

            let fps = Math.round(1 / this.FRAME_TIME);
            ctx.fillStyle = 'red';
            ctx.fillText(`${this.FRAME_TIME}s | FPS: ${fps}`, 20, 20);


            this.LAST_FRAME = performance.now();
            requestAnimationFrame(()=>this.MainLoop());
        }

        private Resize (): void {
            if (this._canvas === undefined) return;

            this._canvas.width = this._canvas.clientWidth;
            this._canvas.height = this._canvas.clientHeight;

        }
    }
}