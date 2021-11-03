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

        private constructor () {}

        public static initialise (): void {
            window.addEventListener('keyup', (e)=>this.handleKeyUp(e));
            window.addEventListener('keydown', (e)=>this.handleKeyDown(e));

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
    }
}