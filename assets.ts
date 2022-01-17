namespace Assets.GameOptions {
    export const bDrawDebugs = false;
}

namespace Assets.Objects {
    export const testLevelCentre: object = {
        "name":"testLevelCentre",
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
    }
}

namespace Assets.Textures {
    export const defaultPlayerTexture: object = {
        "name": "defaultPlayerTexture",
        "width": 9,
        "height": 9,
        // "baseColour": {"r": 170,"g": 51,"b": 164},
        "baseColour": undefined,
        "layers": [
            {
                "colour": {"r": 227,"g": 16,"b": 149},
                "points": [
                    {"x": 2, "y": 0},
                    {"x": 6, "y": 0},
                    {"x": 1, "y": 1},
                    {"x": 4, "y": 1},
                    {"x": 7, "y": 1},
                    {"x": 0, "y": 2},
                    {"x": 2, "y": 2},
                    {"x": 6, "y": 2},
                    {"x": 8, "y": 2},
                    {"x": 3, "y": 3},
                    {"x": 5, "y": 3},
                    {"x": 1, "y": 4},
                    {"x": 4, "y": 4},
                    {"x": 7, "y": 4},
                    {"x": 3, "y": 5},
                    {"x": 5, "y": 5},
                    {"x": 0, "y": 6},
                    {"x": 2, "y": 6},
                    {"x": 6, "y": 6},
                    {"x": 8, "y": 6},
                    {"x": 1, "y": 7},
                    {"x": 4, "y": 7},
                    {"x": 7, "y": 7},
                    {"x": 2, "y": 8},
                    {"x": 6, "y": 8}
                ]
            }
        ]
    }
    export const playerFrame0: object = {
        "name": "playerFrame0",
        "frame": 0,
        "width": 9,
        "height": 9,
        "baseColour": undefined,
        "layers": [
            {
                "colour": {"r": 227,"g": 16,"b": 149},
                "points": [
                    {"x": 1, "y": 1},
                    {"x": 7, "y": 1},
                    {"x": 3, "y": 3},
                    {"x": 5, "y": 3},
                    {"x": 1, "y": 4},
                    {"x": 4, "y": 4},
                    {"x": 7, "y": 4},
                    {"x": 3, "y": 5},
                    {"x": 5, "y": 5},
                    {"x": 1, "y": 7},
                    {"x": 4, "y": 7},
                    {"x": 7, "y": 7}
                ]
            },
            {
                "colour": {"r": 72,"g": 137,"b": 227},
                "points": [
                    {"x": 4, "y": 1}
                ]
            },
            {
                "colour": {"r": 85,"g": 98,"b": 113},
                "points": [
                    {"x": 0, "y": 0},
                    {"x": 8, "y": 0},
                    {"x": 2, "y": 2},
                    {"x": 6, "y": 2},
                    {"x": 2, "y": 6},
                    {"x": 6, "y": 6},
                    {"x": 0, "y": 8},
                    {"x": 8, "y": 8},
                ]
            }
        ]
    }
    export const playerFrame1: object = {
        "name": "playerFrame1",
        "frame": 0,
        "width": 9,
        "height": 9,
        "baseColour": undefined,
        "layers": [
            {
                "colour": {"r": 227,"g": 16,"b": 149},
                "points": [
                    {"x": 1, "y": 1},
                    {"x": 4, "y": 1},
                    {"x": 7, "y": 1},
                    {"x": 0, "y": 2},
                    {"x": 2, "y": 2},
                    {"x": 3, "y": 3},
                    {"x": 5, "y": 3},
                    {"x": 1, "y": 4},
                    {"x": 4, "y": 4},
                    {"x": 7, "y": 4},
                    {"x": 3, "y": 5},
                    {"x": 5, "y": 5},
                    {"x": 2, "y": 6},
                    {"x": 6, "y": 6},
                    {"x": 1, "y": 7},
                    {"x": 4, "y": 7},
                    {"x": 7, "y": 7}
                ]
            },
            {
                "colour": {"r": 72,"g": 137,"b": 227},
                "points": [
                    {"x": 6, "y": 2}
                ]
            },
            {
                "colour": {"r": 85,"g": 98,"b": 113},
                "points": [
                    {"x": 2, "y": 0},
                    {"x": 6, "y": 0},
                    {"x": 0, "y": 2},
                    {"x": 8, "y": 2},
                    {"x": 0, "y": 6},
                    {"x": 8, "y": 6},
                    {"x": 2, "y": 8},
                    {"x": 6, "y": 8}
                ]
            }
        ]
    }
    export const playerFrame2: object = {
        "name": "playerFrame2",
        "frame": 0,
        "width": 9,
        "height": 9,
        "baseColour": undefined,
        "layers": [
            {
                "colour": {"r": 227,"g": 16,"b": 149},
                "points": [
                    {"x": 1, "y": 1},
                    {"x": 4, "y": 1},
                    {"x": 7, "y": 1},
                    {"x": 3, "y": 3},
                    {"x": 5, "y": 3},
                    {"x": 1, "y": 4},
                    {"x": 4, "y": 4},
                    {"x": 3, "y": 5},
                    {"x": 5, "y": 5},
                    {"x": 1, "y": 7},
                    {"x": 4, "y": 7},
                    {"x": 7, "y": 7}
                ]
            },
            {
                "colour": {"r": 72,"g": 137,"b": 227},
                "points": [
                    {"x": 7, "y": 4}
                ]
            },
            {
                "colour": {"r": 85,"g": 98,"b": 113},
                "points": [
                    {"x": 0, "y": 0},
                    {"x": 8, "y": 0},
                    {"x": 2, "y": 2},
                    {"x": 6, "y": 2},
                    {"x": 2, "y": 6},
                    {"x": 6, "y": 6},
                    {"x": 0, "y": 8},
                    {"x": 8, "y": 8},
                ]
            }
        ]
    }
    export const playerFrame3: object = {
        "name": "playerFrame3",
        "frame": 0,
        "width": 9,
        "height": 9,
        "baseColour": undefined,
        "layers": [
            {
                "colour": {"r": 227,"g": 16,"b": 149},
                "points": [
                    {"x": 1, "y": 1},
                    {"x": 4, "y": 1},
                    {"x": 7, "y": 1},
                    {"x": 2, "y": 2},
                    {"x": 6, "y": 2},
                    {"x": 3, "y": 3},
                    {"x": 5, "y": 3},
                    {"x": 1, "y": 4},
                    {"x": 4, "y": 4},
                    {"x": 7, "y": 4},
                    {"x": 3, "y": 5},
                    {"x": 5, "y": 5},
                    {"x": 2, "y": 6},
                    {"x": 1, "y": 7},
                    {"x": 4, "y": 7},
                    {"x": 7, "y": 7}
                ]
            },
            {
                "colour": {"r": 72,"g": 137,"b": 227},
                "points": [
                    {"x": 6, "y": 6}
                ]
            },
            {
                "colour": {"r": 85,"g": 98,"b": 113},
                "points": [
                    {"x": 2, "y": 0},
                    {"x": 6, "y": 0},
                    {"x": 0, "y": 2},
                    {"x": 8, "y": 2},
                    {"x": 0, "y": 6},
                    {"x": 8, "y": 6},
                    {"x": 2, "y": 8},
                    {"x": 6, "y": 8}
                ]
            }
        ]
    }
    export const playerFrame4: object = {
        "name": "playerFrame4",
        "frame": 0,
        "width": 9,
        "height": 9,
        "baseColour": undefined,
        "layers": [
            {
                "colour": {"r": 227,"g": 16,"b": 149},
                "points": [
                    {"x": 1, "y": 1},
                    {"x": 4, "y": 1},
                    {"x": 7, "y": 1},
                    {"x": 3, "y": 3},
                    {"x": 5, "y": 3},
                    {"x": 1, "y": 4},
                    {"x": 4, "y": 4},
                    {"x": 7, "y": 4},
                    {"x": 3, "y": 5},
                    {"x": 5, "y": 5},
                    {"x": 1, "y": 7},
                    {"x": 7, "y": 7}
                ]
            },
            {
                "colour": {"r": 72,"g": 137,"b": 227},
                "points": [
                    {"x": 4, "y": 7}
                ]
            },
            {
                "colour": {"r": 85,"g": 98,"b": 113},
                "points": [
                    {"x": 0, "y": 0},
                    {"x": 8, "y": 0},
                    {"x": 2, "y": 2},
                    {"x": 6, "y": 2},
                    {"x": 2, "y": 6},
                    {"x": 6, "y": 6},
                    {"x": 0, "y": 8},
                    {"x": 8, "y": 8},
                ]
            }
        ]
    }
    export const playerFrame5: object = {
        "name": "playerFrame5",
        "frame": 0,
        "width": 9,
        "height": 9,
        "baseColour": undefined,
        "layers": [
            {
                "colour": {"r": 227,"g": 16,"b": 149},
                "points": [
                    {"x": 1, "y": 1},
                    {"x": 4, "y": 1},
                    {"x": 7, "y": 1},
                    {"x": 2, "y": 2},
                    {"x": 6, "y": 2},
                    {"x": 3, "y": 3},
                    {"x": 5, "y": 3},
                    {"x": 1, "y": 4},
                    {"x": 4, "y": 4},
                    {"x": 7, "y": 4},
                    {"x": 3, "y": 5},
                    {"x": 5, "y": 5},
                    {"x": 6, "y": 6},
                    {"x": 1, "y": 7},
                    {"x": 4, "y": 7},
                    {"x": 7, "y": 7}
                ]
            },
            {
                "colour": {"r": 72,"g": 137,"b": 227},
                "points": [
                    {"x": 2, "y": 6}
                ]
            },
            {
                "colour": {"r": 85,"g": 98,"b": 113},
                "points": [
                    {"x": 2, "y": 0},
                    {"x": 6, "y": 0},
                    {"x": 0, "y": 2},
                    {"x": 8, "y": 2},
                    {"x": 0, "y": 6},
                    {"x": 8, "y": 6},
                    {"x": 2, "y": 8},
                    {"x": 6, "y": 8}
                ]
            }
        ]
    }
    export const playerFrame6: object = {
        "name": "playerFrame6",
        "frame": 0,
        "width": 9,
        "height": 9,
        "baseColour": undefined,
        "layers": [
            {
                "colour": {"r": 227,"g": 16,"b": 149},
                "points": [
                    {"x": 1, "y": 1},
                    {"x": 4, "y": 1},
                    {"x": 7, "y": 1},
                    {"x": 3, "y": 3},
                    {"x": 5, "y": 3},
                    {"x": 4, "y": 4},
                    {"x": 7, "y": 4},
                    {"x": 3, "y": 5},
                    {"x": 5, "y": 5},
                    {"x": 1, "y": 7},
                    {"x": 4, "y": 7},
                    {"x": 7, "y": 7}
                ]
            },
            {
                "colour": {"r": 72,"g": 137,"b": 227},
                "points": [
                    {"x": 1, "y": 4}
                ]
            },
            {
                "colour": {"r": 85,"g": 98,"b": 113},
                "points": [
                    {"x": 0, "y": 0},
                    {"x": 8, "y": 0},
                    {"x": 2, "y": 2},
                    {"x": 6, "y": 2},
                    {"x": 2, "y": 6},
                    {"x": 6, "y": 6},
                    {"x": 0, "y": 8},
                    {"x": 8, "y": 8},
                ]
            }
        ]
    }
    export const playerFrame7: object = {
        "name": "playerFrame7",
        "frame": 0,
        "width": 9,
        "height": 9,
        "baseColour": undefined,
        "layers": [
            {
                "colour": {"r": 227,"g": 16,"b": 149},
                "points": [
                    {"x": 1, "y": 1},
                    {"x": 4, "y": 1},
                    {"x": 7, "y": 1},
                    {"x": 6, "y": 2},
                    {"x": 3, "y": 3},
                    {"x": 5, "y": 3},
                    {"x": 1, "y": 4},
                    {"x": 4, "y": 4},
                    {"x": 7, "y": 4},
                    {"x": 3, "y": 5},
                    {"x": 5, "y": 5},
                    {"x": 2, "y": 6},
                    {"x": 6, "y": 6},
                    {"x": 1, "y": 7},
                    {"x": 4, "y": 7},
                    {"x": 7, "y": 7}
                ]
            },
            {
                "colour": {"r": 72,"g": 137,"b": 227},
                "points": [
                    {"x": 2, "y": 2}
                ]
            },
            {
                "colour": {"r": 85,"g": 98,"b": 113},
                "points": [
                    {"x": 2, "y": 0},
                    {"x": 6, "y": 0},
                    {"x": 0, "y": 2},
                    {"x": 8, "y": 2},
                    {"x": 0, "y": 6},
                    {"x": 8, "y": 6},
                    {"x": 2, "y": 8},
                    {"x": 6, "y": 8}
                ]
            }
        ]
    }

