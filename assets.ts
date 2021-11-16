namespace Assets.Objects {
    export let e: string = 'oof';

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
        "name":"defaultPlayerTexture",
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
        "name":"testObjectTexture",
        "width": 1,
        "height": 1,
        "baseColour": {"r": 0,"g": 255,"b": 0},
        "layers": undefined
    }

    export const loadList: object[] = [
        defaultPlayerTexture,
        testObjectTexture
    ]
}

namespace Assets.Levels {
    // TODO // implement level loading
    export const testLevel: object = {
        "name": "testLevel",
        "width": 1000,
        "height": 1000,
        "gridSize": 50,
        "colour": "white",
        "xPos": 0,
        "yPos": 0,
        "levelCollisions": [true, true, true, true]
    }
}