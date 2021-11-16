var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Assets;
(function (Assets) {
    var Objects;
    (function (Objects) {
        Objects.e = 'oof';
        Objects.testLevelCentre = {
            "name": "testLevelCentre",
            "components": [
                {
                    "type": "sprite",
                    "name": "centreSprite",
                    "texture": "testObjectTexture",
                    "width": 50
                },
                {
                    "type": "collision",
                    "spriteName": "centreSprite",
                    "width": undefined,
                    "height": undefined,
                    "isStatic": true
                }
            ]
        };
    })(Objects = Assets.Objects || (Assets.Objects = {}));
})(Assets || (Assets = {}));
(function (Assets) {
    var Textures;
    (function (Textures) {
        Textures.defaultPlayerTexture = {
            "name": "defaultPlayerTexture",
            "width": 10,
            "height": 10,
            "baseColour": { "r": 0, "g": 0, "b": 255 },
            "layers": [
                {
                    "colour": { "r": 255, "g": 0, "b": 0 },
                    "points": [
                        { "x": 9, "y": 9 },
                        { "x": 3, "y": 5 }
                    ]
                },
                {
                    "colour": { "r": 255, "g": 255, "b": 255 },
                    "points": [
                        { "x": 4, "y": 4 },
                        { "x": 6, "y": 9 }
                    ]
                }
            ]
        };
        Textures.testObjectTexture = {
            "name": "testObjectTexture",
            "width": 1,
            "height": 1,
            "baseColour": { "r": 0, "g": 255, "b": 0 },
            "layers": undefined
        };
        Textures.loadList = [
            Textures.defaultPlayerTexture,
            Textures.testObjectTexture
        ];
    })(Textures = Assets.Textures || (Assets.Textures = {}));
})(Assets || (Assets = {}));
(function (Assets) {
    var Levels;
    (function (Levels) {
        // TODO // implement level loading
        Levels.testLevel = {
            "name": "testLevel",
            "width": 1000,
            "height": 1000,
            "gridSize": 50,
            "colour": "white",
            "xPos": 0,
            "yPos": 0,
            "levelCollisions": [true, true, true, true]
        };
    })(Levels = Assets.Levels || (Assets.Levels = {}));
})(Assets || (Assets = {}));
window.onload = function () {
    var engine = new MG.Engine('GameCanvas');
    engine.Start();
};
var MG;
(function (MG) {
    var BaseComponent = /** @class */ (function () {
        function BaseComponent(name) {
            this.name = name;
        }
        Object.defineProperty(BaseComponent.prototype, "owner", {
            get: function () {
                return this._owner;
            },
            enumerable: false,
            configurable: true
        });
        BaseComponent.prototype.setOwner = function (obj) {
            this._owner = obj;
        };
        BaseComponent.prototype.load = function () {
        };
        BaseComponent.prototype.update = function (deltaTime) {
        };
        BaseComponent.prototype.render = function (transform, camera) {
        };
        return BaseComponent;
    }());
    MG.BaseComponent = BaseComponent;
})(MG || (MG = {}));
var MG;
(function (MG) {
    var CameraComponent = /** @class */ (function (_super) {
        __extends(CameraComponent, _super);
        function CameraComponent(name, width, height) {
            var _this = _super.call(this, name) || this;
            _this._camera = new MG.Camera();
            _this._target = undefined;
            _this._camera.resizeScreen(width, height);
            return _this;
        }
        Object.defineProperty(CameraComponent.prototype, "camera", {
            get: function () {
                return this._camera;
            },
            enumerable: false,
            configurable: true
        });
        CameraComponent.prototype.setTarget = function (target) {
            this._target = target;
        };
        CameraComponent.prototype.handleResize = function (width, height) {
            this._camera.resizeScreen(width, height);
        };
        CameraComponent.prototype.update = function (deltaTime) {
            _super.prototype.update.call(this, deltaTime);
            if (this._target !== undefined)
                this._owner.worldTransform.copyFrom(this._target.worldTransform);
            this._camera.update(deltaTime, this._owner.worldTransform);
        };
        return CameraComponent;
    }(MG.BaseComponent));
    MG.CameraComponent = CameraComponent;
})(MG || (MG = {}));
var MG;
(function (MG) {
    var CollisionSide;
    (function (CollisionSide) {
        CollisionSide[CollisionSide["X_POS"] = 1] = "X_POS";
        CollisionSide[CollisionSide["X_NEG"] = 2] = "X_NEG";
        CollisionSide[CollisionSide["Y_NEG"] = 4] = "Y_NEG";
        CollisionSide[CollisionSide["Y_POS"] = 8] = "Y_POS";
        CollisionSide[CollisionSide["SUM"] = 15] = "SUM";
        CollisionSide[CollisionSide["XY_NEG"] = 6] = "XY_NEG";
        CollisionSide[CollisionSide["X_NEG_Y"] = 10] = "X_NEG_Y";
        CollisionSide[CollisionSide["Y_NEG_X"] = 5] = "Y_NEG_X";
        CollisionSide[CollisionSide["XY_POS"] = 9] = "XY_POS";
    })(CollisionSide = MG.CollisionSide || (MG.CollisionSide = {}));
    var CollisionResult = /** @class */ (function () {
        function CollisionResult(a, b, side, separation) {
            this.objectA = a;
            this.objectB = b;
            this._rawSide = side;
            this.separation = separation;
            this._calculatedSide = this.calculateSide();
        }
        CollisionResult.prototype.calculateSide = function () {
            // calculate probable side based off separation
            if (this._rawSide === CollisionSide.X_POS || this._rawSide === CollisionSide.X_NEG || this._rawSide === CollisionSide.Y_POS || this._rawSide === CollisionSide.Y_NEG)
                return this._rawSide;
            switch (this._rawSide) {
                case CollisionSide.XY_NEG: return this.separation.x < this.separation.y ? CollisionSide.X_NEG : CollisionSide.Y_NEG;
                case CollisionSide.XY_POS: return this.separation.x < this.separation.y ? CollisionSide.X_POS : CollisionSide.Y_POS;
                case CollisionSide.X_NEG_Y: return this.separation.x < this.separation.y ? CollisionSide.X_NEG : CollisionSide.Y_POS;
                case CollisionSide.Y_NEG_X: return this.separation.x < this.separation.y ? CollisionSide.X_POS : CollisionSide.Y_NEG;
            }
        };
        Object.defineProperty(CollisionResult.prototype, "rawSide", {
            get: function () {
                return this._rawSide;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CollisionResult.prototype, "side", {
            get: function () {
                return this._calculatedSide;
            },
            enumerable: false,
            configurable: true
        });
        return CollisionResult;
    }());
    MG.CollisionResult = CollisionResult;
    var CollisionComponent = /** @class */ (function (_super) {
        __extends(CollisionComponent, _super);
        function CollisionComponent(name, width, height, transform) {
            var _this = _super.call(this, name) || this;
            _this._transform = new MG.Transform();
            _this._width = width;
            _this._height = height;
            _this._transform = transform;
            return _this;
        }
        Object.defineProperty(CollisionComponent.prototype, "transform", {
            get: function () {
                return this._transform;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CollisionComponent.prototype, "width", {
            get: function () {
                return this._width;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CollisionComponent.prototype, "height", {
            get: function () {
                return this._height;
            },
            enumerable: false,
            configurable: true
        });
        CollisionComponent.prototype.updateTransform = function (transform) {
            this._transform.copyFrom(transform);
        };
        CollisionComponent.prototype.checkColliding = function (collisionObject, movement) {
            // TODO // enable collision checking for rotated objects
            if (movement === void 0) { movement = MG.Vector2.Zero; }
            var leftA, leftB;
            var rightA, rightB;
            var topA, topB;
            var bottomA, bottomB;
            leftA = this._transform.position.x - this._width / 2 + movement.x;
            rightA = leftA + this._width + movement.y;
            topA = this._transform.position.y - this._height / 2 + movement.x;
            bottomA = topA + this._height + movement.y;
            leftB = collisionObject.transform.position.x - collisionObject.width / 2;
            rightB = leftB + collisionObject.width;
            topB = collisionObject.transform.position.y - collisionObject.height / 2;
            bottomB = topB + collisionObject.height;
            if (bottomA <= topB)
                return undefined;
            if (topA >= bottomB)
                return undefined;
            if (rightA <= leftB)
                return undefined;
            if (leftA >= rightB)
                return undefined;
            var side = CollisionSide.SUM;
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
            var sepX, sepY;
            if (rightA - leftB < rightB - leftA)
                sepX = rightA - leftB;
            else
                sepX = rightB - leftA;
            if (bottomA - topB < bottomB - topA)
                sepY = bottomA - topB;
            else
                sepY = bottomB - topA;
            return new CollisionResult(this.owner, collisionObject.owner, side, new MG.Vector2(sepX, sepY));
        };
        return CollisionComponent;
    }(MG.BaseComponent));
    MG.CollisionComponent = CollisionComponent;
})(MG || (MG = {}));
var MG;
(function (MG) {
    var SpriteComponent = /** @class */ (function (_super) {
        __extends(SpriteComponent, _super);
        function SpriteComponent(name, textureName, width, height) {
            if (width === void 0) { width = 100; }
            var _this = _super.call(this, name) || this;
            _this._sprite = new MG.Sprite(width, height !== undefined ? height : width, textureName);
            return _this;
        }
        Object.defineProperty(SpriteComponent.prototype, "dimensions", {
            get: function () {
                return new MG.Vector2(this._sprite.width, this._sprite.height);
            },
            enumerable: false,
            configurable: true
        });
        SpriteComponent.prototype.update = function (deltaTime) {
            _super.prototype.update.call(this, deltaTime);
            this._sprite.update(deltaTime);
        };
        SpriteComponent.prototype.render = function (transform, camera) {
            _super.prototype.render.call(this, transform, camera);
            this._sprite.draw(transform, camera);
        };
        return SpriteComponent;
    }(MG.BaseComponent));
    MG.SpriteComponent = SpriteComponent;
})(MG || (MG = {}));
var MG;
(function (MG) {
    var Camera = /** @class */ (function () {
        function Camera() {
            this._view = new MG.Transform();
        }
        Object.defineProperty(Camera.prototype, "view", {
            get: function () {
                var nV = new MG.Transform();
                nV.copyFrom(this._view);
                nV.position.x -= this._screenWidth / 2;
                nV.position.y -= this._screenHeight / 2;
                return nV;
            },
            enumerable: false,
            configurable: true
        });
        Camera.prototype.resizeScreen = function (width, height) {
            this._screenWidth = width;
            this._screenHeight = height;
        };
        Camera.prototype.update = function (deltaTime, view) {
            this._view.copyFrom(view);
        };
        return Camera;
    }());
    MG.Camera = Camera;
})(MG || (MG = {}));
var MG;
(function (MG) {
    var oObject = /** @class */ (function () {
        /**
         * @param name The object's name
         * @param level The level the object is associated with, if applicable
         * @param id The object's id. Leave empty unless intentionally overriding built-in id assignment
         */
        function oObject(name, level, id) {
            if (level === void 0) { level = undefined; }
            if (id === void 0) { id = undefined; }
            this._children = [];
            this._components = [];
            this._collisionComponent = undefined;
            this._transform = new MG.Transform();
            this._worldTransform = new MG.Transform();
            // don't bother updating collisions if so
            this._bIsStatic = true;
            this._id = MG.LevelManager.registerObject(this, id);
            this._name = name;
            this._level = level;
            console.log('Object \'', this._name, '\' has been created with id:', this._id);
        }
        Object.defineProperty(oObject.prototype, "id", {
            get: function () {
                return this._id;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(oObject.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(oObject.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            set: function (parent) {
                this._parent = parent;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(oObject.prototype, "rotation", {
            get: function () {
                return this._transform.rotation;
            },
            set: function (degrees) {
                this._transform.rotation = degrees;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(oObject.prototype, "position", {
            get: function () {
                return this._transform.position;
            },
            set: function (pos) {
                this._transform.position.copyFrom(pos);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(oObject.prototype, "worldTransform", {
            get: function () {
                return this._worldTransform;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(oObject.prototype, "level", {
            get: function () {
                return this._level;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(oObject.prototype, "isStatic", {
            get: function () {
                return this._bIsStatic;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(oObject.prototype, "children", {
            get: function () {
                return this._children;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(oObject.prototype, "collisionComponent", {
            get: function () {
                return this._collisionComponent;
            },
            enumerable: false,
            configurable: true
        });
        oObject.prototype.setIsStatic = function (bIsStatic) {
            this._bIsStatic = bIsStatic;
        };
        oObject.prototype.addChild = function (child) {
            child.parent = this;
            this._children.push(child);
        };
        oObject.prototype.removeChild = function (child) {
            var index = this._children.indexOf(child);
            if (index !== -1) {
                child.parent = undefined;
                this._children.splice(index, 1);
            }
        };
        oObject.prototype.enableCollisionFromSprite = function (spriteName, bIsStatic) {
            if (bIsStatic === void 0) { bIsStatic = true; }
            var dimensions = this.getComponent(spriteName).dimensions;
            this._collisionComponent = new MG.CollisionComponent(this._name + 'CollisionComponent', dimensions.x, dimensions.y, this._worldTransform !== undefined ? this._worldTransform : this._transform);
            this._bIsStatic = bIsStatic;
            this._collisionComponent.setOwner(this);
        };
        oObject.prototype.enableCollision = function (width, height, bIsStatic) {
            if (bIsStatic === void 0) { bIsStatic = true; }
            this._collisionComponent = new MG.CollisionComponent(this._name + 'CollisionComponent', width, height, this._worldTransform !== undefined ? this._worldTransform : this._transform);
            this._bIsStatic = bIsStatic;
            this._collisionComponent.setOwner(this);
        };
        oObject.prototype.disableCollision = function () {
            // TODO // necessary?
            delete this._collisionComponent;
            this._collisionComponent = undefined;
            this._bIsStatic = true;
        };
        oObject.prototype.getObjectByName = function (name) {
            if (this._name === name)
                return this;
            for (var _i = 0, _a = this._children; _i < _a.length; _i++) {
                var child = _a[_i];
                var result = child.getObjectByName(name);
                if (result !== undefined)
                    return result;
            }
            return undefined;
        };
        oObject.prototype.addComponent = function (component) {
            this._components.push(component);
            component.setOwner(this);
        };
        oObject.prototype.getComponent = function (name) {
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var e = _a[_i];
                if (e.name === name)
                    return e;
            }
            return undefined;
        };
        // TODO // provide overriding load functionality for all classes inheriting from oObject
        oObject.load = function (data, level) {
            var obj = new oObject(data['name'], level);
            // create components                        // TODO // yuo may be best off seperating this into seperate functions, or something... this is going to be interesting to handle when dealing with sub-classes
            for (var _i = 0, _a = data['components']; _i < _a.length; _i++) {
                var cD = _a[_i];
                switch (cD['type']) {
                    case 'sprite':
                        obj.addComponent(new MG.SpriteComponent(cD['name'], cD['texture'], cD['width'], cD['height']));
                        break;
                    case 'collision':
                        if (cD['spriteName'] !== undefined)
                            obj.enableCollisionFromSprite(cD['spriteName'], cD['isStatic']);
                        else
                            obj.enableCollision(cD['width'], cD['height'], cD['isStatic']);
                        break;
                }
            }
            return obj;
        };
        oObject.prototype.update = function (deltaTime) {
            this.updateWorldTransform(this._parent !== undefined ? this._parent.worldTransform : undefined);
            if (this._collisionComponent !== undefined && this._bIsStatic === false) {
                this._collisionComponent.updateTransform(this._worldTransform !== undefined ? this._worldTransform : this._transform);
                // TODO // check collisions against other objects? (as in other objects than the player against other non-player objects? maybe...)
            }
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var c = _a[_i];
                c.update(deltaTime);
            }
            for (var _b = 0, _c = this._children; _b < _c.length; _b++) {
                var c = _c[_b];
                c.update(deltaTime);
            }
        };
        oObject.prototype.render = function (camera, bDrawDebugs) {
            if (bDrawDebugs === void 0) { bDrawDebugs = false; }
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var c = _a[_i];
                c.render(this._worldTransform, camera);
            }
            for (var _b = 0, _c = this._children; _b < _c.length; _b++) {
                var c = _c[_b];
                c.render(camera, bDrawDebugs);
            }
            if (bDrawDebugs) {
                // collision
                if (this._collisionComponent !== undefined) {
                    var tex = MG.TextureManager.getTexture('collisionDebug');
                    tex.draw(camera, this._collisionComponent.transform.position.x, this._collisionComponent.transform.position.y, 0, this._collisionComponent.width, this._collisionComponent.height);
                }
            }
        };
        oObject.prototype.updateWorldTransform = function (parentWorldTransform) {
            if (parentWorldTransform !== undefined) {
                var trans = new MG.Transform();
                trans.copyFrom(this._transform);
                trans.rotation += parentWorldTransform.rotation;
                trans.position = MG.Vector2.rotate(trans.position, parentWorldTransform.rotation);
                trans.position.x += parentWorldTransform.position.x;
                trans.position.y += parentWorldTransform.position.y;
                this._worldTransform.copyFrom(trans);
            }
            else
                this._worldTransform.copyFrom(this._transform);
        };
        return oObject;
    }());
    MG.oObject = oObject;
})(MG || (MG = {}));
/// <reference path="oObject.ts"/>
var MG;
(function (MG) {
    var CameraObject = /** @class */ (function (_super) {
        __extends(CameraObject, _super);
        function CameraObject(name, width, height) {
            var _this = _super.call(this, name, undefined, 1) || this;
            _this._cameraComponent = new MG.CameraComponent(name + '_cameraComponent', width, height);
            _this._cameraComponent.setOwner(_this);
            return _this;
        }
        Object.defineProperty(CameraObject.prototype, "cameraComponent", {
            get: function () {
                return this._cameraComponent;
            },
            enumerable: false,
            configurable: true
        });
        CameraObject.prototype.update = function (deltaTime) {
            _super.prototype.update.call(this, deltaTime);
            this._cameraComponent.update(deltaTime);
        };
        return CameraObject;
    }(MG.oObject));
    MG.CameraObject = CameraObject;
})(MG || (MG = {}));
var MG;
(function (MG) {
    var Engine = /** @class */ (function () {
        function Engine(canvasID) {
            var _this = this;
            // private _playerObject: PlayerObject;
            // private _camera: CameraObject;
            // private _testLevel: Level;
            this.FRAME_TIME = 0;
            this.LAST_FRAME = 0;
            window.onresize = function () { return _this.Resize(); };
            this._canvas = MG.Utilities.initialise(canvasID);
            // TODO // ensure onload or something the canvas is resized so it doesn't end up looking squished as it does now. needs investigation
        }
        Engine.prototype.Start = function () {
            MG.TextureManager.load();
            MG.InputHandler.initialise();
            MG.LevelManager.initialise();
            // TODO // eventually move all of this to extended functions outside of the engine (for creating the game without too much hard-coding in the engine)
            MG.TextureManager.addTexture(new MG.Texture('collisionDebug', 1, 1, MG.Colour.red()));
            // TODO // perhaps load all textures at start; create a function in textureManager to create all textures contained in Assets.Textures so all everything else has to do is worry about referencing them but never creating them
            var playerObject = new MG.PlayerObject('player');
            playerObject.addComponent(new MG.SpriteComponent('testPlayerSprite', Assets.Textures.defaultPlayerTexture['name'], 200));
            playerObject.position = new MG.Vector2(-300, 0);
            playerObject.enableCollisionFromSprite('testPlayerSprite', false);
            var camera = new MG.CameraObject('playerCamera', this._canvas.width, this._canvas.height);
            camera.cameraComponent.setTarget(playerObject);
            // LevelManager.player = playerObject;
            // LevelManager.camera = camera;
            MG.LevelManager.currentLevel = new MG.Level('testLevel', 1000, 1000, 50, MG.Colour.white(), 0, 0, [true, true, true, true]);
            this.Resize();
            this.mainLoop();
        };
        Engine.prototype.mainLoop = function () {
            var _this = this;
            this.FRAME_TIME = (performance.now() - this.LAST_FRAME) / 1000;
            // clear
            MG.ctx.fillStyle = 'black';
            MG.ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
            MG.LevelManager.update(this.FRAME_TIME);
            MG.LevelManager.render();
            // ui bits
            var fps = Math.round(1 / this.FRAME_TIME);
            MG.ctx.fillStyle = 'red';
            MG.ctx.fillText(this.FRAME_TIME + "s | FPS: " + fps, 20, 20);
            this.LAST_FRAME = performance.now();
            requestAnimationFrame(function () { return _this.mainLoop(); });
        };
        Engine.prototype.Resize = function () {
            if (this._canvas === undefined)
                return;
            this._canvas.width = this._canvas.clientWidth;
            this._canvas.height = this._canvas.clientHeight;
            if (MG.LevelManager.camera)
                MG.LevelManager.camera.cameraComponent.handleResize(this._canvas.width, this._canvas.height);
        };
        return Engine;
    }());
    MG.Engine = Engine;
})(MG || (MG = {}));
var MG;
(function (MG) {
    var InputMode;
    (function (InputMode) {
        InputMode[InputMode["UI"] = 0] = "UI";
        InputMode[InputMode["GAME"] = 1] = "GAME";
    })(InputMode || (InputMode = {}));
    var GameState = /** @class */ (function () {
        function GameState(maxObjects) {
            this._inputMode = InputMode.UI;
            this._loadedObjects = {};
            this._currentLoadedObjects = 0;
            this._maxLoadedObjects = maxObjects;
        }
        Object.defineProperty(GameState.prototype, "player", {
            get: function () {
                return this._player;
            },
            set: function (player) {
                this._player = player;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GameState.prototype, "camera", {
            get: function () {
                return this._playerCamera;
            },
            set: function (camera) {
                this._playerCamera = camera;
            },
            enumerable: false,
            configurable: true
        });
        GameState.prototype.registerObject = function (obj, id) {
            if (id === void 0) { id = undefined; }
            if (id !== undefined) {
                switch (id) {
                    case 0:
                        this._player = obj;
                        break;
                    case 1:
                        this._playerCamera = obj;
                        break;
                }
                this._loadedObjects[id] = obj;
                this._currentLoadedObjects++;
                return id;
            }
            if (this._currentLoadedObjects >= this._maxLoadedObjects) {
                // object is still going to exist as the rest of the code can see/use it, but future logic requiring the use of id's will not consider it valid
                console.warn('Maximum number of objects already loaded, consider', obj.name, 'unloaded');
                return -1;
            }
            for (var i = 0; i < this._maxLoadedObjects; i++) {
                if (this._loadedObjects[i] === undefined) {
                    this._loadedObjects[i] = obj;
                    this._currentLoadedObjects++;
                    return i;
                }
            }
            return -2; // fail state
        };
        GameState.prototype.deregisterObject = function (oID) {
            this._loadedObjects[oID] = undefined;
            this._currentLoadedObjects--;
        };
        return GameState;
    }());
    MG.GameState = GameState;
})(MG || (MG = {}));
var MG;
(function (MG) {
    var Keys;
    (function (Keys) {
        Keys["ARROW_LEFT"] = "ArrowLeft";
        Keys["ARROW_RIGHT"] = "ArrowRight";
        Keys["ARROW_UP"] = "ArrowUp";
        Keys["ARROW_DOWN"] = "ArrowDown";
        Keys["W"] = "w";
        Keys["A"] = "a";
        Keys["S"] = "a";
        Keys["D"] = "d";
        Keys["ESCAPE"] = "Escape";
        Keys["ENTER"] = "Enter";
    })(Keys = MG.Keys || (MG.Keys = {}));
    var InputHandler = /** @class */ (function () {
        function InputHandler() {
        }
        InputHandler.initialise = function () {
            var _this = this;
            window.addEventListener('keyup', function (e) { return _this.handleKeyUp(e); });
            window.addEventListener('keydown', function (e) { return _this.handleKeyDown(e); });
            this.registerKey('ArrowLeft');
            this.registerKey('ArrowRight');
            this.registerKey('ArrowUp');
            this.registerKey('ArrowDown');
            this.registerKey('w');
            this.registerKey('a');
            this.registerKey('a');
            this.registerKey('d');
            this.registerKey('Escape');
            this.registerKey('Enter');
        };
        InputHandler.handleKeyUp = function (e) {
            if (this._keys[e.key] === undefined)
                return;
            if (this._keys[e.key].state === MG.State.RELEASED)
                return;
            this._keys[e.key].state = MG.State.RELEASED;
            // console.log(e.key, this._keys[e.key].state);
        };
        InputHandler.handleKeyDown = function (e) {
            if (this._keys[e.key] === undefined)
                return;
            if (this._keys[e.key].state === MG.State.PRESSED)
                return;
            this._keys[e.key].state = MG.State.PRESSED;
            // console.log(e.key, this._keys[e.key].state);
        };
        InputHandler.registerKey = function (key) {
            if (this._keys[key] !== undefined)
                return;
            var k = new MG.KeyState(key);
            this._keys[key] = k;
        };
        InputHandler.getKey = function (name) {
            return this._keys[name];
        };
        InputHandler._keys = {};
        return InputHandler;
    }());
    MG.InputHandler = InputHandler;
})(MG || (MG = {}));
var MG;
(function (MG) {
    var State;
    (function (State) {
        State[State["PRESSED"] = 0] = "PRESSED";
        State[State["RELEASED"] = 1] = "RELEASED";
    })(State = MG.State || (MG.State = {}));
    var KeyState = /** @class */ (function () {
        function KeyState(key) {
            this._state = State.RELEASED;
            this._key = key;
        }
        Object.defineProperty(KeyState.prototype, "state", {
            get: function () {
                return this._state;
            },
            set: function (value) {
                this._state = value;
            },
            enumerable: false,
            configurable: true
        });
        return KeyState;
    }());
    MG.KeyState = KeyState;
})(MG || (MG = {}));
var MG;
(function (MG) {
    var PlayerObject = /** @class */ (function (_super) {
        __extends(PlayerObject, _super);
        function PlayerObject(name) {
            var _this = _super.call(this, name, undefined, 0) || this;
            _this._movement = MG.Vector2.Zero;
            _this._maxSpeed = 150;
            return _this;
        }
        Object.defineProperty(PlayerObject.prototype, "currentLevel", {
            get: function () {
                return this._level;
            },
            set: function (level) {
                this._level = level;
            },
            enumerable: false,
            configurable: true
        });
        PlayerObject.prototype.update = function (deltaTime) {
            _super.prototype.update.call(this, deltaTime);
            // TODO // this needs to be seperated into seperate functions, handlers for the keypresses that modify the x and y vels (stored as privs) to be applied rather than running each frame
            // obviously not production ready movement logic, but good enough for testing
            // TODO // eventually add this logic to the player object once i enable custom on update functions for all oObjects (so they can be extended for the game)
            var xDir = (function () {
                var aR = MG.InputHandler.getKey(MG.Keys.ARROW_RIGHT).state === MG.State.PRESSED ? 1 : 0;
                var aL = MG.InputHandler.getKey(MG.Keys.ARROW_LEFT).state === MG.State.PRESSED ? 1 : 0;
                return aR - aL;
            })();
            var yDir = (function () {
                var aU = MG.InputHandler.getKey(MG.Keys.ARROW_UP).state === MG.State.PRESSED ? 1 : 0;
                var aD = MG.InputHandler.getKey(MG.Keys.ARROW_DOWN).state === MG.State.PRESSED ? 1 : 0;
                return aD - aU;
            })();
            this._movement.x = xDir * (yDir * yDir ? this._maxSpeed * .71 : this._maxSpeed) * deltaTime;
            this._movement.y = yDir * (xDir * xDir ? this._maxSpeed * .71 : this._maxSpeed) * deltaTime;
            this.consumeMovement();
        };
        PlayerObject.prototype.consumeMovement = function () {
            if (this._collisionComponent !== undefined && (this._movement.x !== 0.0 || this._movement.y !== 0.0)) {
                for (var _i = 0, _a = this._level.rootObject.children; _i < _a.length; _i++) {
                    var o = _a[_i];
                    if (o.collisionComponent === undefined)
                        break;
                    var result = this._collisionComponent.checkColliding(o.collisionComponent, new MG.Vector2(this._movement.x, this._movement.y));
                    if (result !== undefined) {
                        switch (result.side) {
                            case MG.CollisionSide.X_NEG:
                                if (this._movement.x < 0)
                                    this._movement.x = 0;
                                break;
                            case MG.CollisionSide.X_POS:
                                if (this._movement.x > 0)
                                    this._movement.x = 0;
                                break;
                            case MG.CollisionSide.Y_NEG:
                                if (this._movement.y < 0)
                                    this._movement.y = 0;
                                break;
                            case MG.CollisionSide.Y_POS:
                                if (this._movement.y > 0)
                                    this._movement.y = 0;
                                break;
                        }
                        // TODO // if applicable, call objects' corresponding on collision/hit functions
                    }
                }
            }
            this.position.x += this._movement.x;
            this.position.y += this._movement.y;
        };
        return PlayerObject;
    }(MG.oObject));
    MG.PlayerObject = PlayerObject;
})(MG || (MG = {}));
var MG;
(function (MG) {
    var Utilities = /** @class */ (function () {
        function Utilities() {
        }
        Utilities.initialise = function (id) {
            var canvas;
            if (id !== undefined) {
                canvas = document.getElementById(id);
                if (canvas === undefined)
                    throw new Error('Cannot find a canvas element named' + id);
            }
            else {
                canvas = document.createElement('canvas');
                document.body.appendChild(canvas);
            }
            MG.ctx = canvas.getContext('2d');
            if (MG.ctx === undefined)
                throw new Error('Unable to initialise');
            return canvas;
        };
        return Utilities;
    }());
    MG.Utilities = Utilities;
})(MG || (MG = {}));
var MG;
(function (MG) {
    var Colour = /** @class */ (function () {
        function Colour(r, g, b, a) {
            if (r === void 0) { r = 255; }
            if (g === void 0) { g = 255; }
            if (b === void 0) { b = 255; }
            if (a === void 0) { a = 255; }
            this._r = r;
            this._g = g;
            this._b = b;
            this._a = a;
        }
        Object.defineProperty(Colour.prototype, "r", {
            get: function () {
                return this._r;
            },
            set: function (value) {
                this._r = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Colour.prototype, "g", {
            get: function () {
                return this._g;
            },
            set: function (value) {
                this._g = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Colour.prototype, "b", {
            get: function () {
                return this._b;
            },
            set: function (value) {
                this._b = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Colour.prototype, "a", {
            get: function () {
                return this._a;
            },
            set: function (value) {
                this._a = value;
            },
            enumerable: false,
            configurable: true
        });
        Colour.prototype.hex = function (bAlpha) {
            if (bAlpha === void 0) { bAlpha = false; }
            if (bAlpha)
                return '#' + (this._r > 0 ? this._r.toString(16) : '00') + (this._g > 0 ? this._g.toString(16) : '00') + (this._b > 0 ? this._b.toString(16) : '00') + (this._a > 0 ? this._a.toString(16) : '00');
            return '#' + (this._r > 0 ? this._r.toString(16) : '00') + (this._g > 0 ? this._g.toString(16) : '00') + (this._b > 0 ? this._b.toString(16) : '00');
        };
        Colour.white = function () {
            return new Colour(255, 255, 255, 255);
        };
        Colour.black = function () {
            return new Colour(0, 0, 0, 255);
        };
        Colour.red = function () {
            return new Colour(255, 0, 0, 255);
        };
        Colour.green = function () {
            return new Colour(0, 255, 0, 255);
        };
        Colour.blue = function () {
            return new Colour(0, 0, 255, 255);
        };
        return Colour;
    }());
    MG.Colour = Colour;
})(MG || (MG = {}));
var MG;
(function (MG) {
    var Sprite = /** @class */ (function () {
        function Sprite(width, height, textureName) {
            this._width = width;
            this._height = height;
            this._currentTexture = MG.TextureManager.getTexture(textureName);
            // TODO // add animation/multiple frame support
        }
        Object.defineProperty(Sprite.prototype, "width", {
            get: function () {
                return this._width;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Sprite.prototype, "height", {
            get: function () {
                return this._height;
            },
            enumerable: false,
            configurable: true
        });
        Sprite.prototype.update = function (deltaTime) {
        };
        Sprite.prototype.draw = function (transform, camera) {
            // TODO // take in this object's location at some point too, and time
            this._currentTexture.draw(camera, transform.position.x, transform.position.y, transform.rotation, this._width, this._height);
        };
        return Sprite;
    }());
    MG.Sprite = Sprite;
})(MG || (MG = {}));
var MG;
(function (MG) {
    var TextureFit;
    (function (TextureFit) {
        TextureFit[TextureFit["DEFAULT"] = 0] = "DEFAULT";
        TextureFit[TextureFit["STRETCH"] = 1] = "STRETCH";
        TextureFit[TextureFit["REPEAT"] = 2] = "REPEAT";
    })(TextureFit = MG.TextureFit || (MG.TextureFit = {}));
    var Layer = /** @class */ (function () {
        function Layer() {
            this._points = [];
        }
        Object.defineProperty(Layer.prototype, "colour", {
            get: function () {
                return this._colour;
            },
            set: function (colour) {
                this._colour = colour;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "points", {
            get: function () {
                return this._points;
            },
            enumerable: false,
            configurable: true
        });
        Layer.prototype.addPoint = function (point) {
            this._points.push(point);
        };
        return Layer;
    }());
    var Texture = /** @class */ (function () {
        function Texture(name, width, height, baseColour) {
            if (baseColour === void 0) { baseColour = MG.Colour.white(); }
            this._layers = [];
            this._name = name;
            this._width = width;
            this._height = height;
            this._baseColour = baseColour;
        }
        Object.defineProperty(Texture.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        Texture.prototype.addLayer = function (points, colour) {
            var layer = new Layer();
            layer.colour = colour;
            for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
                var p = points_1[_i];
                layer.addPoint(p);
            }
            this._layers.push(layer);
        };
        // TODO // refactor this abomination
        Texture.prototype.draw = function (camera, _x, _y, rotation, width, height, fit) {
            var _this = this;
            if (rotation === void 0) { rotation = 0; }
            if (fit === void 0) { fit = TextureFit.STRETCH; }
            var x = _x - (width ? width : this._width) / 2 - camera.view.position.x;
            var y = _y - (height ? height : this._height) / 2 - camera.view.position.y;
            var drawBaseRect = function (vec, width, height, rot) {
                var normalised = new MG.Vector2(-(width / 2), -(height / 2));
                var points = [new MG.Vector2(normalised.x, normalised.y), new MG.Vector2(normalised.x + width, normalised.y), new MG.Vector2(normalised.x + width, normalised.y + height), new MG.Vector2(normalised.x, normalised.y + height)];
                points[0] = MG.Vector2.rotate(points[0], rot);
                points[1] = MG.Vector2.rotate(points[1], rot);
                points[2] = MG.Vector2.rotate(points[2], rot);
                points[3] = MG.Vector2.rotate(points[3], rot);
                points[0].x += vec.x + width / 2;
                points[0].y += vec.y + height / 2;
                points[1].x += vec.x + width / 2;
                points[1].y += vec.y + height / 2;
                points[2].x += vec.x + width / 2;
                points[2].y += vec.y + height / 2;
                points[3].x += vec.x + width / 2;
                points[3].y += vec.y + height / 2;
                MG.ctx.fillStyle = _this._baseColour.hex();
                var path = new Path2D();
                path.moveTo(points[0].x, points[0].y);
                path.lineTo(points[1].x, points[1].y);
                path.lineTo(points[2].x, points[2].y);
                path.lineTo(points[3].x, points[3].y);
                path.closePath();
                MG.ctx.fill(path);
            };
            drawBaseRect(new MG.Vector2(x, y), width ? width : this._width, height ? height : this._height, rotation);
            if (this._layers[0] !== undefined) {
                var scaleX = 1;
                var scaleY = 1;
                // does this need defining, or can the commented out logic below work in place?
                if (fit === TextureFit.STRETCH) {
                    scaleX = width / this._width;
                    scaleY = height / this._height;
                }
                // let scaleX: number = width?width / this._width:1;
                // let scaleY: number = height?height / this._height:1;
                if (fit !== TextureFit.REPEAT) {
                    // render with scale and xy offsets!!!
                    for (var _i = 0, _a = this._layers; _i < _a.length; _i++) {
                        var l = _a[_i];
                        MG.ctx.fillStyle = l.colour.hex();
                        var path = new Path2D();
                        for (var _b = 0, _c = l.points; _b < _c.length; _b++) {
                            var p = _c[_b];
                            // this should all be happening in a shader, ik, but I haven't implemented it in webgl yet, so the cpu will have to do...
                            // transform, rotate, scale
                            // TODO // offload some of this logic to layer creation so it isn't being called each draw (maybe just creating the points array??)
                            var bp = new MG.Vector2(-(scaleX / 2), -(scaleY / 2));
                            var points = [new MG.Vector2(bp.x, bp.y), new MG.Vector2(bp.x + scaleX, bp.y), new MG.Vector2(bp.x + scaleX, bp.y + scaleY), new MG.Vector2(bp.x, bp.y + scaleY)];
                            var halfSize = new MG.Vector2(this._width / 2, this._height / 2);
                            points[0].x += ((-halfSize.x + p.x) * scaleX) + scaleX / 2;
                            points[0].y += ((-halfSize.y + p.y) * scaleY) + scaleY / 2;
                            points[1].x += ((-halfSize.x + p.x) * scaleX) + scaleX / 2;
                            points[1].y += ((-halfSize.y + p.y) * scaleY) + scaleY / 2;
                            points[2].x += ((-halfSize.x + p.x) * scaleX) + scaleX / 2;
                            points[2].y += ((-halfSize.y + p.y) * scaleY) + scaleY / 2;
                            points[3].x += ((-halfSize.x + p.x) * scaleX) + scaleX / 2;
                            points[3].y += ((-halfSize.y + p.y) * scaleY) + scaleY / 2;
                            points[0] = MG.Vector2.rotate(points[0], rotation);
                            points[1] = MG.Vector2.rotate(points[1], rotation);
                            points[2] = MG.Vector2.rotate(points[2], rotation);
                            points[3] = MG.Vector2.rotate(points[3], rotation);
                            points[0].x += _x - camera.view.position.x;
                            points[0].y += _y - camera.view.position.y;
                            points[1].x += _x - camera.view.position.x;
                            points[1].y += _y - camera.view.position.y;
                            points[2].x += _x - camera.view.position.x;
                            points[2].y += _y - camera.view.position.y;
                            points[3].x += _x - camera.view.position.x;
                            points[3].y += _y - camera.view.position.y;
                            path.moveTo(points[0].x, points[0].y);
                            path.lineTo(points[1].x, points[1].y);
                            path.lineTo(points[2].x, points[2].y);
                            path.lineTo(points[3].x, points[3].y);
                        }
                        path.closePath();
                        MG.ctx.fill(path);
                    }
                }
                else
                    console.warn('Repeated texture rendering is not yet implemented');
                // 26/10/2021 - 1851: TODO // implment repeat functionality, if needed, otherwise remove option (?)
            }
            // draw object centre for debugging
            MG.ctx.fillStyle = 'orange';
            MG.ctx.fillRect(_x - 2.5 - camera.view.position.x, _y - 2.5 - camera.view.position.y, 5, 5);
        };
        Texture.load = function (data) {
            var temp = new Texture(data['name'], data['width'], data['height'], new MG.Colour(data['baseColour']['r'], data['baseColour']['g'], data['baseColour']['b']));
            if (data['layers'] !== undefined) {
                for (var _i = 0, _a = data['layers']; _i < _a.length; _i++) {
                    var l = _a[_i];
                    var tempPoints = [];
                    for (var _b = 0, _c = l['points']; _b < _c.length; _b++) {
                        var p = _c[_b];
                        tempPoints.push(new MG.Vector2(p['x'], p['y']));
                    }
                    temp.addLayer(tempPoints, new MG.Colour(l['colour']['r'], l['colour']['g'], l['colour']['b']));
                }
            }
            return temp;
        };
        return Texture;
    }());
    MG.Texture = Texture;
})(MG || (MG = {}));
var MG;
(function (MG) {
    var TextureReferenceNode = /** @class */ (function () {
        function TextureReferenceNode(texture) {
            this.referenceCount = 1;
            this.texture = texture;
        }
        return TextureReferenceNode;
    }());
    var TextureManager = /** @class */ (function () {
        function TextureManager() {
        }
        TextureManager.getTexture = function (textureName) {
            if (TextureManager._textures[textureName] === undefined)
                return undefined;
            TextureManager._textures[textureName].referenceCount++;
            return this._textures[textureName].texture;
        };
        TextureManager.addTexture = function (texture) {
            if (TextureManager._textures[texture.name] === undefined)
                TextureManager._textures[texture.name] = new TextureReferenceNode(texture);
            else
                console.warn('A texture by the name of', texture.name, 'already exists.');
        };
        TextureManager.releaseTexture = function (textureName) {
            if (TextureManager._textures[textureName] === undefined)
                console.warn("A texture named " + textureName + " does not exist and therefore cannot be released.");
            else
                TextureManager._textures[textureName].referenceCount--;
        };
        // TODO // load all used textures from Assets.Textures
        TextureManager.load = function () {
            // console.log(Assets.Textures.loadList[0]);
            for (var _i = 0, _a = Assets.Textures.loadList; _i < _a.length; _i++) {
                var t = _a[_i];
                TextureManager.addTexture(MG.Texture.load(t));
            }
        };
        TextureManager._textures = {};
        return TextureManager;
    }());
    MG.TextureManager = TextureManager;
})(MG || (MG = {}));
var MG;
(function (MG) {
    var Vector2 = /** @class */ (function () {
        function Vector2(x, y) {
            if (x === void 0) { x = 0; }
            this._x = x;
            this._y = y !== undefined ? y : x;
        }
        Object.defineProperty(Vector2.prototype, "x", {
            get: function () {
                return this._x;
            },
            set: function (value) {
                this._x = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vector2.prototype, "y", {
            get: function () {
                return this._y;
            },
            set: function (value) {
                this._y = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vector2, "Zero", {
            get: function () {
                return new Vector2();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vector2, "One", {
            get: function () {
                return new Vector2(1, 1);
            },
            enumerable: false,
            configurable: true
        });
        Vector2.prototype.toArray = function () {
            return [this._x, this._y];
        };
        Vector2.prototype.copyFrom = function (vector) {
            this._x = vector._x;
            this._y = vector._y;
        };
        Vector2.rotateRadians = function (vec, radians, bCentered) {
            if (bCentered === void 0) { bCentered = false; }
            return new Vector2(vec.x * Math.cos(radians) - vec.y * Math.sin(radians), vec.x * Math.sin(radians) + vec.y * Math.cos(radians));
        };
        Vector2.rotate = function (vec, degrees, bCentered) {
            if (bCentered === void 0) { bCentered = false; }
            return Vector2.rotateRadians(vec, degrees * (Math.PI / 180), bCentered);
        };
        Vector2.prototype.scale = function (scalarX, scalarY) {
            this._x *= scalarX;
            this._y *= scalarY !== undefined ? scalarY : scalarX;
        };
        Vector2.scale = function (vec, scale, scaleY) {
            return new Vector2(vec.x * scale, vec.y * (scaleY !== undefined ? scaleY : scale));
        };
        return Vector2;
    }());
    MG.Vector2 = Vector2;
})(MG || (MG = {}));
var MG;
(function (MG) {
    var Level = /** @class */ (function () {
        function Level(name, width, height, gridSize, colour, x, y, levelCollisions) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this._transform = new MG.Transform(); // TODO // this will be relevant later when the engine supports multiple levels/streaming
            this._spawnPoint = undefined; // TODO // implement spawn point logic for first entry into new world/game and on death (?)
            this._name = name;
            this._width = width;
            this._height = height;
            this._gridSize = gridSize;
            this._baseColour = colour;
            this._rootObject = new MG.oObject('_ROOT_', this);
            this._bBorderCollisions = levelCollisions;
            this._transform.position.x = x;
            this._transform.position.y = y;
        }
        Level.prototype.generateBorderCollisions = function () {
            var oTemp;
            var borderWidth = 10;
            if (this._bBorderCollisions[0]) {
                oTemp = new MG.oObject('levelCollisionObject_T', this);
                oTemp.enableCollision(this._width, borderWidth);
                oTemp.position.y = -this._height / 2 - borderWidth / 2;
                this._rootObject.addChild(oTemp);
            }
            if (this._bBorderCollisions[1]) {
                oTemp = new MG.oObject('levelCollisionObject_R', this);
                oTemp.enableCollision(borderWidth, this._height);
                oTemp.position.x = this._width / 2 + borderWidth / 2;
                this._rootObject.addChild(oTemp);
            }
            if (this._bBorderCollisions[2]) {
                oTemp = new MG.oObject('levelCollisionObject_B', this);
                oTemp.enableCollision(this._width, borderWidth);
                oTemp.position.y = this._width / 2 + borderWidth / 2;
                this._rootObject.addChild(oTemp);
            }
            if (this._bBorderCollisions[3]) {
                oTemp = new MG.oObject('levelCollisionObject_L', this);
                oTemp.enableCollision(borderWidth, this._height);
                oTemp.position.x = -this._height / 2 - borderWidth / 2;
                this._rootObject.addChild(oTemp);
            }
        };
        Level.prototype.load = function () {
            MG.TextureManager.addTexture(new MG.Texture("LEVEL_" + this._name + "_BASE", 1, 1, this._baseColour));
            this._baseTexture = new MG.Sprite(this._width, this._height, "LEVEL_" + this._name + "_BASE");
            this._rootObject.position = this._transform.position;
            // still loading this here as i haven't implemented texture loading on program start
            // TextureManager.addTexture(Texture.load(Assets.Textures.testObjectTexture))
            var oTemp = MG.oObject.load(Assets.Objects.testLevelCentre, this);
            this._rootObject.addChild(oTemp);
            oTemp = MG.oObject.load(Assets.Objects.testLevelCentre, this);
            oTemp.position.x = 200;
            oTemp.position.y = 100;
            this._rootObject.addChild(oTemp);
            // add level border collisions
            this.generateBorderCollisions();
            // load from obj
        };
        Object.defineProperty(Level.prototype, "rootObject", {
            get: function () {
                return this._rootObject;
            },
            enumerable: false,
            configurable: true
        });
        Level.prototype.update = function (deltaTime) {
            this._rootObject.update(deltaTime);
        };
        Level.prototype.render = function () {
            // render level
            this._baseTexture.draw(this._transform, MG.LevelManager.camera.cameraComponent.camera);
            // render objects
            this._rootObject.render(MG.LevelManager.camera.cameraComponent.camera);
        };
        return Level;
    }());
    MG.Level = Level;
})(MG || (MG = {}));
var MG;
(function (MG) {
    var LevelManager = /** @class */ (function () {
        function LevelManager() {
        }
        LevelManager.initialise = function (maxObjects) {
            if (maxObjects === void 0) { maxObjects = 10; }
            this._gameState = new MG.GameState(maxObjects);
        };
        Object.defineProperty(LevelManager, "currentLevel", {
            get: function () {
                return this._currentLevel;
            },
            set: function (level) {
                this._currentLevel = level;
                this._currentLevel.load();
                this._gameState.player.currentLevel = this._currentLevel;
            },
            enumerable: false,
            configurable: true
        });
        LevelManager.update = function (deltaTime) {
            this._currentLevel.update(deltaTime);
            this._gameState.player.update(deltaTime);
            this._gameState.camera.update(deltaTime);
        };
        LevelManager.render = function () {
            this._currentLevel.render();
            this._gameState.player.render(this.camera.cameraComponent.camera);
        };
        Object.defineProperty(LevelManager, "player", {
            get: function () {
                return this._gameState.player;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LevelManager, "camera", {
            get: function () {
                // console.log('gamestate:', this._gameState);
                return this._gameState.camera;
            },
            enumerable: false,
            configurable: true
        });
        LevelManager.registerObject = function (o, id) {
            if (id === void 0) { id = undefined; }
            return this._gameState.registerObject(o, id);
        };
        LevelManager.deregisterObject = function (oID) {
            this._gameState.deregisterObject(oID);
        };
        return LevelManager;
    }());
    MG.LevelManager = LevelManager;
})(MG || (MG = {}));
var MG;
(function (MG) {
    var Transform = /** @class */ (function () {
        function Transform() {
            this._position = MG.Vector2.Zero;
            this._rotation = 0;
        }
        Object.defineProperty(Transform.prototype, "position", {
            get: function () {
                return this._position;
            },
            set: function (pos) {
                this._position = pos;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Transform.prototype, "rotation", {
            get: function () {
                return this._rotation;
            },
            set: function (degrees) {
                this._rotation = degrees;
            },
            enumerable: false,
            configurable: true
        });
        Transform.prototype.copyFrom = function (transform) {
            this._rotation = transform.rotation;
            this._position.copyFrom(transform.position);
        };
        return Transform;
    }());
    MG.Transform = Transform;
})(MG || (MG = {}));