    export const testObjectTexture: object = {
        "name": "testObjectTexture",
        "width": 1,
        "height": 1,
        "baseColour": {"r": 255,"g": 0,"b": 255},
        "layers": undefined
    }
    export const TILE_WALL_POST: object = {
        "name": "TILE_WALL_POST",
        "width": 7,
        "height": 7,
        "baseColour": undefined,
        "layers": [
            {
                "colour": {"r": 255,"g": 200,"b": 0},
                "points": [
                    {"x": 0, "y": 0},
                    {"x": 1, "y": 0},
                    {"x": 2, "y": 0},
                    {"x": 3, "y": 0},
                    {"x": 4, "y": 0},
                    {"x": 5, "y": 0},
                    {"x": 6, "y": 0},
                    {"x": 0, "y": 6},
                    {"x": 1, "y": 6},
                    {"x": 2, "y": 6},
                    {"x": 3, "y": 6},
                    {"x": 4, "y": 6},
                    {"x": 5, "y": 6},
                    {"x": 6, "y": 6},
                    {"x": 0, "y": 1},
                    {"x": 0, "y": 2},
                    {"x": 0, "y": 3},
                    {"x": 0, "y": 4},
                    {"x": 0, "y": 5},
                    {"x": 6, "y": 1},
                    {"x": 6, "y": 2},
                    {"x": 6, "y": 3},
                    {"x": 6, "y": 4},
                    {"x": 6, "y": 5},
                ]
            }
        ]
    }
    export const TILE_WALL_DOUBLE: object = {
        "name": "TILE_WALL_DOUBLE",
        "width": 7,
        "height": 7,
        "baseColour": undefined,
        "layers": [
            {
                "colour": {"r": 255,"g": 200,"b": 0},
                "points": [
                    {"x": 0, "y": 0},
                    {"x": 1, "y": 0},
                    {"x": 2, "y": 0},
                    {"x": 3, "y": 0},
                    {"x": 4, "y": 0},
                    {"x": 5, "y": 0},
                    {"x": 6, "y": 0},
                    {"x": 0, "y": 6},
                    {"x": 1, "y": 6},
                    {"x": 2, "y": 6},
                    {"x": 3, "y": 6},
                    {"x": 4, "y": 6},
                    {"x": 5, "y": 6},
                    {"x": 6, "y": 6}
                ]
            }
        ]
    }
    export const TILE_WALL_SINGLE: object = {
        "name": "TILE_WALL_SINGLE",
        "width": 7,
        "height": 7,
        "baseColour": undefined,
        "layers": [
            {
                "colour": {"r": 255,"g": 200,"b": 0},
                "points": [
                    {"x": 0, "y": 0},
                    {"x": 1, "y": 0},
                    {"x": 2, "y": 0},
                    {"x": 3, "y": 0},
                    {"x": 4, "y": 0},
                    {"x": 5, "y": 0},
                    {"x": 6, "y": 0}
                ]
            }
        ]
    }
    export const TILE_WALL_END: object = {
        "name": "TILE_WALL_END",
        "width": 7,
        "height": 7,
        "baseColour": undefined,
        "layers": [
            {
                "colour": {"r": 255,"g": 200,"b": 0},
                "points": [
                    {"x": 0, "y": 0},
                    {"x": 1, "y": 0},
                    {"x": 2, "y": 0},
                    {"x": 3, "y": 0},
                    {"x": 4, "y": 0},
                    {"x": 5, "y": 0},
                    {"x": 6, "y": 0},
                    {"x": 0, "y": 6},
                    {"x": 1, "y": 6},
                    {"x": 2, "y": 6},
                    {"x": 3, "y": 6},
                    {"x": 4, "y": 6},
                    {"x": 5, "y": 6},
                    {"x": 6, "y": 6},
                    {"x": 6, "y": 1},
                    {"x": 6, "y": 2},
                    {"x": 6, "y": 3},
                    {"x": 6, "y": 4},
                    {"x": 6, "y": 5}
                ]
            }
        ]
    }
    export const TILE_WALL_DOUBLE_CORNER: object = {
        "name": "TILE_WALL_DOUBLE_CORNER",
        "width": 7,
        "height": 7,
        "baseColour": undefined,
        "layers": [
            {
                "colour": {"r": 255,"g": 200,"b": 0},
                "points": [
                    {"x": 0, "y": 0},
                    {"x": 1, "y": 0},
                    {"x": 2, "y": 0},
                    {"x": 3, "y": 0},
                    {"x": 4, "y": 0},
                    {"x": 5, "y": 0},
                    {"x": 6, "y": 0},
                    {"x": 6, "y": 1},
                    {"x": 6, "y": 2},
                    {"x": 6, "y": 3},
                    {"x": 6, "y": 4},
                    {"x": 6, "y": 5},
                    {"x": 6, "y": 6},
                    {"x": 0, "y": 6}
                ]
            }
        ]
    }
    export const TILE_WALL_SINGLE_CORNER_INTERIOR: object = {
        "name": "TILE_WALL_SINGLE_CORNER_INTERIOR",
        "width": 7,
        "height": 7,
        "baseColour": undefined,
        "layers": [
            {
                "colour": {"r": 255,"g": 200,"b": 0},
                "points": [
                    {"x": 0, "y": 6}
                ]
            }
        ]
    }
    export const TILE_WALL_SINGLE_CORNER_EXTERIOR: object = {
        "name": "TILE_WALL_SINGLE_CORNER_EXTERIOR",
        "width": 7,
        "height": 7,
        "baseColour": undefined,
        "layers": [
            {
                "colour": {"r": 255,"g": 200,"b": 0},
                "points": [
                    {"x": 0, "y": 0},
                    {"x": 1, "y": 0},
                    {"x": 2, "y": 0},
                    {"x": 3, "y": 0},
                    {"x": 4, "y": 0},
                    {"x": 5, "y": 0},
                    {"x": 6, "y": 0},
                    {"x": 6, "y": 1},
                    {"x": 6, "y": 2},
                    {"x": 6, "y": 3},
                    {"x": 6, "y": 4},
                    {"x": 6, "y": 5},
                    {"x": 6, "y": 6}
                ]
            }
        ]
    }
    export const TILE_FLOOR_TEST: object = {
        "name": "TILE_FLOOR_TEST",
        "width": 7,
        "height": 7,
        "baseColour": undefined,
        "layers": [
            {
                "colour": {"r": 255,"g": 200,"b": 255},
                "points": [
                    {"x": 3, "y": 3},
                    {"x": 1, "y": 1},
                    {"x": 1, "y": 2},
                    {"x": 1, "y": 3},
                    {"x": 1, "y": 4},
                    {"x": 1, "y": 5},
                    {"x": 5, "y": 1},
                    {"x": 5, "y": 2},
                    {"x": 5, "y": 3},
                    {"x": 5, "y": 4},
                    {"x": 5, "y": 5},
                    {"x": 2, "y": 1},
                    {"x": 3, "y": 1},
                    {"x": 4, "y": 1},
                    {"x": 2, "y": 5},
                    {"x": 3, "y": 5},
                    {"x": 4, "y": 5},
                ]
            }
        ]
    }

