var temp = 'Hello, World';
console.log(temp);
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
    var Utilities = /** @class */ (function () {
        function Utilities() {
        }
        Utilities.Initialise = function (id) {
            var canvas;
            if (id !== undefined) {
                canvas = document.getElementById(id);
                if (canvas === undefined)
                    throw new Error('Cannot finda  canvas element named' + id);
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
