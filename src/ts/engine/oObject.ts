namespace MG {

    export interface oObjectBuildData {
        
    }

    export class oObject {

        // TODO // Implement _bShouldTick like in ui classes

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

        /**
         * @param name The object's name
         * @param level The level the object is associated with, if applicable
         * @param id The object's id. Leave empty unless intentionally overriding built-in id assignment
         */
        public constructor (name: string, level: Level = undefined, id: number = undefined) {
            this._id = LevelManager.registerObject(this, id);
            this._name = name;
            this._level = level;


            // console.log('Object \'', this._name, '\' has been created with id:', this._id);
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

        public enableCollisionFromSprite (spriteComponentName: string, bIsStatic: boolean = true, collisionType: CollisionType = CollisionType.BLOCKING): void {
            let dimensions: Vector2 = (this.getComponent(spriteComponentName) as SpriteComponent).dimensions;
            this.enableCollision(dimensions.x, dimensions.y, bIsStatic, collisionType);
        }

        public enableCollision (width: number, height: number, bIsStatic: boolean = true, collisionType: CollisionType = CollisionType.BLOCKING): void {
            this._collisionComponent = new CollisionComponent(this._name + 'CollisionComponent', width, height, this._worldTransform!==undefined?this._worldTransform:this._transform, collisionType);
            this._bIsStatic = bIsStatic;
            this._collisionComponent.setOwner(this);
        }

        public disableCollision (): void {
            // TODO // necessary?
            delete this._collisionComponent;
            this._collisionComponent = undefined;
            this._bIsStatic = true;
        }

        public onCollision (collidingObject: oObject): void {}

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

        public getComponents (): BaseComponent[] {
            return this._components;
        }

        // TODO // provide overriding load functionality for all classes inheriting from oObject
        public static load (data: oObjectBuildData, level: Level): oObject {
            let obj: oObject = new oObject(level.name + '_' + data['name'], level);

            // create components                        // TODO // yuo may be best off seperating this into seperate functions, or something... this is going to be interesting to handle when dealing with sub-classes
            for (let cD of data['components']) {
                switch (cD['type']) {
                    case 'sprite':
                        obj.addComponent(new SpriteComponent(cD['name'], [cD['texture']], cD['width'], cD['height']));
                        break;
                    case 'collision':
                        if (cD['spriteName'] !== undefined) obj.enableCollisionFromSprite(cD['spriteName'], cD['isStatic']);
                        else obj.enableCollision(cD['width'], cD['height'], cD['isStatic']);
                        break;
                }
            }

            return obj;
        }

        public update (deltaTime: number): void {
            this.updateWorldTransform(this._parent !== undefined ? this._parent.worldTransform : undefined);

            if (this._collisionComponent !== undefined && this._bIsStatic === false) {
                this._collisionComponent.updateTransform(this._worldTransform!==undefined?this._worldTransform:this._transform);
                // TODO // check collisions against other objects? (as in other objects than the player against other non-player objects? maybe...)
            }

            for (let c of this._components) c.update(deltaTime);

            for (let c of this._children) c.update(deltaTime);
        }


        public render (camera: Camera, bDrawDebugs: boolean = false): void {
            for (let c of this._components) c.render(this._worldTransform, camera, bDrawDebugs);

            for (let c of this._children) c.render(camera, bDrawDebugs);

            if (bDrawDebugs) {
                // collision
                if (this._collisionComponent !== undefined) {
                    let tex: Texture = TextureManager.getTexture('collisionDebug');
                    tex.draw(camera, true, true, this._collisionComponent.transform.position.x, this._collisionComponent.transform.position.y, 0, this._collisionComponent.width, this._collisionComponent.height);
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