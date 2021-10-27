namespace MG {

    export class Engine {

        private _canvas: HTMLCanvasElement;
        private _testObject: oObject;

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

            this.MainLoop();
        }


        private MainLoop (): void {

            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);


            this._testObject.rotation += 1;
            this._testObject.update(0);
            this._testObject.render();


            requestAnimationFrame(()=>this.MainLoop());
        }

        private Resize (): void {
            if (this._canvas === undefined) return;

            this._canvas.width = this._canvas.clientWidth;
            this._canvas.height = this._canvas.clientHeight;

        }
    }
}