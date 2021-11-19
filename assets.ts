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
        "width": 10,
        "height": 10,
        "baseColour": {"r": 0,"g": 0,"b": 255},
        "layers": [
            {
                "colour": {"r": 255,"g": 0,"b": 0},
                "points": [
                    {"x": 9, "y": 9},
                    {"x": 3, "y": 5}
                ]
            },
            {
                "colour": {"r": 255,"g": 255,"b": 255},
                "points": [
                    {"x": 4, "y": 4},
                    {"x": 6, "y": 9}
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
        "baseColour": {"r": 255,"g": 255,"b": 255},
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
        "baseColour": {"r": 255,"g": 255,"b": 255},
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
        "baseColour": {"r": 255,"g": 255,"b": 255},
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
        "baseColour": {"r": 255,"g": 255,"b": 255},
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
        "baseColour": {"r": 255,"g": 255,"b": 255},
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
        "baseColour": {"r": 255,"g": 255,"b": 255},
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
        "baseColour": {"r": 255,"g": 255,"b": 255},
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
        "baseColour": {"r": 255,"g": 255,"b": 255},
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

    export const loadList: object[] = [
        defaultPlayerTexture,
        testObjectTexture,
        TILE_WALL_POST,
        TILE_WALL_DOUBLE,
        TILE_WALL_SINGLE,
        TILE_WALL_END,
        TILE_WALL_DOUBLE_CORNER,
        TILE_WALL_SINGLE_CORNER_INTERIOR,
        TILE_WALL_SINGLE_CORNER_EXTERIOR,
        TILE_FLOOR_TEST
    ]
}

namespace Assets.Levels {
    export const testLevel: object = {
        "name": "testLevel",
        "width": 1000,
        "height": 1000,
        "gridSize": 50,
        "colour": "white",
        "xPos": 0,
        "yPos": 0,
        "levelCollisions": [true, false, true, true],
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
    }
    export const testLevel2: object = {
        "name": "testLevel2",
        "width": 1000,
        "height": 1000,
        "gridSize": 50,
        "colour": "blue",
        "xPos": 1250,
        "yPos": 0,
        "levelCollisions": [true, true, false, false],
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
        "colour": "green",
        "xPos": 1250,
        "yPos": 1000,
        "levelCollisions": [false, true, true, true],
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
}