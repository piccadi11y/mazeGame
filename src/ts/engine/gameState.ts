namespace MG {

    enum InputMode {
        UI,
        GAME
    }

    export class GameState {
        private _player: PlayerObject;
        private _playerCamera: CameraObject;
        private _inputMode: InputMode = InputMode.UI;
        private _loadedObjects: {[id: number]: oObject} = {};
        private _currentLoadedObjects: number = 0;
        private _maxLoadedObjects: number;

        public constructor (maxObjects: number) {
            this._maxLoadedObjects = maxObjects;
        }

        public get player (): PlayerObject {
            return this._player;
        }

        public set player (player: PlayerObject) {
            this._player = player;
        }

        public get camera (): CameraObject {
            return this._playerCamera;
        }

        public set camera (camera: CameraObject) {
            this._playerCamera = camera;
        }

        public registerObject (obj: oObject, id: number = undefined): number {
            if (id !== undefined) {
                switch (id) {
                    case 0: this._player = (obj as PlayerObject);break;
                    case 1: this._playerCamera = (obj as CameraObject);break;
                }
                this._loadedObjects[id] = obj;
                this._currentLoadedObjects++

                return id;
            }
            if (this._currentLoadedObjects >= this._maxLoadedObjects) {
                // object is still going to exist as the rest of the code can see/use it, but future logic requiring the use of id's will not consider it valid
                console.warn('Maximum number of objects already loaded, consider', obj.name, 'unloaded');    
                return -1;
            }
            for (let i = 0; i < this._maxLoadedObjects; i++) {
                if (this._loadedObjects[i] === undefined) {
                    this._loadedObjects[i] = obj;
                    this._currentLoadedObjects++;
                    return i;
                }
            }

            return -2; // fail state
        }

        public deregisterObject (oID: number): void {
            this._loadedObjects[oID] = undefined;
            this._currentLoadedObjects--;
        }
    }
}