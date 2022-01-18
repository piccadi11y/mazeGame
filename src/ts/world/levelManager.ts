namespace MG {

    export class LevelGridPosition {
        public pos: Vector2;
        public level: Level;

        constructor (x: number, y: number, levelRef: Level) {
            this.pos = new Vector2(x, y);
            this.level = levelRef;
        }
    }

    export class LevelManager {

        public static FRAME: number = 0;

        private static _currentLevel: Level;
        private static _loadedLevels: Level[] = [];
        private static _activeLevels: Level[] = [];
        private static _levelGrid: LevelGridPosition[] = [];
        private static _nextLevelCoords: Vector2 = Vector2.Zero;
        private static _currentLevelCoords: Vector2 = Vector2.Zero;

        private static _spawnStart: SpawnPoint;
        private static _spawnCurrent: SpawnPoint;

        private static _gameState: GameState;

        private static _bDrawDebugs: boolean = false;

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

        public static set bDrawDebugs (draw: boolean) {
            LevelManager._bDrawDebugs = draw;
        }
        public static get bDrawDebugs (): boolean {
            return LevelManager._bDrawDebugs;
        }

        public static get currentLevel (): Level {
            return this._currentLevel;
        }

        public static get loadedLevels (): Level[] {
            return this._loadedLevels;
        }

        public static get activeLevels (): Level[] {
            return this._activeLevels;
        }

        public static registerSpawn (sp: SpawnPoint): void {
            this._spawnStart = sp;
            this.currentLevel = this._spawnStart.level;
            if (!this._spawnCurrent) this._spawnCurrent = sp;
        }

        public static setCheckpoint (cp: SpawnPoint): void {
            this._spawnCurrent.disable();
            this._spawnCurrent = cp;
            this._spawnCurrent.enable();
        }

        public static spawnPlayer (): void {
            this.currentLevel = this._spawnCurrent.level;
            this._gameState.player.position.copyFrom(this._spawnCurrent.worldTransform.position);
        }

        // temporary game-loop
        public static restart (): void {
            if (this._spawnCurrent.type === SpawnPointType.CHECKPOINT) this._spawnCurrent.disable();
            this._spawnCurrent = this._spawnStart;
            this.spawnPlayer();
        }

        public static pause (): void {
            this._gameState.pause();
        }

        public static unpause (): void {
            this._gameState.unpause();
        }

        public static get isPaused (): boolean {
            return this._gameState.bIsPaused;
        }

        public static update (deltaTime: number): void {
            if (!this._gameState.bIsPaused) {
                for (let l of this._activeLevels) l.update(deltaTime);
                this._gameState.player.update(deltaTime);
                this._gameState.camera.update(deltaTime);
            }

            // handle current level detection
            for (let l of this._activeLevels) {
                if (l.checkHasPlayer(this._gameState.player.position)) {
                    this._currentLevel = l;
                    this._gameState.player.currentLevel = l;
                    this._currentLevelCoords = new Vector2(l.location.x/l.width, l.location.y/l.height)
                    break;
                }
            }

            // generate/update _activeLevels
            let calcDir: Vector2 = new Vector2(LevelManager.player.position.x < LevelManager.currentLevel.centre.x ? -1 : 1,LevelManager.player.position.y < LevelManager.currentLevel.centre.y ? -1 : 1);
            if (this._nextLevelCoords.x - this._currentLevelCoords.x !== calcDir.x || this._nextLevelCoords.y - this._currentLevelCoords.y !== calcDir.y) {
                this._nextLevelCoords = new Vector2(calcDir.x + this._currentLevelCoords.x, calcDir.y + this._currentLevelCoords.y);
                let newAL: Level[] = [this._currentLevel];
                for (let lg of this._levelGrid) {
                    if ((lg.pos.x === this._nextLevelCoords.x && lg.pos.y === this._currentLevelCoords.y) ||
                        (lg.pos.x === this._currentLevelCoords.x && lg.pos.y === this._nextLevelCoords.y) ||
                        (lg.pos.x === this._nextLevelCoords.x && lg.pos.y === this._nextLevelCoords.y)) newAL.push(lg.level);
                }
                this._activeLevels = newAL;
                // console.log('nxt:', this._nextLevelCoords, 'calc:', calcDir);
            }


        }

        public static render (): void {
            for (let l of this._activeLevels) l.render(this._bDrawDebugs);
            this._gameState.player.render(this.camera, this._bDrawDebugs);
        }

        public static get player (): PlayerObject {
            return this._gameState.player;
        }

        public static get cameraObject (): CameraObject {
            // console.log('gamestate:', this._gameState);
            return this._gameState.camera;
        }

        public static get camera (): Camera {
            return this.cameraObject.cameraComponent.camera;
        }

        public static registerObject (o: oObject, id: number = undefined): number {
            return this._gameState.registerObject(o, id);
        }

        public static deregisterObject (oID: number): void {
            this._gameState.deregisterObject(oID);
        }

        private static loadLevel (level: ILevelBuildData): void {
            let l: Level = Level.load(level);
            LevelManager._loadedLevels.push(l);
        }

        public static load (levels: ILevelBuildData[]): void {
            for (let ld of levels) this._loadedLevels.push(Level.load(ld));
            for (let l of this._loadedLevels) this._levelGrid.push(new LevelGridPosition(l.location.x/l.width, l.location.y/l.height, l));
            // so the logic has something to work with on frame 0
            this._activeLevels.push(this._spawnStart.level);
        }

    }
}