namespace MG {

    export enum CollisionSide {
        X_POS = 1,
        X_NEG = 2,
        Y_NEG = 4,
        Y_POS = 8,
        SUM = X_POS + X_NEG + Y_POS + Y_NEG,
        XY_NEG = X_NEG + Y_NEG,
        X_NEG_Y = X_NEG + Y_POS,
        Y_NEG_X = Y_NEG + X_POS,
        XY_POS = X_POS + Y_POS
    }

    export class CollisionResult {
        public objectA: oObject;
        public objectB: oObject;
        private _rawSide: CollisionSide;
        private _calculatedSide: CollisionSide;
        public separation: Vector2;

        public constructor (a: oObject, b: oObject, side: CollisionSide, separation) {
            this.objectA = a;
            this.objectB = b;
            this._rawSide = side;
            this.separation = separation;

            this._calculatedSide = this.calculateSide();
        }

        private calculateSide (): CollisionSide {
            // calculate probable side based off separation
            if (this._rawSide === CollisionSide.X_POS || this._rawSide === CollisionSide.X_NEG || this._rawSide === CollisionSide.Y_POS || this._rawSide === CollisionSide.Y_NEG) return this._rawSide;

            switch (this._rawSide) {
                case CollisionSide.XY_NEG: return this.separation.x < this.separation.y ? CollisionSide.X_NEG : CollisionSide.Y_NEG;
                case CollisionSide.XY_POS: return this.separation.x < this.separation.y ? CollisionSide.X_POS : CollisionSide.Y_POS;
                case CollisionSide.X_NEG_Y: return this.separation.x < this.separation.y ? CollisionSide.X_NEG : CollisionSide.Y_POS;
                case CollisionSide.Y_NEG_X: return this.separation.x < this.separation.y ? CollisionSide.X_POS : CollisionSide.Y_NEG;
            }

        }

        public get rawSide (): CollisionSide {
            return this._rawSide;
        }

        public get side (): CollisionSide {
            return this._calculatedSide;
        }
    }

    export class CollisionComponent extends BaseComponent {

        private _transform: Transform = new Transform();
        private _width: number;
        private _height: number;

        public constructor (name: string, width: number, height: number, transform: Transform) {
            super(name);

            this._width = width;
            this._height = height;
            this._transform = transform;
        }

        public get transform (): Transform {
            return this._transform;
        }

        public get width (): number {
            return this._width;
        }

        public get height (): number {
            return this._height;
        }
        
        public updateTransform (transform: Transform): void {
            this._transform.copyFrom(transform)
        }

        public checkColliding (collisionObject: CollisionComponent, movement: Vector2 = Vector2.Zero): CollisionResult {
            // TODO // enable collision checking for rotated objects

            let leftA, leftB: number;
            let rightA, rightB: number;
            let topA, topB: number;
            let bottomA, bottomB: number;

            leftA = this._transform.position.x - this._width/2 + movement.x;
            rightA = leftA + this._width + movement.y;
            topA = this._transform.position.y - this._height/2 + movement.x;
            bottomA = topA + this._height + movement.y;

            leftB = collisionObject.transform.position.x - collisionObject.width/2;
            rightB = leftB + collisionObject.width;
            topB = collisionObject.transform.position.y - collisionObject.height/2
            bottomB = topB + collisionObject.height;


            if (bottomA <= topB) return undefined;
            if (topA >= bottomB) return undefined;
            if (rightA <= leftB) return undefined;
            if (leftA >= rightB) return undefined;

            let side: CollisionSide = CollisionSide.SUM;

            // TODO? // I'm sure this derives from bit shifting binary or something...
            if (bottomA > collisionObject.transform.position.y) {
                // then it can't be Y_POS
                side -= CollisionSide.Y_POS;
            }
            if (topA < collisionObject.transform.position.y) {
                // then it can't be Y_NEG
                side -= CollisionSide.Y_NEG;
            }
            if (rightA > collisionObject.transform.position.x) {
                // then it can't be X_POS
                side -= CollisionSide.X_POS;
            }
            if (leftA < collisionObject.transform.position.x) {
                // then it can't be X_NEG
                side -= CollisionSide.X_NEG;
            }


            // TODO // add collision component defined buffer (minimum distance between) here too, so that the object doesn't have to think about defining and calculating it itself
            // TODO // deal with delayed frames somehow, if large dTime smaller collision checks can and will miss
            let sepX, sepY: number;
            if (rightA - leftB < rightB - leftA) sepX = rightA - leftB;
            else sepX = rightB - leftA;
            if (bottomA - topB < bottomB - topA) sepY = bottomA - topB;
            else sepY = bottomB - topA;

            return new CollisionResult(this.owner, collisionObject.owner, side, new Vector2(sepX, sepY));
        }
    }
}