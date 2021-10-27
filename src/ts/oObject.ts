namespace MG {

    export class oObject {


        private _id: number;
        private _children: oObject[] = [];
        private _parent: oObject;
        private _components: BaseComponent[] = [];
        private _transform: Transform = new Transform();
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

        public update (deltaTime: number): void {
            // this._localMatrix = this.transform.GetTransformationMatrix();
            // this.UpdateWorldMatrix((this._parent !== undefined) ? this._parent.worldMatrix : undefined);

            for (let c of this._components) c.update(deltaTime);

            for (let c of this._children) c.update(deltaTime);
        }


        public render (): void {
            for (let c of this._components) c.render(this._transform);

            for (let c of this._children) c.render();
        }
    }
}