namespace MG {

    export class LevelManager {

        // TODO // expand this to handle management of multiple levels
        private static _currentLevel: Level;

        private static _gameState: GameState;

        private constructor() {}

        public static initialise (): void {
            this._gameState = new GameState();
        }


        public static set currentLevel (level: Level) {
            this._currentLevel = level;
            this._currentLevel.load();
            this._gameState.player.currentLevel = this._currentLevel;
        }

        public static get currentLevel (): Level {
            return this._currentLevel;
        }

        public static update (deltaTime: number): void {
            this._currentLevel.update(deltaTime);
            this._gameState.player.update(deltaTime);
            this._gameState.camera.update(deltaTime)
        }

        public static render (): void {
            this._currentLevel.render();
            this._gameState.player.render(this.camera.cameraComponent.camera);
        }

        public static set player (player: PlayerObject) {
            this._gameState.player = player;
        }

        public static get player (): PlayerObject {
            return this._gameState.player;
        }

        public static set camera (camera: CameraObject) {
            this._gameState.camera = camera;
        }

        public static get camera (): CameraObject {
            // console.log('gamestate:', this._gameState);
            return this._gameState.camera;
        }
    }
}