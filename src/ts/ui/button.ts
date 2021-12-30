/// <reference path='userInterfaceElement.ts'/>

namespace MG {

    enum ButtonTextureState {
        INACTIVE = 0,
        HOVER = 1,
        DOWN = 2
    }

    export class Button extends UserInterfaceElement {

        private _label: Label;
        private _collisionComponent: CollisionComponent;
        private _bClickRegistered: boolean = false;
        private _bMouseDown: boolean = false;
        private _onClickFunction: Function = () => console.log('No on-click logic');

        public constructor (name: string, width: number, height: number) {
            super(name, width, height);

            this._bShouldTick = true;
            this._collisionComponent = new CollisionComponent(name + 'CollisionComponent', width, height, this.transform, CollisionType.NON_BLOCKING);
            this._label = new Label(name  + 'Label', width, height);
            this._children.push(this._label);
            this._label.textAlignment = TextAlignment.CENTRE;
            this._label.colour = 'orange';
            this._label.value = '';
            this._label.pos(this.position.x, this.position.y);
        }

        public set value (value: string) {
            this._label.value = value;
        }
        public set font (font: string) {
            this._label.font = font;
        }
        public set colour (colour: string) {
            this._label.colour = colour;
        }

        public set onClickFunction(func: Function) {
            this._onClickFunction = func;
        }

        public setTextures (baseColours: Colour[], textureNames?: string[]): void {
            // logic
            let texNames: string[] = ['','',''];
            if (textureNames) {
                let texName: string;
                for (let i = 0; i < 3; i++) {
                    if (textureNames[i] === '') {
                        texName = 'btn' + baseColours[i].toString();
                        if (!TextureManager.getTexture(texName)) TextureManager.addTexture(new Texture(texName, 1, 1, baseColours[i]));
                        texNames[i] = texName;
                    } else texNames[i] = textureNames[i];
                }
            } else {
                let texName: string;
                for (let i = 0; i < 3; i++) {
                    texName = 'btn' + baseColours[i].toString();
                    if (!TextureManager.getTexture(texName)) TextureManager.addTexture(new Texture(texName, 1, 1, baseColours[i]));
                    texNames[i] = texName;
                }
            }
            this.setSprite(texNames);
            // console.log(texNames);
        }

        public onClick (state: string): void {
            switch (state) {
                case 'mousedown': this._bMouseDown = true; break;
                case 'mouseup': 
                    this._bMouseDown = false;
                    this._onClickFunction();
                    break;
            }
        }

        public update (deltaTime: number): void {
            super.update(deltaTime);

            let bMouseOver = this._collisionComponent.checkPointWithin(InputHandler.mousePosition, false);

            if (bMouseOver && !this._bClickRegistered && !this._bMouseDown) {
                this.sprite.currentTexture = ButtonTextureState.HOVER;
                InputHandler.registerMouseClick(this.name, this.onClick.bind(this));
                this._bClickRegistered = true;
            } else if (bMouseOver && this._bClickRegistered && !this._bMouseDown) {
                this.sprite.currentTexture = ButtonTextureState.HOVER;
            } else if (!bMouseOver && this._bClickRegistered && !this._bMouseDown) {
                this.sprite.currentTexture = ButtonTextureState.INACTIVE;
                InputHandler.deregisterMouseClick(this.name);
                this._bClickRegistered = false;
            } else if (this._bMouseDown) this.sprite.currentTexture = ButtonTextureState.DOWN;
        }

        public render (camera: Camera): void {
            super.render(camera);
        }

    }
}