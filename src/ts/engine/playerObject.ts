namespace MG {

    export class PlayerObject extends oObject {

        private _movement: Vector2 = Vector2.Zero;
        private _maxSpeed: number = 150;

        public set currentLevel (level: Level) {
            this._level = level;
        }

        public get currentLevel (): Level {
            return this._level;
        }

        public update (deltaTime: number): void {

            super.update(deltaTime);

            // TODO // this needs to be seperated into seperate functions, handlers for the keypresses that modify the x and y vels (stored as privs) to be applied rather than running each frame
            // obviously not production ready movement logic, but good enough for testing
            // TODO // eventually add this logic to the player object once i enable custom on update functions for all oObjects (so they can be extended for the game)
            let xDir = (() => {
                let aR = InputHandler.getKey(Keys.ARROW_RIGHT).state === State.PRESSED? 1 : 0;
                let aL = InputHandler.getKey(Keys.ARROW_LEFT).state === State.PRESSED? 1 : 0;
                return aR - aL;
            })()
            let yDir = (() => {
                let aU = InputHandler.getKey(Keys.ARROW_UP).state === State.PRESSED? 1 : 0;
                let aD = InputHandler.getKey(Keys.ARROW_DOWN).state === State.PRESSED? 1 : 0;
                return aD - aU;
            })()
            this._movement.x = xDir * (yDir*yDir?this._maxSpeed*.71:this._maxSpeed) * deltaTime;
            this._movement.y = yDir * (xDir*xDir?this._maxSpeed*.71:this._maxSpeed) * deltaTime;

            this.consumeMovement();
            
        }

        private consumeMovement (): void {
            if (this._collisionComponent !== undefined && (this._movement.x !== 0.0 || this._movement.y !== 0.0)) {
                for (let o of this._level.rootObject.children) {
                    if (o.collisionComponent === undefined) break;
                
                    let result: CollisionResult = this._collisionComponent.checkColliding(o.collisionComponent, new Vector2(this._movement.x, this._movement.y));
                    if (result !== undefined) {

                        switch (result.side) {
                            case CollisionSide.X_NEG: 
                                if (this._movement.x < 0) this._movement.x = 0;
                                break;
                            case CollisionSide.X_POS:
                                if (this._movement.x > 0) this._movement.x = 0;
                                break;
                            case CollisionSide.Y_NEG:
                                if (this._movement.y < 0) this._movement.y = 0;
                                break;
                            case CollisionSide.Y_POS:
                                if (this._movement.y > 0) this._movement.y = 0;
                                break;
                        }
                    
                        // TODO // if applicable, call objects' corresponding on collision/hit functions
                    }
                }
            }

            this.position.x += this._movement.x;
            this.position.y += this._movement.y;
        }
    }
}