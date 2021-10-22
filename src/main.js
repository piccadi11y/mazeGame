window.onload = function () {
    var engine = new MG.Engine('GameCanvas');
    engine.Start();
};
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
            this.MainLoop();
        };
        Engine.prototype.MainLoop = function () {
            var _this = this;
            MG.ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
            MG.ctx.fillStyle = 'green';
            MG.ctx.fillRect(10, 10, 150, 255);
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
