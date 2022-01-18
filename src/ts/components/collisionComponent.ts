/// <reference path="baseComponent.ts"/>

namespace MG {

    export interface ICollisionComponentBuildData extends IBaseComponentBuildData {
        width: number,
        height: number,
        bStatic: boolean,
        spriteName: string
    }

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

    export enum CollisionType {
        BLOCKING,
        NON_BLOCKING
    }

    export class BoxCollisionResult {
        public objectA: oObject;
        public objectB: oObject;
        private _rawSide: CollisionSide;
        private _calculatedSide: CollisionSide;
        public separation: Vector2;
        public type: CollisionType;

        public constructor (a: oObject, b: oObject, side: CollisionSide, separation, type: CollisionType) {
            this.objectA = a;
            this.objectB = b;
            this._rawSide = side;
            this.separation = separation;
            this.type = type;

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

        public drawResult (x: number, y: number, colour: string = 'violet'): void {
            let output: string = `${this.objectA.name} is colliding with ${this.objectB.name} on side ${CollisionSide[this.side]} with separation of ${this.separation.x}, ${this.separation.y}`;
            ctx.fillStyle = colour;
            ctx.fillText(output, x, y);
        }
    }

    export class PointInBoxResult {
        private _placeholder: string = 'pibr_placeholder'
    }

    export class CollisionComponent extends BaseComponent {

        private _transform: Transform = new Transform();
        private _width: number;
        private _height: number;
        private _collisionType: CollisionType;

        public constructor (name: string, width: number, height: number, transform: Transform, type: CollisionType) {
            super(name);

            this._width = width;
            this._height = height;
            this._transform = transform;
            this._collisionType = type;
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

        public get collisionType (): CollisionType {
            return this._collisionType;
        }
        
        public updateTransform (transform: Transform): void {
            this._transform.copyFrom(transform)
        }

        public checkColliding (collisionObject: CollisionComponent, movement: Vector2 = Vector2.Zero): BoxCollisionResult {
            // TODO // enable collision checking for rotated objects

            let leftA, leftB: number;
            let rightA, rightB: number;
            let topA, topB: number;
            let bottomA, bottomB: number;

            leftA = this._transform.position.x - this._width/2 + movement.x;
            // rightA = leftA + this._width + movement.y; // no way... #2
            // rightA = leftA + this._width + movement.x; // no way... #3
            rightA = leftA + this._width;
            // topA = this._transform.position.y - this._height/2 + movement.x; // no way...
            topA = this._transform.position.y - this._height/2 + movement.y;
            // bottomA = topA + this._height + movement.y; // no way... #4
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


            // TODO // deal with delayed frames somehow, if large dTime smaller collision checks can and will miss
            let sepX, sepY: number;
            if (rightA - leftB < rightB - leftA) sepX = rightA - leftB;
            else sepX = rightB - leftA;
            if (bottomA - topB < bottomB - topA) sepY = bottomA - topB;
            else sepY = bottomB - topA;

            return new BoxCollisionResult(this.owner, collisionObject.owner, side, new Vector2(sepX, sepY), collisionObject.collisionType);
        }

        public checkPointWithin (point: Vector2, bCentre: boolean = true): PointInBoxResult {
            let left, right, top, bottom: number;
            // left = this._transform.position.x - this._width/2;
            left = this._transform.position.x;
            // top = this._transform.position.y - this._height/2;
            top = this._transform.position.y;

            if (bCentre) {
                left -= this._width/2;
                top -= this._height/2;
            }
            
            right = left + this._width;
            bottom = top + this._height;

            if (point.x < left) return undefined;
            if (point.x > right) return undefined;
            if (point.y < top) return undefined;
            if (point.y > bottom) return undefined;

            return new PointInBoxResult();
        }

        public checkBoxContained (containingBox: CollisionComponent, bCentre: boolean = true): boolean {
            let leftA, leftB, rightA, rightB, topA, topB, bottomA, bottomB: number;

            /*leftA = this._transform.position.x - this._width/2;
            rightA = leftA + this._width;
            topA = this._transform.position.y - this._height/2;
            bottomA = topA + this._height;

            leftB = containingBox.transform.position.x - containingBox.width/2;
            rightB = leftB + containingBox.width;
            topB = containingBox.transform.position.y - containingBox.height/2;
            bottomB = topB + containingBox.height;*/

            // this possibly works, hasn't been tested
            leftA = this._transform.position.x;
            topA = this._transform.position.y;
            leftB = containingBox.transform.position.x;
            topB = containingBox.transform.position.y

            if (bCentre) {
                leftA -= this._width/2;
                topA -= this._height/2;
                leftB -= containingBox.width/2;
                topB -= containingBox.height/2;
            }

            rightA = leftA + this._width;
            bottomA = topA + this._height;
            rightB = leftB + containingBox.width;
            bottomB = topB + containingBox.height;



            if (bottomA < bottomB && topA > topB && leftA > leftB && rightA < rightB) return true;


            return false;
        }
    }
}