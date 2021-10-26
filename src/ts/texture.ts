namespace MG {

    export class Texture {

        private _width: number;
        private _height: number;
        private _baseColour: Colour;

        public constructor (width: number, height: number, baseColour: Colour = Colour.white()) {
            this._width = width;
            this._height = height;
            this._baseColour = baseColour;
        }

        public draw (x: number, y: number): void {
            ctx.fillStyle = this._baseColour.hex(false);
            ctx.fillRect(x, y, this._width, this._height);
        }
    }
    
}