    /*export const SPAWNPOINT: object = {
        "name": "SPAWNPOINT",
        "width": 11,
        "height": 11,
        "baseColour": undefined,
        "layers": [
            {
                "colour": {"r": 163,"g": 152,"b": 94},
                "points": [
                    {"x": 3, "y": 0},
                    {"x": 4, "y": 0},
                    {"x": 5, "y": 0},
                    {"x": 6, "y": 0},
                    {"x": 7, "y": 0},
                    {"x": 2, "y": 1},
                    {"x": 8, "y": 1},
                    {"x": 1, "y": 2},
                    {"x": 4, "y": 2},
                    {"x": 5, "y": 2},
                    {"x": 6, "y": 2},
                    {"x": 9, "y": 2},
                    {"x": 0, "y": 3},
                    {"x": 3, "y": 3},
                    {"x": 7, "y": 3},
                    {"x": 10, "y": 3},
                    {"x": 0, "y": 4},
                    {"x": 2, "y": 4},
                    {"x": 8, "y": 4},
                    {"x": 10, "y": 4},
                    {"x": 0, "y": 5},
                    {"x": 2, "y": 5},
                    {"x": 5, "y": 5},
                    {"x": 8, "y": 5},
                    {"x": 10, "y": 5},
                    {"x": 0, "y": 6},
                    {"x": 2, "y": 6},
                    {"x": 8, "y": 6},
                    {"x": 10, "y": 6},
                    {"x": 0, "y": 7},
                    {"x": 3, "y": 7},
                    {"x": 7, "y": 7},
                    {"x": 10, "y": 7},
                    {"x": 1, "y": 8},
                    {"x": 4, "y": 8},
                    {"x": 5, "y": 8},
                    {"x": 6, "y": 8},
                    {"x": 9, "y": 8},
                    {"x": 2, "y": 9},
                    {"x": 8, "y": 9},
                    {"x": 3, "y": 10},
                    {"x": 4, "y": 10},
                    {"x": 5, "y": 10},
                    {"x": 6, "y": 10},
                    {"x": 7, "y": 10}
                ]
            },
            {
                "colour": {"r": 175,"g": 200,"b": 255},
                "points": [
                    {"x": 5, "y": 4},
                    {"x": 4, "y": 5},
                    {"x": 6, "y": 5},
                    {"x": 5, "y": 6},
                ]
            }
        ]
    }*/
    export const SPAWNPOINT: MG.ITextureBuildData = {
        name: 'SPAWNPOINT',
        width: 11,
        height: 11,
        baseColour: undefined,
        layers: [
            {
                colour: {r: 163,g: 152,b: 94},
                points: [
                    {x: 3, y: 0},
                    {x: 4, y: 0},
                    {x: 5, y: 0},
                    {x: 6, y: 0},
                    {x: 7, y: 0},
                    {x: 2, y: 1},
                    {x: 8, y: 1},
                    {x: 1, y: 2},
                    {x: 4, y: 2},
                    {x: 5, y: 2},
                    {x: 6, y: 2},
                    {x: 9, y: 2},
                    {x: 0, y: 3},
                    {x: 3, y: 3},
                    {x: 7, y: 3},
                    {x: 10, y: 3},
                    {x: 0, y: 4},
                    {x: 2, y: 4},
                    {x: 8, y: 4},
                    {x: 10, y: 4},
                    {x: 0, y: 5},
                    {x: 2, y: 5},
                    {x: 5, y: 5},
                    {x: 8, y: 5},
                    {x: 10, y: 5},
                    {x: 0, y: 6},
                    {x: 2, y: 6},
                    {x: 8, y: 6},
                    {x: 10, y: 6},
                    {x: 0, y: 7},
                    {x: 3, y: 7},
                    {x: 7, y: 7},
                    {x: 10, y: 7},
                    {x: 1, y: 8},
                    {x: 4, y: 8},
                    {x: 5, y: 8},
                    {x: 6, y: 8},
                    {x: 9, y: 8},
                    {x: 2, y: 9},
                    {x: 8, y: 9},
                    {x: 3, y: 10},
                    {x: 4, y: 10},
                    {x: 5, y: 10},
                    {x: 6, y: 10},
                    {x: 7, y: 10}
                ]
            }
        ]
    }
    export const SPAWNPOINT_CHECKPOINT: object = {
        "name": "SPAWNPOINT_CHECKPOINT",
        "width": 11,
        "height": 11,
        "baseColour": undefined,
        "layers": [
            {
                "colour": {"r": 163,"g": 152,"b": 94},
                "points": [
                    {"x": 3, "y": 0},
                    {"x": 4, "y": 0},
                    {"x": 5, "y": 0},
                    {"x": 6, "y": 0},
                    {"x": 7, "y": 0},
                    {"x": 2, "y": 1},
                    {"x": 8, "y": 1},
                    {"x": 1, "y": 2},
                    {"x": 4, "y": 2},
                    {"x": 5, "y": 2},
                    {"x": 6, "y": 2},
                    {"x": 9, "y": 2},
                    {"x": 0, "y": 3},
                    {"x": 3, "y": 3},
                    {"x": 7, "y": 3},
                    {"x": 10, "y": 3},
                    {"x": 0, "y": 4},
                    {"x": 2, "y": 4},
                    {"x": 8, "y": 4},
                    {"x": 10, "y": 4},
                    {"x": 0, "y": 5},
                    {"x": 2, "y": 5},
                    {"x": 8, "y": 5},
                    {"x": 10, "y": 5},
                    {"x": 0, "y": 6},
                    {"x": 2, "y": 6},
                    {"x": 8, "y": 6},
                    {"x": 10, "y": 6},
                    {"x": 0, "y": 7},
                    {"x": 3, "y": 7},
                    {"x": 7, "y": 7},
                    {"x": 10, "y": 7},
                    {"x": 1, "y": 8},
                    {"x": 4, "y": 8},
                    {"x": 5, "y": 8},
                    {"x": 6, "y": 8},
                    {"x": 9, "y": 8},
                    {"x": 2, "y": 9},
                    {"x": 8, "y": 9},
                    {"x": 3, "y": 10},
                    {"x": 4, "y": 10},
                    {"x": 5, "y": 10},
                    {"x": 6, "y": 10},
                    {"x": 7, "y": 10}
                ]
            },
            {
                "colour": {"r": 255,"g": 0,"b": 0},
                "points": [
                    {"x": 4, "y": 4},
                    {"x": 5, "y": 5},
                    {"x": 6, "y": 6}
                ]
            },
            {
                "colour": {"r": 0,"g": 100,"b": 0},
                "points": [
                    {"x": 6, "y": 4},
                    {"x": 4, "y": 6}
                ]
            }
        ]
    }
    export const SPAWNPOINT_CHECKPOINT_ACTIVE: object = {
        "name": "SPAWNPOINT_CHECKPOINT_ACTIVE",
        "width": 11,
        "height": 11,
        "baseColour": undefined,
        "layers": [
            {
                "colour": {"r": 163,"g": 152,"b": 94},
                "points": [
                    {"x": 3, "y": 0},
                    {"x": 4, "y": 0},
                    {"x": 5, "y": 0},
                    {"x": 6, "y": 0},
                    {"x": 7, "y": 0},
                    {"x": 2, "y": 1},
                    {"x": 8, "y": 1},
                    {"x": 1, "y": 2},
                    {"x": 4, "y": 2},
                    {"x": 5, "y": 2},
                    {"x": 6, "y": 2},
                    {"x": 9, "y": 2},
                    {"x": 0, "y": 3},
                    {"x": 3, "y": 3},
                    {"x": 7, "y": 3},
                    {"x": 10, "y": 3},
                    {"x": 0, "y": 4},
                    {"x": 2, "y": 4},
                    {"x": 8, "y": 4},
                    {"x": 10, "y": 4},
                    {"x": 0, "y": 5},
                    {"x": 2, "y": 5},
                    {"x": 8, "y": 5},
                    {"x": 10, "y": 5},
                    {"x": 0, "y": 6},
                    {"x": 2, "y": 6},
                    {"x": 8, "y": 6},
                    {"x": 10, "y": 6},
                    {"x": 0, "y": 7},
                    {"x": 3, "y": 7},
                    {"x": 7, "y": 7},
                    {"x": 10, "y": 7},
                    {"x": 1, "y": 8},
                    {"x": 4, "y": 8},
                    {"x": 5, "y": 8},
                    {"x": 6, "y": 8},
                    {"x": 9, "y": 8},
                    {"x": 2, "y": 9},
                    {"x": 8, "y": 9},
                    {"x": 3, "y": 10},
                    {"x": 4, "y": 10},
                    {"x": 5, "y": 10},
                    {"x": 6, "y": 10},
                    {"x": 7, "y": 10}
                ]
            },
            {
                "colour": {"r": 100,"g": 0,"b": 0},
                "points": [
                    {"x": 4, "y": 4},
                    {"x": 6, "y": 6}
                ]
            },
            {
                "colour": {"r": 0,"g": 255,"b": 0},
                "points": [
                    {"x": 6, "y": 4},
                    {"x": 5, "y": 5},
                    {"x": 4, "y": 6}
                ]
            }
        ]
    }
    export const SPAWNPOINT_END: object = {
        "name": "SPAWNPOINT_END",
        "width": 11,
        "height": 11,
        "baseColour": undefined,
        "layers": [
            {
                "colour": {"r": 163,"g": 152,"b": 94},
                "points": [
                    {"x": 3, "y": 0},
                    {"x": 4, "y": 0},
                    {"x": 5, "y": 0},
                    {"x": 6, "y": 0},
                    {"x": 7, "y": 0},
                    {"x": 2, "y": 1},
                    {"x": 8, "y": 1},
                    {"x": 1, "y": 2},
                    {"x": 4, "y": 2},
                    {"x": 5, "y": 2},
                    {"x": 6, "y": 2},
                    {"x": 9, "y": 2},
                    {"x": 0, "y": 3},
                    {"x": 3, "y": 3},
                    {"x": 7, "y": 3},
                    {"x": 10, "y": 3},
                    {"x": 0, "y": 4},
                    {"x": 2, "y": 4},
                    {"x": 8, "y": 4},
                    {"x": 10, "y": 4},
                    {"x": 0, "y": 5},
                    {"x": 2, "y": 5},
                    {"x": 5, "y": 5},
                    {"x": 8, "y": 5},
                    {"x": 10, "y": 5},
                    {"x": 0, "y": 6},
                    {"x": 2, "y": 6},
                    {"x": 8, "y": 6},
                    {"x": 10, "y": 6},
                    {"x": 0, "y": 7},
                    {"x": 3, "y": 7},
                    {"x": 7, "y": 7},
                    {"x": 10, "y": 7},
                    {"x": 1, "y": 8},
                    {"x": 4, "y": 8},
                    {"x": 5, "y": 8},
                    {"x": 6, "y": 8},
                    {"x": 9, "y": 8},
                    {"x": 2, "y": 9},
                    {"x": 8, "y": 9},
                    {"x": 3, "y": 10},
                    {"x": 4, "y": 10},
                    {"x": 5, "y": 10},
                    {"x": 6, "y": 10},
                    {"x": 7, "y": 10}
                ]
            },
            {
                "colour": {"r": 220,"g": 235,"b": 87},
                "points": [
                    {"x": 5, "y": 4},
                    {"x": 4, "y": 5},
                    {"x": 6, "y": 5},
                    {"x": 5, "y": 6},
                ]
            }
        ]
    }

