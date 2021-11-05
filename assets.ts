namespace Assets.Objects {
    export let e: string = 'oof';

    export const defaultObject: object = {
        "name":"defaultObject"
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
}

// console.log(Assets.Textures.defaultPlayerTexture);