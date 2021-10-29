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
        public collisionSide: CollisionSide;

        public constructor (a: oObject, b: oObject, side: CollisionSide) {
            this.objectA = a;
            this.objectB = b;
            this.collisionSide = side;
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

        public checkColliding (collisionObject: CollisionComponent): CollisionResult {
            // TODO // enable collision checking for rotated objects

            let leftA, leftB: number;
            let rightA, rightB: number;
            let topA, topB: number;
            let bottomA, bottomB: number;

            leftA = this._transform.position.x - this._width/2;
            rightA = leftA + this._width;
            topA = this._transform.position.y - this._height/2;
            bottomA = topA + this._height;

            leftB = collisionObject.transform.position.x - collisionObject.width/2;
            rightB = leftB + collisionObject.width;
            topB = collisionObject.transform.position.y - collisionObject.height/2
            bottomB = topB + collisionObject.height;


            if (bottomA <= topB) return undefined;
            if (topA >= bottomB) return undefined;
            if (rightA <= leftB) return undefined;
            if (leftA >= rightB) return undefined;

            let side: CollisionSide = CollisionSide.SUM;

            // TODO // I'm sure this derives from bit shifting binary or something...
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

            return new CollisionResult(this.owner, collisionObject.owner, side);
        }
    }
}