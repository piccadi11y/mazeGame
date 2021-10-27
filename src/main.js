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
            window.onresize = function () { return _this.Resize(); };
            this._canvas = MG.Utilities.Initialise(canvasID);
            this.Resize();
        }
        Engine.prototype.Start = function () {
            MG.InputHandler.Initialise();
            MG.TextureManager.addTexture(new MG.Texture('testTex', 10, 10, MG.Colour.blue()));
            var texTemp = MG.TextureManager.getTexture('testTex');
            texTemp.addLayer([new MG.Vector2(9), new MG.Vector2(3, 5)], MG.Colour.red());
            texTemp.addLayer([new MG.Vector2(4), new MG.Vector2(6, 9)], MG.Colour.white());
            console.log('testTex', texTemp);
            texTemp = undefined;
            MG.TextureManager.releaseTexture('testTex');
            this._testObject = new MG.oObject(0, 'testObject');
            this._testObject.addComponent(new MG.SpriteComponent('testSprite', 'testTex', 200));
            this._testObject.position = new MG.Vector2(200, 200);
            this.MainLoop();
        };
        Engine.prototype.MainLoop = function () {
            var _this = this;
            // ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
            MG.ctx.fillStyle = 'black';
            MG.ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
            MG.ctx.fillStyle = 'green';
            MG.ctx.fillRect(10, 10, 200, 200);
            // this._spriteComponent.render(100, 20);
            this._testObject.rotation += 1;
            this._testObject.render();
            requestAnimationFrame(function () { return _this.MainLoop(); });
        };
        Engine.prototype.Resize = function () {
            if (this._canvas === undefined)
                return;
            this._canvas.width = this._canvas.clientWidth;
            this._canvas.height = this._canvas.clientHeight;
        };
        return Engine;
    }());
    MG.Engine = Engine;
})(MG || (MG = {}));
var MG;
(function (MG) {
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
                this._transform.position.CopyFrom(pos);
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
        oObject.prototype.update = function (deltaTime) {
            // this._localMatrix = this.transform.GetTransformationMatrix();
            // this.UpdateWorldMatrix((this._parent !== undefined) ? this._parent.worldMatrix : undefined);
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var c = _a[_i];
                c.update(deltaTime);
            }
            for (var _b = 0, _c = this._children; _b < _c.length; _b++) {
                var c = _c[_b];
                c.update(deltaTime);
            }
        };
        oObject.prototype.render = function () {
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var c = _a[_i];
                c.render(this._transform);
            }
            for (var _b = 0, _c = this._children; _b < _c.length; _b++) {
                var c = _c[_b];
                c.render();
            }
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
        Sprite.prototype.draw = function (transform) {
            // TODO // take in this object's location at some point too, and time
            this._currentTexture.draw(transform.position.x, transform.position.y, transform.rotation, this._width, this._height);
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
        Texture.prototype.draw = function (_x, _y, rotation, width, height, fit) {
            var _this = this;
            if (rotation === void 0) { rotation = 0; }
            if (fit === void 0) { fit = TextureFit.STRETCH; }
            var x = _x - (width ? width : this._width) / 2;
            var y = _y - (height ? height : this._height) / 2;
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
                            points[0].x += _x;
                            points[0].y += _y;
                            points[1].x += _x;
                            points[1].y += _y;
                            points[2].x += _x;
                            points[2].y += _y;
                            points[3].x += _x;
                            points[3].y += _y;
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
            MG.ctx.fillRect(_x - 2.5, _y - 2.5, 5, 5);
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
            this._position.CopyFrom(transform.position);
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
        BaseComponent.prototype.render = function (transform) {
        };
        return BaseComponent;
    }());
    MG.BaseComponent = BaseComponent;
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
        SpriteComponent.prototype.render = function (transform) {
            _super.prototype.render.call(this, transform);
            this._sprite.draw(transform);
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
        Vector2.prototype.ToArray = function () {
            return [this._x, this._y];
        };
        Vector2.prototype.CopyFrom = function (vector) {
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
        function Level() {
        }
        return Level;
    }());
    MG.Level = Level;
})(MG || (MG = {}));
