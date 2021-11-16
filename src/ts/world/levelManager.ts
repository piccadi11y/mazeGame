namespace MG {

    export class LevelManager {

        // TODO // expand this to handle management of multiple levels
        private static _currentLevel: Level;
        private static _loadedLevels: Level[] = [];

        private static _gameState: GameState;

        private constructor() {}

        public static initialise (maxObjects: number = 10): void {
            this._gameState = new GameState(maxObjects);
        }


        public static set currentLevel (level: Level) {
            this._currentLevel = level;
            // this._currentLevel.load();

            // not sure this is the best place/way to set this, especially if I plan on updating this during game
            this._gameState.player.currentLevel = this._currentLevel;
        }

        public static get currentLevel (): Level {
            return this._currentLevel;
        }

        public static get loadedLevels (): Level[] {
            return this._loadedLevels;
        }

        public static update (deltaTime: number): void {
            // this._currentLevel.update(deltaTime);
            for (let l of this._loadedLevels) l.update(deltaTime);
            this._gameState.player.update(deltaTime);
            this._gameState.camera.update(deltaTime);

            // handle current level detection
            let cl: Level = undefined;
            for (let l of this._loadedLevels) {
                if (l.checkHasPlayer(this._gameState.player.position)) {
                    cl = l;
                    break;
                }
            }
            this._currentLevel = cl;
            this._gameState.player.currentLevel = cl;

        }

        public static render (): void {
            // this._currentLevel.render();
            for (let l of this._loadedLevels) l.render();
            this._gameState.player.render(this.camera.cameraComponent.camera);
        }

        public static get player (): PlayerObject {
            return this._gameState.player;
        }

        public static get camera (): CameraObject {
            // console.log('gamestate:', this._gameState);
            return this._gameState.camera;
        }

        public static registerObject (o: oObject, id: number = undefined): number {
            return this._gameState.registerObject(o, id);
        }

        public static deregisterObject (oID: number): void {
            this._gameState.deregisterObject(oID);
        }


        public static loadLevel (level: object): void {
            let l: Level = Level.load(level);
            LevelManager._loadedLevels.push(l);
            LevelManager.currentLevel = l;
        }

    }
}