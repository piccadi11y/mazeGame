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
    var GameOptions;
    (function (GameOptions) {
        GameOptions.bDrawDebugs = false;
    })(GameOptions = Assets.GameOptions || (Assets.GameOptions = {}));
})(Assets || (Assets = {}));
(function (Assets) {
    var Objects;
    (function (Objects) {
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
            "width": 9,
            "height": 9,
            // "baseColour": {"r": 170,"g": 51,"b": 164},
            "baseColour": undefined,
            "layers": [
                {
                    "colour": { "r": 227, "g": 16, "b": 149 },
                    "points": [
                        { "x": 2, "y": 0 },
                        { "x": 6, "y": 0 },
                        { "x": 1, "y": 1 },
                        { "x": 4, "y": 1 },
                        { "x": 7, "y": 1 },
                        { "x": 0, "y": 2 },
                        { "x": 2, "y": 2 },
                        { "x": 6, "y": 2 },
                        { "x": 8, "y": 2 },
                        { "x": 3, "y": 3 },
                        { "x": 5, "y": 3 },
                        { "x": 1, "y": 4 },
                        { "x": 4, "y": 4 },
                        { "x": 7, "y": 4 },
                        { "x": 3, "y": 5 },
                        { "x": 5, "y": 5 },
                        { "x": 0, "y": 6 },
                        { "x": 2, "y": 6 },
                        { "x": 6, "y": 6 },
                        { "x": 8, "y": 6 },
                        { "x": 1, "y": 7 },
                        { "x": 4, "y": 7 },
                        { "x": 7, "y": 7 },
                        { "x": 2, "y": 8 },
                        { "x": 6, "y": 8 }
                    ]
                }
            ]
        };
        Textures.playerFrame0 = {
            "name": "playerFrame0",
            "frame": 0,
            "width": 9,
            "height": 9,
            "baseColour": undefined,
            "layers": [
                {
                    "colour": { "r": 227, "g": 16, "b": 149 },
                    "points": [
                        { "x": 1, "y": 1 },
                        { "x": 7, "y": 1 },
                        { "x": 3, "y": 3 },
                        { "x": 5, "y": 3 },
                        { "x": 1, "y": 4 },
                        { "x": 4, "y": 4 },
                        { "x": 7, "y": 4 },
                        { "x": 3, "y": 5 },
                        { "x": 5, "y": 5 },
                        { "x": 1, "y": 7 },
                        { "x": 4, "y": 7 },
                        { "x": 7, "y": 7 }
                    ]
                },
                {
                    "colour": { "r": 72, "g": 137, "b": 227 },
                    "points": [
                        { "x": 4, "y": 1 }
                    ]
                },
                {
                    "colour": { "r": 85, "g": 98, "b": 113 },
                    "points": [
                        { "x": 0, "y": 0 },
                        { "x": 8, "y": 0 },
                        { "x": 2, "y": 2 },
                        { "x": 6, "y": 2 },
                        { "x": 2, "y": 6 },
                        { "x": 6, "y": 6 },
                        { "x": 0, "y": 8 },
                        { "x": 8, "y": 8 },
                    ]
                }
            ]
        };
        Textures.playerFrame1 = {
            "name": "playerFrame1",
            "frame": 0,
            "width": 9,
            "height": 9,
            "baseColour": undefined,
            "layers": [
                {
                    "colour": { "r": 227, "g": 16, "b": 149 },
                    "points": [
                        { "x": 1, "y": 1 },
                        { "x": 4, "y": 1 },
                        { "x": 7, "y": 1 },
                        { "x": 0, "y": 2 },
                        { "x": 2, "y": 2 },
                        { "x": 3, "y": 3 },
                        { "x": 5, "y": 3 },
                        { "x": 1, "y": 4 },
                        { "x": 4, "y": 4 },
                        { "x": 7, "y": 4 },
                        { "x": 3, "y": 5 },
                        { "x": 5, "y": 5 },
                        { "x": 2, "y": 6 },
                        { "x": 6, "y": 6 },
                        { "x": 1, "y": 7 },
                        { "x": 4, "y": 7 },
                        { "x": 7, "y": 7 }
                    ]
                },
                {
                    "colour": { "r": 72, "g": 137, "b": 227 },
                    "points": [
                        { "x": 6, "y": 2 }
                    ]
                },
                {
                    "colour": { "r": 85, "g": 98, "b": 113 },
                    "points": [
                        { "x": 2, "y": 0 },
                        { "x": 6, "y": 0 },
                        { "x": 0, "y": 2 },
                        { "x": 8, "y": 2 },
                        { "x": 0, "y": 6 },
                        { "x": 8, "y": 6 },
                        { "x": 2, "y": 8 },
                        { "x": 6, "y": 8 }
                    ]
                }
            ]
        };
        Textures.playerFrame2 = {
            "name": "playerFrame2",
            "frame": 0,
            "width": 9,
            "height": 9,
            "baseColour": undefined,
            "layers": [
                {
                    "colour": { "r": 227, "g": 16, "b": 149 },
                    "points": [
                        { "x": 1, "y": 1 },
                        { "x": 4, "y": 1 },
                        { "x": 7, "y": 1 },
                        { "x": 3, "y": 3 },
                        { "x": 5, "y": 3 },
                        { "x": 1, "y": 4 },
                        { "x": 4, "y": 4 },
                        { "x": 3, "y": 5 },
                        { "x": 5, "y": 5 },
                        { "x": 1, "y": 7 },
                        { "x": 4, "y": 7 },
                        { "x": 7, "y": 7 }
                    ]
                },
                {
                    "colour": { "r": 72, "g": 137, "b": 227 },
                    "points": [
                        { "x": 7, "y": 4 }
                    ]
                },
                {
                    "colour": { "r": 85, "g": 98, "b": 113 },
                    "points": [
                        { "x": 0, "y": 0 },
                        { "x": 8, "y": 0 },
                        { "x": 2, "y": 2 },
                        { "x": 6, "y": 2 },
                        { "x": 2, "y": 6 },
                        { "x": 6, "y": 6 },
                        { "x": 0, "y": 8 },
                        { "x": 8, "y": 8 },
                    ]
                }
            ]
        };
        Textures.playerFrame3 = {
            "name": "playerFrame3",
            "frame": 0,
            "width": 9,
            "height": 9,
            "baseColour": undefined,
            "layers": [
                {
                    "colour": { "r": 227, "g": 16, "b": 149 },
                    "points": [
                        { "x": 1, "y": 1 },
                        { "x": 4, "y": 1 },
                        { "x": 7, "y": 1 },
                        { "x": 2, "y": 2 },
                        { "x": 6, "y": 2 },
                        { "x": 3, "y": 3 },
                        { "x": 5, "y": 3 },
                        { "x": 1, "y": 4 },
                        { "x": 4, "y": 4 },
                        { "x": 7, "y": 4 },
                        { "x": 3, "y": 5 },
                        { "x": 5, "y": 5 },
                        { "x": 2, "y": 6 },
                        { "x": 1, "y": 7 },
                        { "x": 4, "y": 7 },
                        { "x": 7, "y": 7 }
                    ]
                },
                {
                    "colour": { "r": 72, "g": 137, "b": 227 },
                    "points": [
                        { "x": 6, "y": 6 }
                    ]
                },
                {
                    "colour": { "r": 85, "g": 98, "b": 113 },
                    "points": [
                        { "x": 2, "y": 0 },
                        { "x": 6, "y": 0 },
                        { "x": 0, "y": 2 },
                        { "x": 8, "y": 2 },
                        { "x": 0, "y": 6 },
                        { "x": 8, "y": 6 },
                        { "x": 2, "y": 8 },
                        { "x": 6, "y": 8 }
                    ]
                }
            ]
        };
        Textures.playerFrame4 = {
            "name": "playerFrame4",
            "frame": 0,
            "width": 9,
            "height": 9,
            "baseColour": undefined,
            "layers": [
                {
                    "colour": { "r": 227, "g": 16, "b": 149 },
                    "points": [
                        { "x": 1, "y": 1 },
                        { "x": 4, "y": 1 },
                        { "x": 7, "y": 1 },
                        { "x": 3, "y": 3 },
                        { "x": 5, "y": 3 },
                        { "x": 1, "y": 4 },
                        { "x": 4, "y": 4 },
                        { "x": 7, "y": 4 },
                        { "x": 3, "y": 5 },
                        { "x": 5, "y": 5 },
                        { "x": 1, "y": 7 },
                        { "x": 7, "y": 7 }
                    ]
                },
                {
                    "colour": { "r": 72, "g": 137, "b": 227 },
                    "points": [
                        { "x": 4, "y": 7 }
                    ]
                },
                {
                    "colour": { "r": 85, "g": 98, "b": 113 },
                    "points": [
                        { "x": 0, "y": 0 },
                        { "x": 8, "y": 0 },
                        { "x": 2, "y": 2 },
                        { "x": 6, "y": 2 },
                        { "x": 2, "y": 6 },
                        { "x": 6, "y": 6 },
                        { "x": 0, "y": 8 },
                        { "x": 8, "y": 8 },
                    ]
                }
            ]
        };
        Textures.playerFrame5 = {
            "name": "playerFrame5",
            "frame": 0,
            "width": 9,
            "height": 9,
            "baseColour": undefined,
            "layers": [
                {
                    "colour": { "r": 227, "g": 16, "b": 149 },
                    "points": [
                        { "x": 1, "y": 1 },
                        { "x": 4, "y": 1 },
                        { "x": 7, "y": 1 },
                        { "x": 2, "y": 2 },
                        { "x": 6, "y": 2 },
                        { "x": 3, "y": 3 },
                        { "x": 5, "y": 3 },
                        { "x": 1, "y": 4 },
                        { "x": 4, "y": 4 },
                        { "x": 7, "y": 4 },
                        { "x": 3, "y": 5 },
                        { "x": 5, "y": 5 },
                        { "x": 6, "y": 6 },
                        { "x": 1, "y": 7 },
                        { "x": 4, "y": 7 },
                        { "x": 7, "y": 7 }
                    ]
                },
                {
                    "colour": { "r": 72, "g": 137, "b": 227 },
                    "points": [
                        { "x": 2, "y": 6 }
                    ]
                },
                {
                    "colour": { "r": 85, "g": 98, "b": 113 },
                    "points": [
                        { "x": 2, "y": 0 },
                        { "x": 6, "y": 0 },
                        { "x": 0, "y": 2 },
                        { "x": 8, "y": 2 },
                        { "x": 0, "y": 6 },
                        { "x": 8, "y": 6 },
                        { "x": 2, "y": 8 },
                        { "x": 6, "y": 8 }
                    ]
                }
            ]
        };
        Textures.playerFrame6 = {
            "name": "playerFrame6",
            "frame": 0,
            "width": 9,
            "height": 9,
            "baseColour": undefined,
            "layers": [
                {
                    "colour": { "r": 227, "g": 16, "b": 149 },
                    "points": [
                        { "x": 1, "y": 1 },
                        { "x": 4, "y": 1 },
                        { "x": 7, "y": 1 },
                        { "x": 3, "y": 3 },
                        { "x": 5, "y": 3 },
                        { "x": 4, "y": 4 },
                        { "x": 7, "y": 4 },
                        { "x": 3, "y": 5 },
                        { "x": 5, "y": 5 },
                        { "x": 1, "y": 7 },
                        { "x": 4, "y": 7 },
                        { "x": 7, "y": 7 }
                    ]
                },
                {
                    "colour": { "r": 72, "g": 137, "b": 227 },
                    "points": [
                        { "x": 1, "y": 4 }
                    ]
                },
                {
                    "colour": { "r": 85, "g": 98, "b": 113 },
                    "points": [
                        { "x": 0, "y": 0 },
                        { "x": 8, "y": 0 },
                        { "x": 2, "y": 2 },
                        { "x": 6, "y": 2 },
                        { "x": 2, "y": 6 },
                        { "x": 6, "y": 6 },
                        { "x": 0, "y": 8 },
                        { "x": 8, "y": 8 },
                    ]
                }
            ]
        };
        Textures.playerFrame7 = {
            "name": "playerFrame7",
            "frame": 0,
            "width": 9,
            "height": 9,
            "baseColour": undefined,
            "layers": [
                {
                    "colour": { "r": 227, "g": 16, "b": 149 },
                    "points": [
                        { "x": 1, "y": 1 },
                        { "x": 4, "y": 1 },
                        { "x": 7, "y": 1 },
                        { "x": 6, "y": 2 },
                        { "x": 3, "y": 3 },
                        { "x": 5, "y": 3 },
                        { "x": 1, "y": 4 },
                        { "x": 4, "y": 4 },
                        { "x": 7, "y": 4 },
                        { "x": 3, "y": 5 },
                        { "x": 5, "y": 5 },
                        { "x": 2, "y": 6 },
                        { "x": 6, "y": 6 },
                        { "x": 1, "y": 7 },
                        { "x": 4, "y": 7 },
                        { "x": 7, "y": 7 }
                    ]
                },
                {
                    "colour": { "r": 72, "g": 137, "b": 227 },
                    "points": [
                        { "x": 2, "y": 2 }
                    ]
                },
                {
                    "colour": { "r": 85, "g": 98, "b": 113 },
                    "points": [
                        { "x": 2, "y": 0 },
                        { "x": 6, "y": 0 },
                        { "x": 0, "y": 2 },
                        { "x": 8, "y": 2 },
                        { "x": 0, "y": 6 },
                        { "x": 8, "y": 6 },
                        { "x": 2, "y": 8 },
                        { "x": 6, "y": 8 }
                    ]
                }
            ]
        };
        Textures.testObjectTexture = {
            "name": "testObjectTexture",
            "width": 1,
            "height": 1,
            "baseColour": { "r": 255, "g": 0, "b": 255 },
            "layers": undefined
        };
        Textures.TILE_WALL_POST = {
            "name": "TILE_WALL_POST",
            "width": 7,
            "height": 7,
            "baseColour": undefined,
            "layers": [
                {
                    "colour": { "r": 255, "g": 200, "b": 0 },
                    "points": [
                        { "x": 0, "y": 0 },
                        { "x": 1, "y": 0 },
                        { "x": 2, "y": 0 },
                        { "x": 3, "y": 0 },
                        { "x": 4, "y": 0 },
                        { "x": 5, "y": 0 },
                        { "x": 6, "y": 0 },
                        { "x": 0, "y": 6 },
                        { "x": 1, "y": 6 },
                        { "x": 2, "y": 6 },
                        { "x": 3, "y": 6 },
                        { "x": 4, "y": 6 },
                        { "x": 5, "y": 6 },
                        { "x": 6, "y": 6 },
                        { "x": 0, "y": 1 },
                        { "x": 0, "y": 2 },
                        { "x": 0, "y": 3 },
                        { "x": 0, "y": 4 },
                        { "x": 0, "y": 5 },
                        { "x": 6, "y": 1 },
                        { "x": 6, "y": 2 },
                        { "x": 6, "y": 3 },
                        { "x": 6, "y": 4 },
                        { "x": 6, "y": 5 },
                    ]
                }
            ]
        };
        Textures.TILE_WALL_DOUBLE = {
            "name": "TILE_WALL_DOUBLE",
            "width": 7,
            "height": 7,
            "baseColour": undefined,
            "layers": [
                {
                    "colour": { "r": 255, "g": 200, "b": 0 },
                    "points": [
                        { "x": 0, "y": 0 },
                        { "x": 1, "y": 0 },
                        { "x": 2, "y": 0 },
                        { "x": 3, "y": 0 },
                        { "x": 4, "y": 0 },
                        { "x": 5, "y": 0 },
                        { "x": 6, "y": 0 },
                        { "x": 0, "y": 6 },
                        { "x": 1, "y": 6 },
                        { "x": 2, "y": 6 },
                        { "x": 3, "y": 6 },
                        { "x": 4, "y": 6 },
                        { "x": 5, "y": 6 },
                        { "x": 6, "y": 6 }
                    ]
                }
            ]
        };
        Textures.TILE_WALL_SINGLE = {
            "name": "TILE_WALL_SINGLE",
            "width": 7,
            "height": 7,
            "baseColour": undefined,
            "layers": [
                {
                    "colour": { "r": 255, "g": 200, "b": 0 },
                    "points": [
                        { "x": 0, "y": 0 },
                        { "x": 1, "y": 0 },
                        { "x": 2, "y": 0 },
                        { "x": 3, "y": 0 },
                        { "x": 4, "y": 0 },
                        { "x": 5, "y": 0 },
                        { "x": 6, "y": 0 }
                    ]
                }
            ]
        };
        Textures.TILE_WALL_END = {
            "name": "TILE_WALL_END",
            "width": 7,
            "height": 7,
            "baseColour": undefined,
            "layers": [
                {
                    "colour": { "r": 255, "g": 200, "b": 0 },
                    "points": [
                        { "x": 0, "y": 0 },
                        { "x": 1, "y": 0 },
                        { "x": 2, "y": 0 },
                        { "x": 3, "y": 0 },
                        { "x": 4, "y": 0 },
                        { "x": 5, "y": 0 },
                        { "x": 6, "y": 0 },
                        { "x": 0, "y": 6 },
                        { "x": 1, "y": 6 },
                        { "x": 2, "y": 6 },
                        { "x": 3, "y": 6 },
                        { "x": 4, "y": 6 },
                        { "x": 5, "y": 6 },
                        { "x": 6, "y": 6 },
                        { "x": 6, "y": 1 },
                        { "x": 6, "y": 2 },
                        { "x": 6, "y": 3 },
                        { "x": 6, "y": 4 },
                        { "x": 6, "y": 5 }
                    ]
                }
            ]
        };
        Textures.TILE_WALL_DOUBLE_CORNER = {
            "name": "TILE_WALL_DOUBLE_CORNER",
            "width": 7,
            "height": 7,
            "baseColour": undefined,
            "layers": [
                {
                    "colour": { "r": 255, "g": 200, "b": 0 },
                    "points": [
                        { "x": 0, "y": 0 },
                        { "x": 1, "y": 0 },
                        { "x": 2, "y": 0 },
                        { "x": 3, "y": 0 },
                        { "x": 4, "y": 0 },
                        { "x": 5, "y": 0 },
                        { "x": 6, "y": 0 },
                        { "x": 6, "y": 1 },
                        { "x": 6, "y": 2 },
                        { "x": 6, "y": 3 },
                        { "x": 6, "y": 4 },
                        { "x": 6, "y": 5 },
                        { "x": 6, "y": 6 },
                        { "x": 0, "y": 6 }
                    ]
                }
            ]
        };
        Textures.TILE_WALL_SINGLE_CORNER_INTERIOR = {
            "name": "TILE_WALL_SINGLE_CORNER_INTERIOR",
            "width": 7,
            "height": 7,
            "baseColour": undefined,
            "layers": [
                {
                    "colour": { "r": 255, "g": 200, "b": 0 },
                    "points": [
                        { "x": 0, "y": 6 }
                    ]
                }
            ]
        };
        Textures.TILE_WALL_SINGLE_CORNER_EXTERIOR = {
            "name": "TILE_WALL_SINGLE_CORNER_EXTERIOR",
            "width": 7,
            "height": 7,
            "baseColour": undefined,
            "layers": [
                {
                    "colour": { "r": 255, "g": 200, "b": 0 },
                    "points": [
                        { "x": 0, "y": 0 },
                        { "x": 1, "y": 0 },
                        { "x": 2, "y": 0 },
                        { "x": 3, "y": 0 },
                        { "x": 4, "y": 0 },
                        { "x": 5, "y": 0 },
                        { "x": 6, "y": 0 },
                        { "x": 6, "y": 1 },
                        { "x": 6, "y": 2 },
                        { "x": 6, "y": 3 },
                        { "x": 6, "y": 4 },
                        { "x": 6, "y": 5 },
                        { "x": 6, "y": 6 }
                    ]
                }
            ]
        };
        Textures.TILE_FLOOR_TEST = {
            "name": "TILE_FLOOR_TEST",
            "width": 7,
            "height": 7,
            "baseColour": undefined,
            "layers": [
                {
                    "colour": { "r": 255, "g": 200, "b": 255 },
                    "points": [
                        { "x": 3, "y": 3 },
                        { "x": 1, "y": 1 },
                        { "x": 1, "y": 2 },
                        { "x": 1, "y": 3 },
                        { "x": 1, "y": 4 },
                        { "x": 1, "y": 5 },
                        { "x": 5, "y": 1 },
                        { "x": 5, "y": 2 },
                        { "x": 5, "y": 3 },
                        { "x": 5, "y": 4 },
                        { "x": 5, "y": 5 },
                        { "x": 2, "y": 1 },
                        { "x": 3, "y": 1 },
                        { "x": 4, "y": 1 },
                        { "x": 2, "y": 5 },
                        { "x": 3, "y": 5 },
                        { "x": 4, "y": 5 },
                    ]
                }
            ]
        };
        Textures.SPAWNPOINT = {
            "name": "SPAWNPOINT",
            "width": 11,
            "height": 11,
            "baseColour": undefined,
            "layers": [
                {
                    "colour": { "r": 163, "g": 152, "b": 94 },
                    "points": [
                        { "x": 3, "y": 0 },
                        { "x": 4, "y": 0 },
                        { "x": 5, "y": 0 },
                        { "x": 6, "y": 0 },
                        { "x": 7, "y": 0 },
                        { "x": 2, "y": 1 },
                        { "x": 8, "y": 1 },
                        { "x": 1, "y": 2 },
                        { "x": 4, "y": 2 },
                        { "x": 5, "y": 2 },
                        { "x": 6, "y": 2 },
                        { "x": 9, "y": 2 },
                        { "x": 0, "y": 3 },
                        { "x": 3, "y": 3 },
                        { "x": 7, "y": 3 },
                        { "x": 10, "y": 3 },
                        { "x": 0, "y": 4 },
                        { "x": 2, "y": 4 },
                        { "x": 8, "y": 4 },
                        { "x": 10, "y": 4 },
                        { "x": 0, "y": 5 },
                        { "x": 2, "y": 5 },
                        { "x": 5, "y": 5 },
                        { "x": 8, "y": 5 },
                        { "x": 10, "y": 5 },
                        { "x": 0, "y": 6 },
                        { "x": 2, "y": 6 },
                        { "x": 8, "y": 6 },
                        { "x": 10, "y": 6 },
                        { "x": 0, "y": 7 },
                        { "x": 3, "y": 7 },
                        { "x": 7, "y": 7 },
                        { "x": 10, "y": 7 },
                        { "x": 1, "y": 8 },
                        { "x": 4, "y": 8 },
                        { "x": 5, "y": 8 },
                        { "x": 6, "y": 8 },
                        { "x": 9, "y": 8 },
                        { "x": 2, "y": 9 },
                        { "x": 8, "y": 9 },
                        { "x": 3, "y": 10 },
                        { "x": 4, "y": 10 },
                        { "x": 5, "y": 10 },
                        { "x": 6, "y": 10 },
                        { "x": 7, "y": 10 }
                    ]
                },
                {
                    "colour": { "r": 175, "g": 200, "b": 255 },
                    "points": [
                        { "x": 5, "y": 4 },
                        { "x": 4, "y": 5 },
                        { "x": 6, "y": 5 },
                        { "x": 5, "y": 6 },
                    ]
                }
            ]
        };
        Textures.SPAWNPOINT_CHECKPOINT = {
            "name": "SPAWNPOINT_CHECKPOINT",
            "width": 11,
            "height": 11,
            "baseColour": undefined,
            "layers": [
                {
                    "colour": { "r": 163, "g": 152, "b": 94 },
                    "points": [
                        { "x": 3, "y": 0 },
                        { "x": 4, "y": 0 },
                        { "x": 5, "y": 0 },
                        { "x": 6, "y": 0 },
                        { "x": 7, "y": 0 },
                        { "x": 2, "y": 1 },
                        { "x": 8, "y": 1 },
                        { "x": 1, "y": 2 },
                        { "x": 4, "y": 2 },
                        { "x": 5, "y": 2 },
                        { "x": 6, "y": 2 },
                        { "x": 9, "y": 2 },
                        { "x": 0, "y": 3 },
                        { "x": 3, "y": 3 },
                        { "x": 7, "y": 3 },
                        { "x": 10, "y": 3 },
                        { "x": 0, "y": 4 },
                        { "x": 2, "y": 4 },
                        { "x": 8, "y": 4 },
                        { "x": 10, "y": 4 },
                        { "x": 0, "y": 5 },
                        { "x": 2, "y": 5 },
                        { "x": 8, "y": 5 },
                        { "x": 10, "y": 5 },
                        { "x": 0, "y": 6 },
                        { "x": 2, "y": 6 },
                        { "x": 8, "y": 6 },
                        { "x": 10, "y": 6 },
                        { "x": 0, "y": 7 },
                        { "x": 3, "y": 7 },
                        { "x": 7, "y": 7 },
                        { "x": 10, "y": 7 },
                        { "x": 1, "y": 8 },
                        { "x": 4, "y": 8 },
                        { "x": 5, "y": 8 },
                        { "x": 6, "y": 8 },
                        { "x": 9, "y": 8 },
                        { "x": 2, "y": 9 },
                        { "x": 8, "y": 9 },
                        { "x": 3, "y": 10 },
                        { "x": 4, "y": 10 },
                        { "x": 5, "y": 10 },
                        { "x": 6, "y": 10 },
                        { "x": 7, "y": 10 }
                    ]
                },
                {
                    "colour": { "r": 255, "g": 0, "b": 0 },
                    "points": [
                        { "x": 4, "y": 4 },
                        { "x": 5, "y": 5 },
                        { "x": 6, "y": 6 }
                    ]
                },
                {
                    "colour": { "r": 0, "g": 100, "b": 0 },
                    "points": [
                        { "x": 6, "y": 4 },
                        { "x": 4, "y": 6 }
                    ]
                }
            ]
        };
        Textures.SPAWNPOINT_CHECKPOINT_ACTIVE = {
            "name": "SPAWNPOINT_CHECKPOINT_ACTIVE",
            "width": 11,
            "height": 11,
            "baseColour": undefined,
            "layers": [
                {
                    "colour": { "r": 163, "g": 152, "b": 94 },
                    "points": [
                        { "x": 3, "y": 0 },
                        { "x": 4, "y": 0 },
                        { "x": 5, "y": 0 },
                        { "x": 6, "y": 0 },
                        { "x": 7, "y": 0 },
                        { "x": 2, "y": 1 },
                        { "x": 8, "y": 1 },
                        { "x": 1, "y": 2 },
                        { "x": 4, "y": 2 },
                        { "x": 5, "y": 2 },
                        { "x": 6, "y": 2 },
                        { "x": 9, "y": 2 },
                        { "x": 0, "y": 3 },
                        { "x": 3, "y": 3 },
                        { "x": 7, "y": 3 },
                        { "x": 10, "y": 3 },
                        { "x": 0, "y": 4 },
                        { "x": 2, "y": 4 },
                        { "x": 8, "y": 4 },
                        { "x": 10, "y": 4 },
                        { "x": 0, "y": 5 },
                        { "x": 2, "y": 5 },
                        { "x": 8, "y": 5 },
                        { "x": 10, "y": 5 },
                        { "x": 0, "y": 6 },
                        { "x": 2, "y": 6 },
                        { "x": 8, "y": 6 },
                        { "x": 10, "y": 6 },
                        { "x": 0, "y": 7 },
                        { "x": 3, "y": 7 },
                        { "x": 7, "y": 7 },
                        { "x": 10, "y": 7 },
                        { "x": 1, "y": 8 },
                        { "x": 4, "y": 8 },
                        { "x": 5, "y": 8 },
                        { "x": 6, "y": 8 },
                        { "x": 9, "y": 8 },
                        { "x": 2, "y": 9 },
                        { "x": 8, "y": 9 },
                        { "x": 3, "y": 10 },
                        { "x": 4, "y": 10 },
                        { "x": 5, "y": 10 },
                        { "x": 6, "y": 10 },
                        { "x": 7, "y": 10 }
                    ]
                },
                {
                    "colour": { "r": 100, "g": 0, "b": 0 },
                    "points": [
                        { "x": 4, "y": 4 },
                        { "x": 6, "y": 6 }
                    ]
                },
                {
                    "colour": { "r": 0, "g": 255, "b": 0 },
                    "points": [
                        { "x": 6, "y": 4 },
                        { "x": 5, "y": 5 },
                        { "x": 4, "y": 6 }
                    ]
                }
            ]
        };
        Textures.SPAWNPOINT_END = {
            "name": "SPAWNPOINT_END",
            "width": 11,
            "height": 11,
            "baseColour": undefined,
            "layers": [
                {
                    "colour": { "r": 163, "g": 152, "b": 94 },
                    "points": [
                        { "x": 3, "y": 0 },
                        { "x": 4, "y": 0 },
                        { "x": 5, "y": 0 },
                        { "x": 6, "y": 0 },
                        { "x": 7, "y": 0 },
                        { "x": 2, "y": 1 },
                        { "x": 8, "y": 1 },
                        { "x": 1, "y": 2 },
                        { "x": 4, "y": 2 },
                        { "x": 5, "y": 2 },
                        { "x": 6, "y": 2 },
                        { "x": 9, "y": 2 },
                        { "x": 0, "y": 3 },
                        { "x": 3, "y": 3 },
                        { "x": 7, "y": 3 },
                        { "x": 10, "y": 3 },
                        { "x": 0, "y": 4 },
                        { "x": 2, "y": 4 },
                        { "x": 8, "y": 4 },
                        { "x": 10, "y": 4 },
                        { "x": 0, "y": 5 },
                        { "x": 2, "y": 5 },
                        { "x": 5, "y": 5 },
                        { "x": 8, "y": 5 },
                        { "x": 10, "y": 5 },
                        { "x": 0, "y": 6 },
                        { "x": 2, "y": 6 },
                        { "x": 8, "y": 6 },
                        { "x": 10, "y": 6 },
                        { "x": 0, "y": 7 },
                        { "x": 3, "y": 7 },
                        { "x": 7, "y": 7 },
                        { "x": 10, "y": 7 },
                        { "x": 1, "y": 8 },
                        { "x": 4, "y": 8 },
                        { "x": 5, "y": 8 },
                        { "x": 6, "y": 8 },
                        { "x": 9, "y": 8 },
                        { "x": 2, "y": 9 },
                        { "x": 8, "y": 9 },
                        { "x": 3, "y": 10 },
                        { "x": 4, "y": 10 },
                        { "x": 5, "y": 10 },
                        { "x": 6, "y": 10 },
                        { "x": 7, "y": 10 }
                    ]
                },
                {
                    "colour": { "r": 220, "g": 235, "b": 87 },
                    "points": [
                        { "x": 5, "y": 4 },
                        { "x": 4, "y": 5 },
                        { "x": 6, "y": 5 },
                        { "x": 5, "y": 6 },
                    ]
                }
            ]
        };
        Textures.loadList = [
            Textures.defaultPlayerTexture,
            Textures.playerFrame0,
            Textures.playerFrame1,
            Textures.playerFrame2,
            Textures.playerFrame3,
            Textures.playerFrame4,
            Textures.playerFrame5,
            Textures.playerFrame6,
            Textures.playerFrame7,
            Textures.testObjectTexture,
            Textures.TILE_WALL_POST,
            Textures.TILE_WALL_DOUBLE,
            Textures.TILE_WALL_SINGLE,
            Textures.TILE_WALL_END,
            Textures.TILE_WALL_DOUBLE_CORNER,
            Textures.TILE_WALL_SINGLE_CORNER_INTERIOR,
            Textures.TILE_WALL_SINGLE_CORNER_EXTERIOR,
            Textures.TILE_FLOOR_TEST,
            Textures.SPAWNPOINT,
            Textures.SPAWNPOINT_CHECKPOINT,
            Textures.SPAWNPOINT_CHECKPOINT_ACTIVE,
            Textures.SPAWNPOINT_END
        ];
        Textures.playerFrames = [
            Textures.playerFrame0,
            Textures.playerFrame1,
            Textures.playerFrame2,
            Textures.playerFrame3,
            Textures.playerFrame4,
            Textures.playerFrame5,
            Textures.playerFrame6,
            Textures.playerFrame7
        ];
    })(Textures = Assets.Textures || (Assets.Textures = {}));
})(Assets || (Assets = {}));
(function (Assets) {
    var Levels;
    (function (Levels) {
        Levels.testLevel0 = {
            "name": "testLevel0",
            "width": 1000,
            "height": 1000,
            "gridSize": 50,
            "colour": "white",
            "xPos": 0,
            "yPos": 0,
            "levelCollisions": [false, true, true, true],
            "spawnPoint": {
                "name": "tl_spawn",
                "type": "start",
                "tex": Assets.Textures.SPAWNPOINT,
                "texActive": undefined,
                "x": 5,
                "y": 5
            },
            "tiles": [
                {
                    "obj": Assets.Textures.TILE_WALL_SINGLE_CORNER_INTERIOR,
                    "x": 0,
                    "y": 0,
                    "d": 270,
                    "collision": "wall"
                },
                {
                    "obj": Assets.Textures.TILE_WALL_SINGLE,
                    "x": 1,
                    "y": 0,
                    "d": 180,
                    "collision": "wall"
                },
                {
                    "obj": Assets.Textures.TILE_WALL_SINGLE,
                    "x": 2,
                    "y": 0,
                    "d": 180,
                    "collision": "wall"
                },
                {
                    "obj": Assets.Textures.TILE_WALL_SINGLE,
                    "x": 3,
                    "y": 0,
                    "d": 180,
                    "collision": "wall"
                },
                {
                    "obj": Assets.Textures.TILE_WALL_SINGLE,
                    "x": 0,
                    "y": 1,
                    "d": 90,
                    "collision": "wall"
                },
                {
                    "obj": Assets.Textures.TILE_WALL_SINGLE,
                    "x": 0,
                    "y": 2,
                    "d": 90,
                    "collision": "wall"
                },
                {
                    "obj": Assets.Textures.TILE_WALL_SINGLE,
                    "x": 0,
                    "y": 3,
                    "d": 90,
                    "collision": "wall"
                },
                {
                    "obj": Assets.Textures.TILE_FLOOR_TEST,
                    "x": 1,
                    "y": 1,
                    "d": 0,
                    "collision": "floor"
                }
            ],
            "objects": []
        };
        Levels.testLevel1 = {
            "name": "testLevel1",
            "width": 1000,
            "height": 1000,
            "gridSize": 50,
            "colour": "white",
            "xPos": 0,
            "yPos": -1000,
            "levelCollisions": [false, false, false, true],
            "spawnPoint": {
                "name": "tl1_Checkpoint_001",
                "type": "checkpoint",
                "tex": Assets.Textures.SPAWNPOINT_CHECKPOINT,
                "texActive": Assets.Textures.SPAWNPOINT_CHECKPOINT_ACTIVE,
                "x": 3,
                "y": 18
            },
            "tiles": [],
            "objects": [
                {
                    "obj": Assets.Objects.testLevelCentre,
                    "x": 0,
                    "y": 0
                },
                {
                    "obj": Assets.Objects.testLevelCentre,
                    "x": -200,
                    "y": 100
                }
            ]
        };
        Levels.testLevel2 = {
            "name": "testLevel2",
            "width": 1000,
            "height": 1000,
            "gridSize": 50,
            "colour": "white",
            "xPos": 1000,
            "yPos": -1000,
            "levelCollisions": [false, true, true, false],
            "spawnPoint": {
                "name": "tl2_Checkpoint_001",
                "type": "checkpoint",
                "tex": Assets.Textures.SPAWNPOINT_CHECKPOINT,
                "texActive": Assets.Textures.SPAWNPOINT_CHECKPOINT_ACTIVE,
                "x": 3,
                "y": 2
            },
            "tiles": [],
            "objects": [
                {
                    "obj": Assets.Objects.testLevelCentre,
                    "x": 0,
                    "y": 0
                },
                {
                    "obj": Assets.Objects.testLevelCentre,
                    "x": -200,
                    "y": 100
                }
            ]
        };
        Levels.testLevel3 = {
            "name": "testLevel3",
            "width": 1000,
            "height": 1000,
            "gridSize": 50,
            "colour": "white",
            "xPos": 0,
            "yPos": -2000,
            "levelCollisions": [true, false, false, true],
            "spawnPoint": {
                "name": "tl3_Checkpoint_001",
                "type": "checkpoint",
                "tex": Assets.Textures.SPAWNPOINT_CHECKPOINT,
                "texActive": Assets.Textures.SPAWNPOINT_CHECKPOINT_ACTIVE,
                "x": 3,
                "y": 2
            },
            "tiles": [],
            "objects": []
        };
        Levels.testLevel4 = {
            "name": "testLevel4",
            "width": 1000,
            "height": 1000,
            "gridSize": 50,
            "colour": "white",
            "xPos": 1000,
            "yPos": -2000,
            "levelCollisions": [false, true, false, false],
            "spawnPoint": {
                "name": "tl4_Checkpoint_001",
                "type": "checkpoint",
                "tex": Assets.Textures.SPAWNPOINT_CHECKPOINT,
                "texActive": Assets.Textures.SPAWNPOINT_CHECKPOINT_ACTIVE,
                "x": 3,
                "y": 2
            },
            "tiles": [],
            "objects": []
        };
        Levels.testLevel5 = {
            "name": "testLevel5",
            "width": 1000,
            "height": 1000,
            "gridSize": 50,
            "colour": "white",
            "xPos": 1000,
            "yPos": -3000,
            "levelCollisions": [true, true, false, true],
            "spawnPoint": {
                "name": "tl5_End",
                "type": "end",
                "tex": Assets.Textures.SPAWNPOINT_END,
                "x": 9,
                "y": 9
            },
            "tiles": [],
            "objects": []
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
        BaseComponent.prototype.render = function (transform, camera, bDrawDebugs) {
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
    var CollisionType;
    (function (CollisionType) {
        CollisionType[CollisionType["BLOCKING"] = 0] = "BLOCKING";
        CollisionType[CollisionType["NON_BLOCKING"] = 1] = "NON_BLOCKING";
    })(CollisionType = MG.CollisionType || (MG.CollisionType = {}));
    var BoxCollisionResult = /** @class */ (function () {
        function BoxCollisionResult(a, b, side, separation, type) {
            this.objectA = a;
            this.objectB = b;
            this._rawSide = side;
            this.separation = separation;
            this.type = type;
            this._calculatedSide = this.calculateSide();
        }
        BoxCollisionResult.prototype.calculateSide = function () {
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
        Object.defineProperty(BoxCollisionResult.prototype, "rawSide", {
            get: function () {
                return this._rawSide;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BoxCollisionResult.prototype, "side", {
            get: function () {
                return this._calculatedSide;
            },
            enumerable: false,
            configurable: true
        });
        BoxCollisionResult.prototype.drawResult = function (x, y, colour) {
            if (colour === void 0) { colour = 'violet'; }
            var output = this.objectA.name + " is colliding with " + this.objectB.name + " on side " + CollisionSide[this.side] + " with separation of " + this.separation.x + ", " + this.separation.y;
            MG.ctx.fillStyle = colour;
            MG.ctx.fillText(output, x, y);
        };
        return BoxCollisionResult;
    }());
    MG.BoxCollisionResult = BoxCollisionResult;
    var PointInBoxResult = /** @class */ (function () {
        function PointInBoxResult() {
            this._placeholder = 'pibr_placeholder';
        }
        return PointInBoxResult;
    }());
    MG.PointInBoxResult = PointInBoxResult;
    var CollisionComponent = /** @class */ (function (_super) {
        __extends(CollisionComponent, _super);
        function CollisionComponent(name, width, height, transform, type) {
            var _this = _super.call(this, name) || this;
            _this._transform = new MG.Transform();
            _this._width = width;
            _this._height = height;
            _this._transform = transform;
            _this._collisionType = type;
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
        Object.defineProperty(CollisionComponent.prototype, "collisionType", {
            get: function () {
                return this._collisionType;
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
            // rightA = leftA + this._width + movement.y; // no way... #2
            // rightA = leftA + this._width + movement.x; // no way... #3
            rightA = leftA + this._width;
            // topA = this._transform.position.y - this._height/2 + movement.x; // no way...
            topA = this._transform.position.y - this._height / 2 + movement.y;
            // bottomA = topA + this._height + movement.y; // no way... #4
            bottomA = topA + this._height;
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
            return new BoxCollisionResult(this.owner, collisionObject.owner, side, new MG.Vector2(sepX, sepY), collisionObject.collisionType);
        };
        CollisionComponent.prototype.checkPointWithin = function (point) {
            var left = this._transform.position.x - this._width / 2;
            var right = left + this._width;
            var top = this._transform.position.y - this._height / 2;
            var bottom = top + this._height;
            if (point.x < left)
                return undefined;
            if (point.x > right)
                return undefined;
            if (point.y < top)
                return undefined;
            if (point.y > bottom)
                return undefined;
            return new PointInBoxResult();
        };
        CollisionComponent.prototype.checkBoxContained = function (containingBox) {
            var leftA, leftB, rightA, rightB, topA, topB, bottomA, bottomB;
            leftA = this._transform.position.x - this._width / 2;
            rightA = leftA + this._width;
            topA = this._transform.position.y - this._height / 2;
            bottomA = topA + this._height;
            leftB = containingBox.transform.position.x - containingBox.width / 2;
            rightB = leftB + containingBox.width;
            topB = containingBox.transform.position.y - containingBox.height / 2;
            bottomB = topB + containingBox.height;
            if (bottomA < bottomB && topA > topB && leftA > leftB && rightA < rightB)
                return true;
            return false;
        };
        return CollisionComponent;
    }(MG.BaseComponent));
    MG.CollisionComponent = CollisionComponent;
})(MG || (MG = {}));
var MG;
(function (MG) {
    var SpriteComponent = /** @class */ (function (_super) {
        __extends(SpriteComponent, _super);
        function SpriteComponent(name, textureNames, width, height, sprite) {
            if (width === void 0) { width = 100; }
            var _this = _super.call(this, name) || this;
            if (sprite)
                _this._sprite = sprite;
            else
                _this._sprite = new MG.Sprite(width, height !== undefined ? height : width, textureNames);
            return _this;
        }
        Object.defineProperty(SpriteComponent.prototype, "dimensions", {
            get: function () {
                return new MG.Vector2(this._sprite.width, this._sprite.height);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SpriteComponent.prototype, "frame", {
            get: function () {
                return this._sprite.currentTexture;
            },
            set: function (f) {
                this._sprite.currentTexture = f;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Enables/initialises animation of the sprite
         * @param duration The time, in milliseconds (ms), one play of the animation takes
         * @param playIterations The number of times the animation will loop before finishing. -1 for infinite
         * @param playDirection The direction the animation will play in. Default: Forwards
         */
        SpriteComponent.prototype.enableAnimation = function (duration, playIterations, playDirection) {
            this._sprite.enableAnimation(duration, playIterations, playDirection);
        };
        SpriteComponent.prototype.play = function () {
            this._sprite.startAnimation();
        };
        SpriteComponent.prototype.pause = function () {
            this._sprite.pauseAnimation();
        };
        SpriteComponent.fromSprite = function (name, sprite) {
            return new SpriteComponent(name, undefined, undefined, undefined, sprite);
        };
        SpriteComponent.prototype.update = function (deltaTime) {
            _super.prototype.update.call(this, deltaTime);
            this._sprite.update(deltaTime);
        };
        SpriteComponent.prototype.render = function (transform, camera, bDrawDebugs) {
            _super.prototype.render.call(this, transform, camera);
            this._sprite.draw(transform, camera, bDrawDebugs);
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
        oObject.prototype.enableCollisionFromSprite = function (spriteComponentName, bIsStatic, collisionType) {
            if (bIsStatic === void 0) { bIsStatic = true; }
            if (collisionType === void 0) { collisionType = MG.CollisionType.BLOCKING; }
            var dimensions = this.getComponent(spriteComponentName).dimensions;
            this.enableCollision(dimensions.x, dimensions.y, bIsStatic, collisionType);
        };
        oObject.prototype.enableCollision = function (width, height, bIsStatic, collisionType) {
            if (bIsStatic === void 0) { bIsStatic = true; }
            if (collisionType === void 0) { collisionType = MG.CollisionType.BLOCKING; }
            this._collisionComponent = new MG.CollisionComponent(this._name + 'CollisionComponent', width, height, this._worldTransform !== undefined ? this._worldTransform : this._transform, collisionType);
            this._bIsStatic = bIsStatic;
            this._collisionComponent.setOwner(this);
        };
        oObject.prototype.disableCollision = function () {
            // TODO // necessary?
            delete this._collisionComponent;
            this._collisionComponent = undefined;
            this._bIsStatic = true;
        };
        oObject.prototype.onCollision = function (collidingObject) { };
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
        oObject.prototype.getComponents = function () {
            return this._components;
        };
        // TODO // provide overriding load functionality for all classes inheriting from oObject
        oObject.load = function (data, level) {
            var obj = new oObject(level.name + '_' + data['name'], level);
            // create components                        // TODO // yuo may be best off seperating this into seperate functions, or something... this is going to be interesting to handle when dealing with sub-classes
            for (var _i = 0, _a = data['components']; _i < _a.length; _i++) {
                var cD = _a[_i];
                switch (cD['type']) {
                    case 'sprite':
                        obj.addComponent(new MG.SpriteComponent(cD['name'], [cD['texture']], cD['width'], cD['height']));
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
                c.render(this._worldTransform, camera, bDrawDebugs);
            }
            for (var _b = 0, _c = this._children; _b < _c.length; _b++) {
                var c = _c[_b];
                c.render(camera, bDrawDebugs);
            }
            if (bDrawDebugs) {
                // collision
                if (this._collisionComponent !== undefined) {
                    var tex = MG.TextureManager.getTexture('collisionDebug');
                    tex.draw(camera, true, this._collisionComponent.transform.position.x, this._collisionComponent.transform.position.y, 0, this._collisionComponent.width, this._collisionComponent.height);
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
            var _this = 
            // TODO // doens't allow for multiple cameras, not important for now/this project
            _super.call(this, name, undefined, 1) || this;
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
            this.FRAME_TIME = 0;
            this.LAST_FRAME = 0;
            window.onresize = function () { return _this.resize(); };
            document.addEventListener('contentAdded', function (e) { return _this.resize(); }); // so when header/footer are loaded in canvas is resized
            this._canvas = MG.Utilities.initialise(canvasID);
        }
        Engine.prototype.Start = function () {
            MG.TextureManager.load();
            MG.InputHandler.initialise();
            MG.LevelManager.initialise(100);
            // let player: Player = new Player('player', [Assets.Textures.defaultPlayerTexture], 50);
            var player = new MG.Player('player', Assets.Textures.playerFrames, 50);
            player.enableCollisionFromSprite();
            player.createPlayerCamera(this._canvas.width, this._canvas.height);
            player.enableAnimations(2000, -1);
            // this obviously isn't the best way to do this...
            MG.LevelManager.loadLevel(Assets.Levels.testLevel1);
            MG.LevelManager.loadLevel(Assets.Levels.testLevel2);
            MG.LevelManager.loadLevel(Assets.Levels.testLevel3);
            MG.LevelManager.loadLevel(Assets.Levels.testLevel4);
            MG.LevelManager.loadLevel(Assets.Levels.testLevel5);
            MG.LevelManager.loadLevel(Assets.Levels.testLevel0);
            MG.LevelManager.bDrawDebugs = Assets.GameOptions.bDrawDebugs;
            if (MG.LevelManager.bDrawDebugs)
                MG.TextureManager.addTexture(new MG.Texture('collisionDebug', 1, 1, MG.Colour.red()));
            MG.LevelManager.spawnPlayer();
            this.resize();
            this.mainLoop();
        };
        Engine.prototype.mainLoop = function () {
            var _this = this;
            this.FRAME_TIME = performance.now() - this.LAST_FRAME;
            // clear
            MG.ctx.fillStyle = 'black';
            MG.ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
            MG.LevelManager.update(this.FRAME_TIME / 1000);
            MG.LevelManager.render();
            // ui bits
            var fps = Math.round(1000 / this.FRAME_TIME);
            MG.ctx.fillStyle = 'pink';
            MG.ctx.fillText(this.FRAME_TIME + "ms | FPS: " + fps, 20, 20);
            MG.ctx.fillText(MG.LevelManager.player.currentLevel ? MG.LevelManager.player.currentLevel.name : 'the void', 20, 40);
            var relPosX, relPosY;
            if (MG.LevelManager.player.currentLevel) {
                relPosX = MG.LevelManager.player.position.x < MG.LevelManager.currentLevel.centre.x ? -1 : 1;
                relPosY = MG.LevelManager.player.position.y < MG.LevelManager.currentLevel.centre.y ? -1 : 1;
            }
            MG.ctx.fillText(relPosX + ", " + relPosY, 20, 60);
            this.LAST_FRAME = performance.now();
            MG.LevelManager.FRAME++;
            requestAnimationFrame(function () { return _this.mainLoop(); });
        };
        Engine.prototype.resize = function () {
            if (this._canvas === undefined)
                return;
            this._canvas.width = this._canvas.clientWidth;
            this._canvas.height = this._canvas.clientHeight;
            if (MG.LevelManager.camera)
                MG.LevelManager.cameraObject.cameraComponent.handleResize(this._canvas.width, this._canvas.height);
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
        function PlayerObject(name, textures, width) {
            var _this = _super.call(this, name, undefined, 0) || this;
            _this._movement = MG.Vector2.Zero;
            _this._maxSpeed = 150;
            var txN = [];
            for (var _i = 0, textures_1 = textures; _i < textures_1.length; _i++) {
                var tx = textures_1[_i];
                txN.push(tx['name']);
            }
            _this.addComponent(new MG.SpriteComponent(_this.name + 'SpriteComponent', txN, width));
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
        /**
         * Enables/initialises sprite animations for the object
         * @param duration The time, in milliseconds (ms), one play of the animation takes
         * @param playIterations The number of times the animation will loop before finishing. -1 for infinite
         * @param playDirection The direction the animation will play in. Default: Forwards
         */
        PlayerObject.prototype.enableAnimations = function (duration, playIterations, playDirection) {
            var sc = this.getComponent(this.name + 'SpriteComponent');
            sc.enableAnimation(duration, playIterations, playDirection);
            sc.play();
        };
        PlayerObject.prototype.consumeMovement = function () {
            var _this = this;
            var handleResult = function (result) {
                if (!result)
                    return;
                if ( /*result !== undefined && */result.type === MG.CollisionType.BLOCKING) {
                    if (_this._movement.x < 0 && (result.side === MG.CollisionSide.X_NEG)) {
                        if (result.separation.x > 0)
                            _this._movement.x += result.separation.x;
                    }
                    else if (_this._movement.x > 0 && (result.side === MG.CollisionSide.X_POS)) {
                        if (result.separation.x > 0)
                            _this._movement.x -= result.separation.x;
                    }
                    if (_this._movement.y < 0 && (result.side === MG.CollisionSide.Y_NEG)) {
                        if (result.separation.y > 0)
                            _this._movement.y += result.separation.y;
                    }
                    else if (_this._movement.y > 0 && (result.side === MG.CollisionSide.Y_POS)) {
                        if (result.separation.y > 0)
                            _this._movement.y -= result.separation.y;
                    }
                }
                else if (result.type === MG.CollisionType.NON_BLOCKING) {
                    result.objectB.onCollision(result.objectA);
                }
            };
            var objs = [];
            if (this._collisionComponent !== undefined && (this._movement.x !== 0.0 || this._movement.y !== 0.0) && this._level && this._collisionComponent.checkBoxContained(this._level.collisionShape)) {
                // if we're in a level only check for the level's objects
                objs = this._level.rootObject.children.concat(this._level.tiles);
            }
            else if (this._collisionComponent !== undefined && (this._movement.x !== 0.0 || this._movement.y !== 0.0)) {
                // if we're not contained in one level, check all loaded level's objects
                for (var _i = 0, _a = MG.LevelManager.loadedLevels; _i < _a.length; _i++) {
                    var l = _a[_i];
                    objs = objs.concat(l.rootObject.children.concat(l.tiles));
                }
            }
            for (var _b = 0, objs_1 = objs; _b < objs_1.length; _b++) {
                var o = objs_1[_b];
                if (this._movement.x === 0 && this._movement.y === 0)
                    break; // if player isn't moving, don't bother calculating collisions, may nto be useful if I end up adding mobile obstacles etc
                if (o.collisionComponent !== undefined)
                    handleResult(this._collisionComponent.checkColliding(o.collisionComponent, new MG.Vector2(this._movement.x, this._movement.y)));
            }
            // TODO // if applicable, call objects' corresponding on collision/hit functions
            this.position.x += this._movement.x;
            this.position.y += this._movement.y;
        };
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
        PlayerObject.prototype.enableCollisionFromSprite = function () {
            _super.prototype.enableCollisionFromSprite.call(this, this.name + 'SpriteComponent', false);
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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player(name, textures, width) {
            var _this = _super.call(this, name, textures, width) || this;
            _this._health = 10;
            return _this;
        }
        Player.prototype.createPlayerCamera = function (vpWidth, vpHeight) {
            var c = new MG.CameraObject(this.name + "Camera", vpWidth, vpHeight);
            c.cameraComponent.setTarget(this);
        };
        return Player;
    }(MG.PlayerObject));
    MG.Player = Player;
})(MG || (MG = {}));
var MG;
(function (MG) {
    var SpawnPointType;
    (function (SpawnPointType) {
        SpawnPointType["SPAWN"] = "start";
        SpawnPointType["CHECKPOINT"] = "checkpoint";
        SpawnPointType["END"] = "end";
    })(SpawnPointType = MG.SpawnPointType || (MG.SpawnPointType = {}));
    var SpawnPoint = /** @class */ (function (_super) {
        __extends(SpawnPoint, _super);
        function SpawnPoint(name, level, type, textureName, activeTextureName) {
            if (activeTextureName === void 0) { activeTextureName = undefined; }
            var _this = _super.call(this, name, level) || this;
            _this._checkpointActive = false;
            _this._type = type;
            _this.addComponent(new MG.SpriteComponent(_this.name + "_spriteC", [textureName, activeTextureName], type === SpawnPointType.SPAWN ? level.gridSize * 3 : level.gridSize));
            // if type==checkpoint, create no blocking collision
            if (_this._type === SpawnPointType.CHECKPOINT || _this._type === SpawnPointType.END) {
                _this.enableCollisionFromSprite(_this.name + "_spriteC", true, MG.CollisionType.NON_BLOCKING);
            }
            return _this;
        }
        Object.defineProperty(SpawnPoint.prototype, "type", {
            get: function () {
                return this._type;
            },
            enumerable: false,
            configurable: true
        });
        SpawnPoint.load = function (data, level) {
            return new SpawnPoint(data['name'], level, data['type'], data['tex']['name'], data['texActive'] ? data['texActive']['name'] : undefined);
        };
        SpawnPoint.prototype.onCollision = function (collidingObject) {
            _super.prototype.onCollision.call(this, collidingObject);
            if (this._type === SpawnPointType.END)
                MG.LevelManager.restart();
            else if (this._type === SpawnPointType.CHECKPOINT && this._checkpointActive === false)
                MG.LevelManager.setCheckpoint(this);
        };
        SpawnPoint.prototype.enable = function () {
            if (this._type === SpawnPointType.SPAWN)
                return;
            this._checkpointActive = true;
            this.getComponent(this.name + "_spriteC").frame = 1;
        };
        SpawnPoint.prototype.disable = function () {
            if (this._type === SpawnPointType.SPAWN)
                return;
            this._checkpointActive = false;
            this.getComponent(this.name + "_spriteC").frame = 0;
        };
        return SpawnPoint;
    }(MG.oObject));
    MG.SpawnPoint = SpawnPoint;
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
        Colour.fromString = function (col) {
            if (col[0] == '#')
                return Colour.fromHex(col);
            switch (col) {
                case 'white': return Colour.white();
                case 'black': return Colour.black();
                case 'red': return Colour.red();
                case 'green': return Colour.green();
                case 'blue': return Colour.blue();
            }
            return new Colour;
        };
        // TODO // implement parse from hex
        Colour.fromHex = function (col) {
            return undefined;
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
    var SpriteAnimationDirection;
    (function (SpriteAnimationDirection) {
        SpriteAnimationDirection[SpriteAnimationDirection["FORWARDS"] = 1] = "FORWARDS";
        SpriteAnimationDirection[SpriteAnimationDirection["REVERSE"] = -1] = "REVERSE";
    })(SpriteAnimationDirection = MG.SpriteAnimationDirection || (MG.SpriteAnimationDirection = {}));
    var SpriteAnimationSettings = /** @class */ (function () {
        function SpriteAnimationSettings(fc) {
            this._currentFrame = 0;
            this._bPlaying = false;
            /**The duration of the animation in milliseconds (ms) */
            this._animationDuration = 1000;
            this.animationDirection = SpriteAnimationDirection.FORWARDS;
            this._frameCount = fc;
        }
        Object.defineProperty(SpriteAnimationSettings.prototype, "animationDuration", {
            set: function (duration) {
                this._animationDuration = duration;
                this._timeBetweenFrames = duration / this._frameCount;
                this._timeToNextFrame = this._timeBetweenFrames;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SpriteAnimationSettings.prototype, "iterations", {
            get: function () {
                return this._iterations;
            },
            set: function (iterations) {
                // TODO // This offset is just a stop-gap for delaing with reverse animations, doesn't allow anim to end of frame 0 currently. Implement better solution
                var offset = this.animationDirection === SpriteAnimationDirection.REVERSE ? 1 : 0;
                this._iterations = iterations;
                this._remainingIterations = iterations + offset;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SpriteAnimationSettings.prototype, "isPlaying", {
            get: function () {
                return this._bPlaying;
            },
            set: function (state) {
                this._bPlaying = state;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SpriteAnimationSettings.prototype, "timeToNextFrame", {
            get: function () {
                return this._timeToNextFrame;
            },
            set: function (time) {
                this._timeToNextFrame = time;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SpriteAnimationSettings.prototype, "timeBetweenFrames", {
            get: function () {
                return this._timeBetweenFrames;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SpriteAnimationSettings.prototype, "currentFrame", {
            get: function () {
                return this._currentFrame;
            },
            set: function (index) {
                this._currentFrame = index;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SpriteAnimationSettings.prototype, "remainingIterations", {
            get: function () {
                return this._remainingIterations;
            },
            set: function (count) {
                this._remainingIterations = count;
            },
            enumerable: false,
            configurable: true
        });
        return SpriteAnimationSettings;
    }());
    var Sprite = /** @class */ (function () {
        function Sprite(width, height, textureNames) {
            this._textures = [];
            this._width = width;
            this._height = height;
            for (var _i = 0, textureNames_1 = textureNames; _i < textureNames_1.length; _i++) {
                var tn = textureNames_1[_i];
                if (tn !== undefined)
                    this._textures.push(MG.TextureManager.getTexture(tn));
            }
            this._currentTexture = this._textures[0];
            this._animSettings = new SpriteAnimationSettings(this._textures.length);
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
        Object.defineProperty(Sprite.prototype, "currentTexture", {
            get: function () {
                // return this._textures.indexOf(this._currentTexture);
                return this._animSettings.currentFrame;
            },
            set: function (index) {
                var i = index >= this._textures.length ? this._textures.length - 1 : index;
                this._currentTexture = this._textures[i];
                this._animSettings.currentFrame = index;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Enables/initialises animation of the sprite
         * @param duration The time, in milliseconds (ms), one play of the animation takes
         * @param playIterations The number of times the animation will loop before finishing. -1 for infinite
         * @param playDirection The direction the animation will play in. Default: Forwards
         */
        Sprite.prototype.enableAnimation = function (duration, playIterations, playDirection) {
            if (playDirection === void 0) { playDirection = SpriteAnimationDirection.FORWARDS; }
            this._animSettings = new SpriteAnimationSettings(this._textures.length);
            this._animSettings.animationDuration = duration;
            this._animSettings.animationDirection = playDirection;
            this._animSettings.iterations = playIterations;
            console.log(this._animSettings);
        };
        Sprite.prototype.startAnimation = function () {
            if (this._animSettings.remainingIterations !== 0)
                this._animSettings.isPlaying = true;
        };
        Sprite.prototype.pauseAnimation = function () {
            this._animSettings.isPlaying = false;
        };
        Sprite.prototype.update = function (deltaTime) {
            if (this._animSettings && this._textures.length > 1) {
                // animate!!!
                if (!this._animSettings.isPlaying)
                    return;
                this._animSettings.timeToNextFrame -= deltaTime * 1000;
                if (this._animSettings.timeToNextFrame <= 0) {
                    var looped = false;
                    // if due to change
                    var nextI = this._animSettings.currentFrame += this._animSettings.animationDirection;
                    if (nextI < 0) {
                        nextI = this._textures.length - 1;
                        looped = true;
                    }
                    else if (nextI >= this._textures.length) {
                        nextI = 0;
                        looped = true;
                    }
                    this._currentTexture = this._textures[nextI];
                    this._animSettings.currentFrame = nextI;
                    this._animSettings.timeToNextFrame = this._animSettings.timeBetweenFrames;
                    if (this._animSettings.iterations !== -1 && looped) {
                        this._animSettings.remainingIterations--;
                        if (this._animSettings.remainingIterations === 0)
                            this._animSettings.isPlaying = false;
                    }
                }
            }
        };
        Sprite.prototype.draw = function (transform, camera, bDrawDebugs) {
            this._currentTexture.draw(camera, bDrawDebugs, transform.position.x, transform.position.y, transform.rotation, this._width, this._height);
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
            this._baseColour = MG.Colour.white();
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
        Texture.prototype.draw = function (camera, bDrawCentre, _x, _y, rotation, width, height, fit) {
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
            if (this._baseColour)
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
            if (bDrawCentre) {
                MG.ctx.fillStyle = 'orange';
                MG.ctx.fillRect(_x - 2.5 - camera.view.position.x, _y - 2.5 - camera.view.position.y, 5, 5);
            }
        };
        Texture.load = function (data) {
            var temp = new Texture(data['name'], data['width'], data['height'], data['baseColour'] ? new MG.Colour(data['baseColour']['r'], data['baseColour']['g'], data['baseColour']['b']) : undefined);
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
            return TextureManager._textures[textureName].texture;
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
    var TileSpriteManager = /** @class */ (function () {
        function TileSpriteManager() {
        }
        TileSpriteManager.getSprite = function (textureName) {
            // if (TileSpriteManager._sprites[textureName] === undefined) return undefined;
            return (TileSpriteManager._sprites[textureName]);
        };
        TileSpriteManager.addSprite = function (width, textureName) {
            if (TileSpriteManager.getSprite(textureName)) {
                console.warn('The tile-sprite using texture', textureName, 'already exists.');
                return TileSpriteManager.getSprite(textureName);
            }
            var s = new MG.Sprite(width, width, [textureName]);
            TileSpriteManager._sprites[textureName] = s;
            return s;
        };
        TileSpriteManager._sprites = {};
        return TileSpriteManager;
    }());
    var Tile = /** @class */ (function (_super) {
        __extends(Tile, _super);
        function Tile(textureName, level) {
            var _this = _super.call(this, level.name + "_TILE_" + textureName, level) || this;
            _this._width = _this._level.gridSize;
            var ts = TileSpriteManager.getSprite(textureName);
            if (ts === undefined)
                ts = TileSpriteManager.addSprite(_this._width, textureName);
            _this.addComponent(MG.SpriteComponent.fromSprite(level.name + "_TEXTURECOMPONENT_" + textureName, ts));
            return _this;
        }
        return Tile;
    }(MG.oObject));
    MG.Tile = Tile;
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
            this._tiles = [];
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
            this._rootObject.position = this._transform.position;
            this.generateBorderCollisions();
            MG.TextureManager.addTexture(new MG.Texture("LEVEL_" + this._name + "_BASE", 1, 1, this._baseColour));
            this._baseTexture = new MG.Sprite(this._width, this._height, ["LEVEL_" + this._name + "_BASE"]);
            this._levelDetectionCollision = new MG.CollisionComponent(this._name + "_levelCollisionComponent", this._width, this._height, this._transform, MG.CollisionType.NON_BLOCKING);
        }
        Object.defineProperty(Level.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Level.prototype, "gridSize", {
            get: function () {
                return this._gridSize;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Level.prototype, "centre", {
            get: function () {
                return this._transform.position;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Level.prototype, "collisionShape", {
            get: function () {
                return this._levelDetectionCollision;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Level.prototype, "tiles", {
            get: function () {
                return this._tiles;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Level.prototype, "spawnPoint", {
            get: function () {
                return this._spawnPoint;
            },
            set: function (sp) {
                this._spawnPoint = sp;
            },
            enumerable: false,
            configurable: true
        });
        Level.prototype.generateBorderCollisions = function () {
            var oTemp;
            var borderWidth = this._gridSize;
            if (this._bBorderCollisions[0]) {
                oTemp = new MG.oObject(this._name + "_levelCollisionObject_T", this);
                oTemp.enableCollision(this._width, borderWidth);
                oTemp.position.y = -this._height / 2 - borderWidth / 2;
                this._rootObject.addChild(oTemp);
            }
            if (this._bBorderCollisions[1]) {
                oTemp = new MG.oObject(this._name + "_levelCollisionObject_R", this);
                oTemp.enableCollision(borderWidth, this._height);
                oTemp.position.x = this._width / 2 + borderWidth / 2;
                this._rootObject.addChild(oTemp);
            }
            if (this._bBorderCollisions[2]) {
                oTemp = new MG.oObject(this._name + "_levelCollisionObject_B", this);
                oTemp.enableCollision(this._width, borderWidth);
                oTemp.position.y = this._width / 2 + borderWidth / 2;
                this._rootObject.addChild(oTemp);
            }
            if (this._bBorderCollisions[3]) {
                oTemp = new MG.oObject(this._name + "_levelCollisionObject_L", this);
                oTemp.enableCollision(borderWidth, this._height);
                oTemp.position.x = -this._height / 2 - borderWidth / 2;
                this._rootObject.addChild(oTemp);
            }
        };
        Level.load = function (data) {
            var level = new Level(data['name'], data['width'], data['height'], data['gridSize'], MG.Colour.fromString(data['colour']), data['xPos'], data['yPos'], data['levelCollisions']);
            // tile logic goes here
            var tTemp;
            for (var _i = 0, _a = data['tiles']; _i < _a.length; _i++) {
                var t = _a[_i];
                tTemp = new MG.Tile(t['obj']['name'], level);
                tTemp.position.x = t['x'] * level.gridSize - level._width / 2 + level.gridSize / 2;
                tTemp.position.y = t['y'] * level.gridSize - level._height / 2 + level.gridSize / 2;
                tTemp.rotation = t['d'];
                tTemp.update(0);
                // TODO // move collision creation to tile constructor
                if (t['collision'] === "wall")
                    tTemp.enableCollisionFromSprite(level.name + '_TEXTURECOMPONENT_' + t['obj']['name'], true); // in theory this is working????
                level.tiles.push(tTemp);
            }
            // spawn/create objects
            var oTemp;
            for (var _b = 0, _c = data['objects']; _b < _c.length; _b++) {
                var o = _c[_b];
                oTemp = MG.oObject.load(o['obj'], level);
                oTemp.position.x = o['x'];
                oTemp.position.y = o['y'];
                level.rootObject.addChild(oTemp);
            }
            // spawnpoint/checkpoint spawn/registration
            var spD = data['spawnPoint'];
            if (spD) {
                var sp = void 0;
                sp = MG.SpawnPoint.load(spD, level);
                if (sp.type === MG.SpawnPointType.SPAWN)
                    MG.LevelManager.registerSpawn(sp);
                level.rootObject.addChild(sp);
                level.spawnPoint = sp;
                level.spawnPoint.position.x = spD['x'] * level.gridSize - level._width / 2 + level.gridSize / 2;
                level.spawnPoint.position.y = spD['y'] * level.gridSize - level._height / 2 + level.gridSize / 2;
                level.spawnPoint.update(0);
            }
            return level;
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
        Level.prototype.checkHasPlayer = function (point) {
            if (this._levelDetectionCollision.checkPointWithin(point))
                return true;
            return false;
        };
        Level.prototype.render = function (bDrawDebugs) {
            if (bDrawDebugs === void 0) { bDrawDebugs = false; }
            // render level
            this._baseTexture.draw(this._transform, MG.LevelManager.camera, bDrawDebugs);
            // render tiles
            for (var _i = 0, _a = this._tiles; _i < _a.length; _i++) {
                var t = _a[_i];
                t.render(MG.LevelManager.camera, bDrawDebugs);
            }
            // render objects
            this._rootObject.render(MG.LevelManager.camera, bDrawDebugs);
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
                // this._currentLevel.load();
                // not sure this is the best place/way to set this, especially if I plan on updating this during game
                this._gameState.player.currentLevel = this._currentLevel;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LevelManager, "bDrawDebugs", {
            get: function () {
                return LevelManager._bDrawDebugs;
            },
            set: function (draw) {
                LevelManager._bDrawDebugs = draw;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LevelManager, "loadedLevels", {
            get: function () {
                return this._loadedLevels;
            },
            enumerable: false,
            configurable: true
        });
        LevelManager.registerSpawn = function (sp) {
            this._spawnStart = sp;
            if (!this._spawnCurrent)
                this._spawnCurrent = sp;
        };
        LevelManager.setCheckpoint = function (cp) {
            this._spawnCurrent.disable();
            this._spawnCurrent = cp;
            this._spawnCurrent.enable();
        };
        LevelManager.spawnPlayer = function () {
            this._gameState.player.position.copyFrom(this._spawnCurrent.worldTransform.position);
        };
        // temporary game-loop
        LevelManager.restart = function () {
            this._spawnCurrent = this._spawnStart;
            this.spawnPlayer();
        };
        LevelManager.update = function (deltaTime) {
            // this._currentLevel.update(deltaTime);
            for (var _i = 0, _a = this._loadedLevels; _i < _a.length; _i++) {
                var l = _a[_i];
                l.update(deltaTime);
            }
            this._gameState.player.update(deltaTime);
            this._gameState.camera.update(deltaTime);
            // handle current level detection
            var cl = undefined;
            for (var _b = 0, _c = this._loadedLevels; _b < _c.length; _b++) {
                var l = _c[_b];
                if (l.checkHasPlayer(this._gameState.player.position)) {
                    cl = l;
                    break;
                }
            }
            this._currentLevel = cl;
            this._gameState.player.currentLevel = cl;
        };
        LevelManager.render = function () {
            // this._currentLevel.render();
            for (var _i = 0, _a = this._loadedLevels; _i < _a.length; _i++) {
                var l = _a[_i];
                l.render(this._bDrawDebugs);
            }
            this._gameState.player.render(this.camera, this._bDrawDebugs);
        };
        Object.defineProperty(LevelManager, "player", {
            get: function () {
                return this._gameState.player;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LevelManager, "cameraObject", {
            get: function () {
                // console.log('gamestate:', this._gameState);
                return this._gameState.camera;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LevelManager, "camera", {
            get: function () {
                return this.cameraObject.cameraComponent.camera;
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
        LevelManager.loadLevel = function (level) {
            var l = MG.Level.load(level);
            LevelManager._loadedLevels.push(l);
            LevelManager.currentLevel = l;
        };
        LevelManager.FRAME = 0;
        LevelManager._loadedLevels = [];
        LevelManager._bDrawDebugs = false;
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
