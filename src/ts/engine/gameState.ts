namespace MG {

    enum InputMode {
        UI,
        GAME
    }

    export class GameState {
        private _player: PlayerObject;
        private _activeCamera: CameraObject;
        private _inputMode: InputMode = InputMode.UI;

        public constructor () {

        }

        public get player (): PlayerObject {
            return this._player;
        }

        public set player (player: PlayerObject) {
            this._player = player;
        }

        public get camera (): CameraObject {
            return this._activeCamera;
        }

        public set camera (camera: CameraObject) {
            this._activeCamera = camera;
        }
    }
}