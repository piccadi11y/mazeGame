namespace MG {

    export class PlayerObject extends oObject {


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
            let velX = xDir * 100 * deltaTime;
            let velY = yDir * 100 * deltaTime;

    
            // TODO // move this to it's own function to handle movement safely, that checks collisions and modifies the class' priv vel x and y
            if (this._collisionComponent !== undefined) {
                for (let o of this._level.rootObject.children) {
                    if (o.collisionComponent === undefined) break;

                    let result: CollisionResult = this._collisionComponent.checkColliding(o.collisionComponent);
                    if (result !== undefined) {
                        // TODO // move this logic into a dedicated handle collision function?

                        // TODO // modify movement logic so the player doesn't get stuck on corners     --------------------------------------------------------------------- FIX!!
                        // perhaps check location + movement, so that the player never gets the chance to get stuck on a corner?
                        switch (result.collisionSide) {
                            case CollisionSide.X_NEG: if (velX < 0) velX = 0; break;
                            case CollisionSide.X_POS: if (velX > 0) velX = 0; break;
                            case CollisionSide.Y_NEG: if (velY < 0) velY = 0; break;
                            case CollisionSide.Y_POS: if (velY > 0) velY = 0; break;
                            case CollisionSide.XY_NEG: if (velX < 0) velX = 0; if (velY < 0) velY = 0; break;
                            case CollisionSide.XY_POS: if (velX > 0) velX = 0; if (velY > 0) velY = 0; break;
                            case CollisionSide.X_NEG_Y: if (velX < 0) velX = 0; if ( velY > 0) velY = 0; break;
                            case CollisionSide.Y_NEG_X: if (velX > 0) velX = 0; if (velY < 0) velY = 0; break;
                        }

                        // TODO // if applicable, call objects' corresponding on collision/hit functions
                    }
                }
            }

            this.position.x += velX;
            this.position.y += velY;

        }
    }
}