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
window.onload = function () {
    var engine = new MG.Engine('GameCanvas');
    engine.Start();
};
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
    var Engine = /** @class */ (function () {
        function Engine(canvasID) {
            var _this = this;
            this.FRAME_TIME = 0;
            this.LAST_FRAME = 0;
            window.onresize = function () { return _this.Resize(); };
            this._canvas = MG.Utilities.Initialise(canvasID);
            // TODO // ensure onload or something the canvas is resized so it doesn't end up looking squished as it does now. needs investigation
            this.Resize();
        }
        Engine.prototype.Start = function () {
            MG.InputHandler.Initialise();
            // TODO // eventually move all of this to extended functions outside of the engine (for creating the game without too much hard-coding in the engine)
            MG.TextureManager.addTexture(new MG.Texture('testTex', 10, 10, MG.Colour.blue()));
            var texTemp = MG.TextureManager.getTexture('testTex');
            texTemp.addLayer([new MG.Vector2(9), new MG.Vector2(3, 5)], MG.Colour.red());
            texTemp.addLayer([new MG.Vector2(4), new MG.Vector2(6, 9)], MG.Colour.white());
            texTemp = undefined;
            MG.TextureManager.releaseTexture('testTex');
            this._testObject = new MG.oObject(0, 'testObject');
            this._testObject.addComponent(new MG.SpriteComponent('testSprite', 'testTex', 200));
            this._testObject.position = new MG.Vector2(500, 300);
            this._camera = new MG.oObject(1, 'camera');
            var cc = new MG.CameraComponent('cameraComponent', this._canvas.width, this._canvas.height);
            this._camera.addComponent(cc);
            cc.setTarget(this._testObject);
            this._testLevel = new MG.Level('testLevel', 1000, 1000, 50, MG.Colour.white());
            this._testLevel.addCamera(this._camera);
            this._testLevel.setPlayer(this._testObject);
            this._testLevel.load();
            this.mainLoop();
        };
        Engine.prototype.mainLoop = function () {
            var _this = this;
            this.FRAME_TIME = (performance.now() - this.LAST_FRAME) / 1000;
            // clear
            MG.ctx.fillStyle = 'black';
            MG.ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
            this._testLevel.update(this.FRAME_TIME);
            this._testLevel.render();
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
            if (this._camera)
                this._camera.getComponent('cameraComponent').handleResize(this._canvas.width, this._canvas.height);
        };
        return Engine;
    }());
    MG.Engine = Engine;
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
        InputHandler.Initialise = function () {
            var _this = this;
            window.addEventListener('keyup', function (e) { return _this.HandleKeyUp(e); });
            window.addEventListener('keydown', function (e) { return _this.HandleKeyDown(e); });
            this.RegisterKey('ArrowLeft');
            this.RegisterKey('ArrowRight');
            this.RegisterKey('ArrowUp');
            this.RegisterKey('ArrowDown');
            this.RegisterKey('w');
            this.RegisterKey('a');
            this.RegisterKey('a');
            this.RegisterKey('d');
            this.RegisterKey('Escape');
            this.RegisterKey('Enter');
        };
        InputHandler.HandleKeyUp = function (e) {
            if (this._keys[e.key] === undefined)
                return;
            if (this._keys[e.key].state === MG.State.RELEASED)
                return;
            this._keys[e.key].state = MG.State.RELEASED;
            // console.log(e.key, this._keys[e.key].state);
        };
        InputHandler.HandleKeyDown = function (e) {
            if (this._keys[e.key] === undefined)
                return;
            if (this._keys[e.key].state === MG.State.PRESSED)
                return;
            this._keys[e.key].state = MG.State.PRESSED;
            // console.log(e.key, this._keys[e.key].state);
        };
        InputHandler.RegisterKey = function (key) {
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
    var oObject = /** @class */ (function () {
        function oObject(id, name) {
            this._children = [];
            this._components = [];
            this._transform = new MG.Transform();
            this._worldTransform = new MG.Transform();
            this._id = id;
            this._name = name;
        }
        Object.defineProperty(oObject.prototype, "id", {
            get: function () {
                return this._id;
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
        oObject.prototype.update = function (deltaTime) {
            this.updateWorldTransform(this._parent !== undefined ? this._parent.worldTransform : undefined);
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var c = _a[_i];
                c.update(deltaTime);
            }
            for (var _b = 0, _c = this._children; _b < _c.length; _b++) {
                var c = _c[_b];
                c.update(deltaTime);
            }
        };
        oObject.prototype.render = function (camera) {
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var c = _a[_i];
                c.render(this._worldTransform, camera);
            }
            for (var _b = 0, _c = this._children; _b < _c.length; _b++) {
                var c = _c[_b];
                c.render(camera);
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
var MG;
(function (MG) {
    var Sprite = /** @class */ (function () {
        function Sprite(width, height, textureName) {
            this._width = width;
            this._height = height;
            this._currentTexture = MG.TextureManager.getTexture(textureName);
            // TODO // add animation/multiple frame support
        }
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
            TextureManager._textures[texture.name] = new TextureReferenceNode(texture);
        };
        TextureManager.releaseTexture = function (textureName) {
            if (TextureManager._textures[textureName] === undefined)
                console.warn("A texture named " + textureName + " does not exist and therefore cannot be released.");
            else
                TextureManager._textures[textureName].referenceCount--;
        };
        TextureManager._textures = {};
        return TextureManager;
    }());
    MG.TextureManager = TextureManager;
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
var MG;
(function (MG) {
    var Utilities = /** @class */ (function () {
        function Utilities() {
        }
        Utilities.Initialise = function (id) {
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
    var SpriteComponent = /** @class */ (function (_super) {
        __extends(SpriteComponent, _super);
        function SpriteComponent(name, textureName, width, height) {
            if (width === void 0) { width = 100; }
            var _this = _super.call(this, name) || this;
            _this._sprite = new MG.Sprite(width, height !== undefined ? height : width, textureName);
            return _this;
        }
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
        function Level(name, width, height, gridSize, colour) {
            this._transform = new MG.Transform(); // TODO // this will be relevant later when the engine supports multiple levels/streaming
            this._spawnPoint = undefined; // TODO // implement spawn point logic for first entry into new world/game and on death (?)
            this._name = name;
            this._width = width;
            this._height = height;
            this._gridSize = gridSize;
            this._baseColour = colour;
            this._rootObject = new MG.oObject(2, '_ROOT_');
        }
        Level.prototype.load = function () {
            MG.TextureManager.addTexture(new MG.Texture("LEVEL_" + this._name + "_BASE", 1, 1, this._baseColour));
            this._baseTexture = new MG.Sprite(this._width, this._height, "LEVEL_" + this._name + "_BASE");
            MG.TextureManager.addTexture(new MG.Texture('testTexCentre', 1, 1, MG.Colour.green()));
            var oTemp = new MG.oObject(3, 'centreObject');
            oTemp.addComponent(new MG.SpriteComponent('centreSprite', 'testTexCentre', 50));
            this._rootObject.addChild(oTemp);
            oTemp = new MG.oObject(4, 'centreObject2');
            oTemp.addComponent(new MG.SpriteComponent('centreSprite2', 'testTexCentre', 50));
            oTemp.position.x = 200;
            oTemp.position.y = 100;
            this._rootObject.addChild(oTemp);
        };
        // in future support multiple cameras (in level), for now, just set camera that follows player through levels
        Level.prototype.addCamera = function (camera) {
            this._activeCamera = camera.getComponent('cameraComponent');
        };
        Level.prototype.setPlayer = function (player) {
            this._playerObject = player;
        };
        Level.prototype.update = function (deltaTime) {
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
            var velX = xDir * 100 * deltaTime;
            var velY = yDir * 100 * deltaTime;
            this._playerObject.position.x += velX;
            this._playerObject.position.y += velY;
            this._rootObject.update(deltaTime);
            this._playerObject.update(deltaTime);
            this._activeCamera.update(deltaTime);
        };
        Level.prototype.render = function () {
            // render level
            this._baseTexture.draw(this._transform, this._activeCamera.camera);
            // render objects
            this._rootObject.render(this._activeCamera.camera);
            this._playerObject.render(this._activeCamera.camera);
        };
        return Level;
    }());
    MG.Level = Level;
})(MG || (MG = {}));
