namespace MG {

    export class PlayerObject extends oObject {

        private _movement: Vector2 = Vector2.Zero;
        private _maxSpeed: number = 150;

        public constructor (name: string, texture: object, width: number) {
            super(name, undefined, 0);

            this.addComponent(new SpriteComponent(this.name + 'SpriteComponent', texture['name'], width));
        }

        public set currentLevel (level: Level) {
            this._level = level;
        }

        public get currentLevel (): Level {
            return this._level;
        }

        private consumeMovement (): void {
            let handleResult = (result: BoxCollisionResult) => {
                if (result) result.drawResult(20, 80);
                if (result !== undefined && result.type == CollisionType.BLOCKING) {

                    /*switch (result.side) {
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
                    }*/
                
                    // replacement of the switch
                    if (this._movement.x < 0 && (result.side === CollisionSide.X_NEG)) {
                        if (result.separation.x > 0) this._movement.x += result.separation.x //+ 1;
                        // else this._movement.x = 0;
                        ctx.fillText('X_NEG', 20, 100);
                    }
                    else if (this._movement.x > 0 && (result.side === CollisionSide.X_POS)) {
                        if (result.separation.x > 0) this._movement.x -= result.separation.x //+ 1;
                        // else this._movement.x = 0;
                        ctx.fillText('X_POS', 20, 100);
                    }
                    if (this._movement.y < 0 && (result.side === CollisionSide.Y_NEG)) {
                        let movYPre = this._movement.y;
                        if (result.separation.y > 0) this._movement.y += result.separation.y //+ 1;
                        // else this._movement.y = 0;
                        ctx.fillText('Y_NEG', 20, 100);
                        console.log('- | ' + LevelManager.FRAME + ' | sep.:', result.separation.y, '| movOld.:', movYPre, '| movNew.:', this._movement.y, movYPre + result.separation.y);
                    }
                    else if (this._movement.y > 0 && (result.side === CollisionSide.Y_POS)) {
                        let movYPre = this._movement.y;
                        if (result.separation.y > 0) this._movement.y -= result.separation.y //+ 1;
                        // else this._movement.y = 0;
                        ctx.fillText('Y_POS', 20, 100);
                        console.log('+ | ' + LevelManager.FRAME + ' | sep.:', result.separation.y, '| movOld.:', movYPre, '| movNew.:', this._movement.y, movYPre - result.separation.y);
                    }
                }
            }
            if (this._collisionComponent !== undefined && (this._movement.x !== 0.0 || this._movement.y !== 0.0) && this._level && this._collisionComponent.checkBoxContained(this._level.collisionShape)) {
                // if we're in a level only check for the level's objects
                //if (this._collisionComponent.checkBoxContained(this._level.collisionShape)) {
                    let objs = this._level.rootObject.children.concat(this._level.tiles);
                    for (let o of objs) {
                        if (o.collisionComponent === undefined) break;
                        if (this._movement.x === 0 && this._movement.y === 0) break;        // if player isn't moving, don't bother calculating collisions, may nto be useful if I end up adding mobile obstacles etc
                    
                        handleResult(this._collisionComponent.checkColliding(o.collisionComponent, new Vector2(this._movement.x, this._movement.y)));
                    }
                //} else {
            } else if (this._collisionComponent !== undefined && (this._movement.x !== 0.0 || this._movement.y !== 0.0)) {
                // if we're not contained in one level, check all loaded level's objects
                for (let l of LevelManager.loadedLevels) {
                    let objs = l.rootObject.children.concat(l.tiles);
                    for (let o of objs) {
                        if (o.collisionComponent === undefined) break;
                        if (this._movement.x === 0 && this._movement.y === 0) break;        // if player isn't moving, don't bother calculating collisions, may nto be useful if I end up adding mobile obstacles etc

                        
                        handleResult(this._collisionComponent.checkColliding(o.collisionComponent, new Vector2(this._movement.x, this._movement.y)));
                    }
                }
            }
            // TODO // if applicable, call objects' corresponding on collision/hit functions
        
            
            this.position.x += this._movement.x;
            this.position.y += this._movement.y;
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

            ctx.fillStyle = 'red';
            ctx.fillText('movement: ' + this._movement.x + ', ' + this._movement.y, 20, 120);
            ctx.fillText('position: ' + this.position.x + ', ' + this.position.y, 20, 140);
            
        }

        public enableCollisionFromSprite (): void {
            super.enableCollisionFromSprite(this.name + 'SpriteComponent', false);
        }
    }
}