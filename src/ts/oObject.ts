namespace MG {

    export class oObject {


        private _id: number;
        private _children: oObject[] = [];
        private _parent: oObject;
        private _components: BaseComponent[] = [];
        private _transform: Transform = new Transform();
        private _worldTransform: Transform = new Transform();
        private _name: string;

        public constructor (id: number, name: string) {
            this._id = id;
            this._name = name;
        }

        public get id (): number {
            return this._id;
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
            this._transform.position.CopyFrom(pos);
        }

        public get worldTransform (): Transform {
            return this._worldTransform;
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

            for (let c of this._components) c.update(deltaTime);

            for (let c of this._children) c.update(deltaTime);
        }


        public render (camera: Camera): void {
            for (let c of this._components) c.render(this._worldTransform, camera);

            for (let c of this._children) c.render(camera);
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