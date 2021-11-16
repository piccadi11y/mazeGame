namespace MG {

    export class Colour {
        
        public _r: number;
        public _g: number;
        public _b: number;
        public _a: number;

        public constructor (r: number = 255, g: number = 255, b: number = 255, a: number = 255) {
            this._r = r;
            this._g = g;
            this._b = b;
            this._a = a;
        }

        public get r (): number {
            return this._r;
        }

        public get g (): number {
            return this._g;
        }

        public get b (): number {
            return this._b;
        }

        public get a (): number {
            return this._a;
        }

        public set r (value: number) {
            this._r = value;
        }

        public set g (value: number) {
            this._g = value;
        }

        public set b (value: number) {
            this._b = value;
        }

        public set a (value: number) {
            this._a = value;
        }

        public hex (bAlpha: boolean = false): string {
            if (bAlpha) return '#' + (this._r>0?this._r.toString(16):'00') + (this._g>0?this._g.toString(16):'00') + (this._b>0?this._b.toString(16):'00') + (this._a>0?this._a.toString(16):'00');
            return '#' + (this._r>0?this._r.toString(16):'00') + (this._g>0?this._g.toString(16):'00') + (this._b>0?this._b.toString(16):'00');
        }

        public static fromString (col: string): Colour {
            if (col[0] == '#') return Colour.fromHex(col);

            switch(col) {
                case 'white': return Colour.white();
                case 'black': return Colour.black();
                case 'red': return Colour.red();
                case 'green': return Colour.green();
                case 'blue': return Colour.blue();
            }

            return new Colour;
        }

        // TODO // implement parse from hex
        public static fromHex (col: string): Colour {

            return undefined;
        }

        public static white () {
            return new Colour(255, 255, 255, 255);
        }

        public static black (): Colour {
            return new Colour(0, 0, 0, 255);
        }

        public static red (): Colour {
            return new Colour(255, 0, 0, 255);
        }

        public static green (): Colour {
            return new Colour(0, 255, 0, 255);
        }

        public static blue (): Colour {
            return new Colour(0, 0, 255, 255);
        }
    }
}