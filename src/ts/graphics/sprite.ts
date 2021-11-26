namespace MG {

    export enum SpriteAnimationDirection {
        FORWARDS = 1,
        REVERSE = -1
    }

    class SpriteAnimationSettings {
        private _frameCount: number;
        private _currentFrame: number = 0;
        private _bPlaying: boolean = false;
        private _timeToNextFrame: number;
        private _timeBetweenFrames: number;
        private _remainingIterations: number;
        /**The duration of the animation in milliseconds (ms) */
        private _animationDuration: number = 1000;
        public animationDirection: SpriteAnimationDirection = SpriteAnimationDirection.FORWARDS;
        private _iterations: number;

        public constructor (fc: number) {
            this._frameCount = fc;
        }

        public set animationDuration (duration: number) {
            this._animationDuration = duration;
            this._timeBetweenFrames = duration / this._frameCount;
            this._timeToNextFrame = this._timeBetweenFrames;
        }

        public get iterations (): number {
            return this._iterations;
        }

        public set iterations (iterations: number) {
            // TODO // This offset is just a stop-gap for delaing with reverse animations, doesn't allow anim to end of frame 0 currently. Implement better solution
            let offset: number = this.animationDirection === SpriteAnimationDirection.REVERSE?1:0;
            this._iterations = iterations;
            this._remainingIterations = iterations + offset;
        }

        public get isPlaying (): boolean {
            return this._bPlaying;
        }

        public set isPlaying (state: boolean) {
            this._bPlaying = state;
        }

        public get timeToNextFrame (): number {
            return this._timeToNextFrame;
        }

        public set timeToNextFrame (time: number) {
            this._timeToNextFrame = time;
        }

        public get timeBetweenFrames (): number {
            return this._timeBetweenFrames;
        }

        public get currentFrame (): number {
            return this._currentFrame;
        }

        public set currentFrame (index: number) {
            this._currentFrame = index;
        }

        public get remainingIterations (): number {
            return this._remainingIterations;
        }

        public set remainingIterations (count: number) {
            this._remainingIterations = count;
        }

    }

    export class Sprite {

        private _width: number;
        private _height: number;
        private _textures: Texture[] = [];
        private _currentTexture: Texture;
        private _animSettings: SpriteAnimationSettings;


        public constructor (width: number, height: number, textureNames: string[]) {
            this._width = width;
            this._height = height;

            for (let tn of textureNames) if (tn !== undefined) this._textures.push(TextureManager.getTexture(tn))

            this._currentTexture = this._textures[0];
            this._animSettings = new SpriteAnimationSettings(this._textures.length);
        }

        public get width (): number {
            return this._width;
        }

        public get height (): number {
            return this._height;
        }

        public set currentTexture (index: number) {
            let i: number = index >= this._textures.length ? this._textures.length - 1 : index;
            this._currentTexture = this._textures[i];

            this._animSettings.currentFrame = index;
        }

        public get currentTexture (): number {
            // return this._textures.indexOf(this._currentTexture);
            return this._animSettings.currentFrame;
        }

        /**
         * Enables/initialises animation of the sprite
         * @param duration The time, in milliseconds (ms), one play of the animation takes
         * @param playIterations The number of times the animation will loop before finishing. -1 for infinite
         * @param playDirection The direction the animation will play in. Default: Forwards
         */
        public enableAnimation (duration: number, playIterations: number, playDirection: SpriteAnimationDirection = SpriteAnimationDirection.FORWARDS): void {
            this._animSettings = new SpriteAnimationSettings(this._textures.length);
            this._animSettings.animationDuration = duration;
            this._animSettings.animationDirection = playDirection;
            this._animSettings.iterations = playIterations;

            console.log(this._animSettings);
        }

        public startAnimation (): void {
            if (this._animSettings.remainingIterations !== 0) this._animSettings.isPlaying = true;
        }

        public pauseAnimation (): void {
            this._animSettings.isPlaying = false;
        }

        public update (deltaTime: number): void {
            if (this._animSettings && this._textures.length > 1) {
                // animate!!!
                if (!this._animSettings.isPlaying) return;

                this._animSettings.timeToNextFrame -= deltaTime * 1000;
                if (this._animSettings.timeToNextFrame <= 0) {
                    let looped: boolean = false;
                    // if due to change
                    let nextI = this._animSettings.currentFrame += this._animSettings.animationDirection;
                    if (nextI < 0) {
                        nextI = this._textures.length - 1;
                        looped = true;
                    }
                    else if (nextI >= this._textures.length) {
                        nextI = 0;
                        looped = true;
                    }

                    this._currentTexture = this._textures[nextI];

                    this._animSettings.currentFrame = nextI;
                    this._animSettings.timeToNextFrame = this._animSettings.timeBetweenFrames;
                    if (this._animSettings.iterations !== -1 && looped) {
                        this._animSettings.remainingIterations--;
                        if (this._animSettings.remainingIterations === 0) this._animSettings.isPlaying = false;
                    }
                }

            }
        }

        public draw (transform: Transform, camera: Camera, bDrawDebugs: boolean): void {
            this._currentTexture.draw(camera, bDrawDebugs, transform.position.x, transform.position.y, transform.rotation, this._width, this._height);
        }
    }
}