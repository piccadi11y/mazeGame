/// <reference path="userInterfaceElement.ts"/>

namespace MG {

    export enum TextAlignment {
        LEFT = 'left',
        RIGHT = 'right',
        CENTRE = 'center'//,
        // START = 'start',
        // END = 'end'
    }

    export enum TextBaseline {
        TOP = 'top',
        HANGING = 'hanging',
        MIDDLE = 'middle',
        ALPHABETIC = 'alphabetic',
        IDEOGRAPHIC = 'ideographic',
        BOTTOM = 'bottom'
    }
    
    export class Label extends UserInterfaceElement {

        private _font: string = '10px consolas';
        private _textAlign: CanvasTextAlign = TextAlignment.LEFT;
        private _textBaseline: CanvasTextBaseline = TextBaseline.MIDDLE;
        private _value: string = '';
        private _colour: string = 'red';
        private _renderOffset: Vector2 = Vector2.Zero;

        public constructor (name: string, width: number, height: number) {
            super(name, width, height);

            // this._bShouldTick = true;
            this.calcAlignment();
            this.calcBaseline();
        }

        public set font (font: string) {
            this._font = font;
        }

        private calcAlignment (): void {
            switch (this._textAlign) {
                case TextAlignment.LEFT: this._renderOffset.x = 0; break;
                case TextAlignment.CENTRE: this._renderOffset.x = this._width / 2; break;
                case TextAlignment.RIGHT: this._renderOffset.x = this._width; break;
            }
        }

        public set textAlignment (alignment: TextAlignment) {
            this._textAlign = alignment;
            this.calcAlignment();
        }

        private calcBaseline (): void {
            this._renderOffset.y = this._height / 2;
        }

        public set textBaseline (baseline: TextBaseline) {
            this._textBaseline = baseline;

            this.calcBaseline();
        }

        public set value (value: string) {
            this._value = value;
        }

        public set colour (colour: string) {
            this._colour = colour;
        }

        public render (camera: Camera): void {
            super.render(camera);
            ctx.font = this._font;
            ctx.textAlign = this._textAlign;
            ctx.textBaseline = this._textBaseline;
            ctx.fillStyle = this._colour;
            ctx.fillText(this._value, this.position.x + this._renderOffset.x, this.position.y + this._renderOffset.y, this._width);
            
        }

    }
}