    export const loadList: object[] = [
        defaultPlayerTexture,
        playerFrame0,
        playerFrame1,
        playerFrame2,
        playerFrame3,
        playerFrame4,
        playerFrame5,
        playerFrame6,
        playerFrame7,
        testObjectTexture,
        TILE_WALL_POST,
        TILE_WALL_DOUBLE,
        TILE_WALL_SINGLE,
        TILE_WALL_END,
        TILE_WALL_DOUBLE_CORNER,
        TILE_WALL_SINGLE_CORNER_INTERIOR,
        TILE_WALL_SINGLE_CORNER_EXTERIOR,
        TILE_FLOOR_TEST,
        SPAWNPOINT,
        SPAWNPOINT_CHECKPOINT,
        SPAWNPOINT_CHECKPOINT_ACTIVE,
        SPAWNPOINT_END
    ]

    export const playerFrames: object[] = [
        playerFrame0,
        playerFrame1,
        playerFrame2,
        playerFrame3,
        playerFrame4,
        playerFrame5,
        playerFrame6,
        playerFrame7
    ]
}

namespace Assets.Levels {
    export const testLevel: MG.LevelBuildData = {
        name: 'testLevel0',
        width: 1000,
        height: 1000,
        gridSize: 50,
        colour: 'white',
        x: 0,
        y: 0,
        borderCollisions: [false, true, true, true],
        spawnPoint: {
            name: 'tl_spawn',
            type: MG.SpawnPointType.SPAWN,
            textureN: Assets.Textures.SPAWNPOINT.name,
            activeTextureN: undefined,
            x: 5,
            y: 5
        },
        tiles: [
            {
                textureName: Assets.Textures
            }
        ]
    }
    export const testLevel0: object = {
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
            },

            {
                "obj": Assets.Textures.TILE_WALL_SINGLE_CORNER_INTERIOR,
                "x": 0,
                "y": 19,
                "d": 180,
                "collision": "wall"
            }
        ],
        "objects": []
    }
    export const testLevel1: object = {
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
    }
    export const testLevel2: object = {
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
    }

    export const testLevel3: object = {
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
    }

    export const testLevel4: object = {
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
    }

    export const testLevel5: object = {
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
    }
    export const testLevels: object[] = [
        testLevel0,
        testLevel1,
        testLevel2,
        testLevel3,
        testLevel4,
        testLevel5
    ]
}