namespace MG {

    export enum State {
        PRESSED,
        RELEASED
    }

    export class KeyState {

        private _key: string;
        private _state: State = State.RELEASED;

        public constructor (key: string) {
            this._key = key;
        }

        public get state (): State {
            return this._state;
        }

        public set state (value: State) {
            this._state = value;
        }
    }
}