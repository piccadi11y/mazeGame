namespace MG {

    export class InputHandler {

        private static _keys: {[key:string]: KeyState} = {};

        private constructor () {}

        public static Initialise (): void {
            window.addEventListener('keyup', (e)=>this.HandleKeyUp(e));
            window.addEventListener('keydown', (e)=>this.HandleKeyDown(e));

            this.RegisterKey('ArrowLeft');
            this.RegisterKey('ArrowRight');
            this.RegisterKey('ArrowUp');
            this.RegisterKey('ArrowDown');
            this.RegisterKey('w');
            this.RegisterKey('a');
            this.RegisterKey('a');
            this.RegisterKey('d');
            this.RegisterKey('Escape');
            this.RegisterKey('Enter');
        }

        private static HandleKeyUp (e: KeyboardEvent): void {
            if (this._keys[e.key] === undefined) return;
            if (this._keys[e.key].state === State.RELEASED) return;
            this._keys[e.key].state = State.RELEASED;
            // console.log(e.key, this._keys[e.key].state);
        }

        private static HandleKeyDown (e: KeyboardEvent): void {
            if (this._keys[e.key] === undefined) return;
            if (this._keys[e.key].state === State.PRESSED) return;
            this._keys[e.key].state = State.PRESSED;
            // console.log(e.key, this._keys[e.key].state);
        }

        private static RegisterKey (key: string): void {
            if (this._keys[key] !== undefined) return;
            let k = new KeyState(key);
            this._keys[key] = k;
        }
    }
}