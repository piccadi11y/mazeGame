namespace MG {

    export class oObject {


        private _id: number;
        private _name: string;
        private _children: oObject[] = [];
        private _parent: oObject;
        private _components: BaseComponent[] = [];
        protected _collisionComponent: CollisionComponent = undefined;
        private _transform: Transform = new Transform();
        private _worldTransform: Transform = new Transform();
        protected _level: Level;

        // don't bother updating collisions if so
        private _bIsStatic: boolean = true;

        public constructor (id: number, name: string, level: Level = undefined) {
            this._id = id;
            this._name = name;
            this._level = level;

        }

        public get id (): number {
            return this._id;
        }

        public get name (): string {
            return this._name;
        }

        public get parent (): oObject {
            return this._parent;
        }

        public set parent (parent: oObject) {
            this._parent = parent;
        }

        public get rotation (): number {
            return this._transform.rotation;
        }

        public set rotation (degrees: number) {
            this._transform.rotation = degrees;
        }

        public get position (): Vector2 {
            return this._transform.position;
        }

        public set position (pos: Vector2) {
            this._transform.position.copyFrom(pos);
        }

        public get worldTransform (): Transform {
            return this._worldTransform;
        }

        public get level (): Level {
            return this._level;
        }

        public get isStatic (): boolean {
            return this._bIsStatic;
        }

        public get children (): oObject[] {
            return this._children;
        }

        public get collisionComponent (): CollisionComponent {
            return this._collisionComponent;
        }

        public setIsStatic (bIsStatic: boolean): void {
            this._bIsStatic = bIsStatic;
        }

        public addChild (child: oObject) {
            child.parent = this;
            this._children.push(child)
        }

        public removeChild(child: oObject) {
            let index = this._children.indexOf(child);
            if (index !== -1) {
                child.parent = undefined;
                this._children.splice(index, 1);
            }
        }

        public enableCollisionFromSprite (spriteName: string, bIsStatic: boolean = true): void {
            let dimensions: Vector2 = (this.getComponent(spriteName) as SpriteComponent).dimensions;
            this._collisionComponent = new CollisionComponent(this._name + 'CollisionComponent', dimensions.x, dimensions.y, this._worldTransform!==undefined?this._worldTransform:this._transform);
            this._bIsStatic = bIsStatic;
            this._collisionComponent.setOwner(this);
        }

        public enableCollision (width: number, height: number, bIsStatic: boolean = true): void {
            this._collisionComponent = new CollisionComponent(this._name + 'CollisionComponent', width, height, this._worldTransform!==undefined?this._worldTransform:this._transform);
            this._bIsStatic = bIsStatic;
            this._collisionComponent.setOwner(this);
        }

        public disableCollision (): void {
            // TODO // necessary?
            delete this._collisionComponent;
            this._collisionComponent = undefined;
            this._bIsStatic = true;
        }

        public getObjectByName (name: string): oObject {
            if (this._name === name) return this;

            for (let child of this._children) {
                let result = child.getObjectByName(name);
                if (result !== undefined) return result;
            }

            return undefined;
        }

        public addComponent (component: BaseComponent): void {
            this._components.push(component);
            component.setOwner(this);
        }

        public getComponent (name: string): BaseComponent {
            for (let e of this._components) if (e.name === name) return e;
            return undefined;
        }

        public update (deltaTime: number): void {
            this.updateWorldTransform(this._parent !== undefined ? this._parent.worldTransform : undefined);

            if (this._collisionComponent !== undefined && this._bIsStatic === false) {
                this._collisionComponent.updateTransform(this._worldTransform!==undefined?this._worldTransform:this._transform);
                // TODO // check collisions against other objects?
            }

            for (let c of this._components) c.update(deltaTime);

            for (let c of this._children) c.update(deltaTime);
        }


        public render (camera: Camera, bDrawDebugs: boolean = false): void {
            for (let c of this._components) c.render(this._worldTransform, camera);

            for (let c of this._children) c.render(camera, bDrawDebugs);

            if (bDrawDebugs) {
                // collision
                if (this._collisionComponent !== undefined) {
                    let tex: Texture = TextureManager.getTexture('collisionDebug');
                    tex.draw(this._level.activeCamera.camera, this._collisionComponent.transform.position.x, this._collisionComponent.transform.position.y, 0, this._collisionComponent.width, this._collisionComponent.height);
                }
            
            }
        }

        private updateWorldTransform (parentWorldTransform: Transform): void {

            if (parentWorldTransform !== undefined ) {
                let trans: Transform = new Transform();
                trans.copyFrom(this._transform);
                trans.rotation += parentWorldTransform.rotation;
                trans.position = Vector2.rotate(trans.position, parentWorldTransform.rotation);
                trans.position.x += parentWorldTransform.position.x;
                trans.position.y += parentWorldTransform.position.y;
                this._worldTransform.copyFrom(trans);
            } else this._worldTransform.copyFrom(this._transform);
        }
    }
}