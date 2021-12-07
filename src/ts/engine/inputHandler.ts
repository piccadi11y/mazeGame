/// <reference path='../maths/vector2.ts'/>

namespace MG {

    export enum Keys {
        ARROW_LEFT = 'ArrowLeft',
        ARROW_RIGHT = 'ArrowRight',
        ARROW_UP = 'ArrowUp',
        ARROW_DOWN = 'ArrowDown',
        W = 'w',
        A = 'a',
        S = 'a',
        D = 'd',
        ESCAPE = 'Escape',
        ENTER = 'Enter'
    }

    export class InputHandler {

        private static _keys: {[key:string]: KeyState} = {};
        private static _registeredOnMouseClick: {[key: string]: Function} = {};
        private static _canvas: HTMLCanvasElement;
        private static _mousePosition: Vector2 = Vector2.Zero;

        private constructor () {}

        public static get mousePosition (): Vector2 {
            return this._mousePosition;
        }

        public static initialise (c: HTMLCanvasElement): void {
            this._canvas = c;

            window.addEventListener('keyup', (e)=>this.handleKeyUp(e));
            window.addEventListener('keydown', (e)=>this.handleKeyDown(e));
            window.addEventListener('mousemove', e=>this.pollMouse(e));
            window.addEventListener('mousedown', e=>this.handleMouseClick(e, 'mousedown'));
            window.addEventListener('mouseup', e=>this.handleMouseClick(e, 'mouseup'));

            this.registerKey('ArrowLeft');
            this.registerKey('ArrowRight');
            this.registerKey('ArrowUp');
            this.registerKey('ArrowDown');
            this.registerKey('w');
            this.registerKey('a');
            this.registerKey('a');
            this.registerKey('d');
            this.registerKey('Escape');
            this.registerKey('Enter');

        }

        private static handleKeyUp (e: KeyboardEvent): void {
            if (this._keys[e.key] === undefined) return;
            if (this._keys[e.key].state === State.RELEASED) return;
            this._keys[e.key].state = State.RELEASED;
            // console.log(e.key, this._keys[e.key].state);
        }

        private static handleKeyDown (e: KeyboardEvent): void {
            if (this._keys[e.key] === undefined) return;
            if (this._keys[e.key].state === State.PRESSED) return;
            this._keys[e.key].state = State.PRESSED;
            // console.log(e.key, this._keys[e.key].state);
        }

        private static registerKey (key: string): void {
            if (this._keys[key] !== undefined) return;
            let k = new KeyState(key);
            this._keys[key] = k;
        }

        public static getKey (name: string): KeyState {
            return this._keys[name];
        }

        public static registerMouseClick (name: string, func: Function): void {
            this._registeredOnMouseClick[name] = func;
        }

        public static deregisterMouseClick (name: string): void {
            this._registeredOnMouseClick[name] = undefined;
            delete this._registeredOnMouseClick[name];
        }

        private static pollMouse (e: MouseEvent): void {
            // https://stackoverflow.com/a/33063222
            let rect: DOMRect = this._canvas.getBoundingClientRect();
            this._mousePosition.x = (e.clientX - rect.left) / (rect.right - rect.left) * this._canvas.width;
            this._mousePosition.y = (e.clientY - rect.top / (rect.bottom - rect.top) * this._canvas.height);
        }

        private static handleMouseClick (e: MouseEvent, state: string): void {
            // console.log(state, this._registeredOnMouseClick);
            for (let func in this._registeredOnMouseClick) this._registeredOnMouseClick[func](state);
        }
    }
}