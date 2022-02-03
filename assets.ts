/// <reference path='./src/ts/game/spawnPoint.ts'/>
/// <reference path='./src/ts/components/collisionComponent.ts'/>

namespace Assets.GameOptions {
    export const bDrawDebugs = false;
}

namespace Assets.Textures {
    export const sunset0_0: MG.ITextureData = {
        name: 'sunset0_0',
        width: 8,
        height: 8,
        baseColour: {r:0, g: 0, b: 0},
        layers: [

        ]
    }

    export const defaultPlayerTexture: MG.ITextureData = {
        name: 'defaultPlayerTexture',
        width: 9,
        height: 9,
        // baseColour: {r: 170,g: 51,b: 164},
        baseColour: undefined,
        layers: [
            {
                colour: {r: 227,g: 16,b: 149},
                points: [
                    {x: 2, y: 0},
                    {x: 6, y: 0},
                    {x: 1, y: 1},
                    {x: 4, y: 1},
                    {x: 7, y: 1},
                    {x: 0, y: 2},
                    {x: 2, y: 2},
                    {x: 6, y: 2},
                    {x: 8, y: 2},
                    {x: 3, y: 3},
                    {x: 5, y: 3},
                    {x: 1, y: 4},
                    {x: 4, y: 4},
                    {x: 7, y: 4},
                    {x: 3, y: 5},
                    {x: 5, y: 5},
                    {x: 0, y: 6},
                    {x: 2, y: 6},
                    {x: 6, y: 6},
                    {x: 8, y: 6},
                    {x: 1, y: 7},
                    {x: 4, y: 7},
                    {x: 7, y: 7},
                    {x: 2, y: 8},
                    {x: 6, y: 8}
                ]
            }
        ]
    }

    export const playerFrame0: MG.IAnimationFrameData = {
        name: 'playerFrame0',
        frame: 0,
        width: 9,
        height: 9,
        baseColour: undefined,
        layers: [
            {
                colour: {r: 227,g: 16,b: 149},
                points: [
                    {x: 1, y: 1},
                    {x: 7, y: 1},
                    {x: 3, y: 3},
                    {x: 5, y: 3},
                    {x: 1, y: 4},
                    {x: 4, y: 4},
                    {x: 7, y: 4},
                    {x: 3, y: 5},
                    {x: 5, y: 5},
                    {x: 1, y: 7},
                    {x: 4, y: 7},
                    {x: 7, y: 7}
                ]
            },
            {
                colour: {r: 72,g: 137,b: 227},
                points: [
                    {x: 4, y: 1}
                ]
            },
            {
                colour: {r: 85,g: 98,b: 113},
                points: [
                    {x: 0, y: 0},
                    {x: 8, y: 0},
                    {x: 2, y: 2},
                    {x: 6, y: 2},
                    {x: 2, y: 6},
                    {x: 6, y: 6},
                    {x: 0, y: 8},
                    {x: 8, y: 8},
                ]
            }
        ]
    }
    export const playerFrame1: MG.IAnimationFrameData = {
        name: 'playerFrame1',
        frame: 0,
        width: 9,
        height: 9,
        baseColour: undefined,
        layers: [
            {
                colour: {r: 227,g: 16,b: 149},
                points: [
                    {x: 1, y: 1},
                    {x: 4, y: 1},
                    {x: 7, y: 1},
                    {x: 0, y: 2},
                    {x: 2, y: 2},
                    {x: 3, y: 3},
                    {x: 5, y: 3},
                    {x: 1, y: 4},
                    {x: 4, y: 4},
                    {x: 7, y: 4},
                    {x: 3, y: 5},
                    {x: 5, y: 5},
                    {x: 2, y: 6},
                    {x: 6, y: 6},
                    {x: 1, y: 7},
                    {x: 4, y: 7},
                    {x: 7, y: 7}
                ]
            },
            {
                colour: {r: 72,g: 137,b: 227},
                points: [
                    {x: 6, y: 2}
                ]
            },
            {
                colour: {r: 85,g: 98,b: 113},
                points: [
                    {x: 2, y: 0},
                    {x: 6, y: 0},
                    {x: 0, y: 2},
                    {x: 8, y: 2},
                    {x: 0, y: 6},
                    {x: 8, y: 6},
                    {x: 2, y: 8},
                    {x: 6, y: 8}
                ]
            }
        ]
    }
    export const playerFrame2: MG.IAnimationFrameData = {
        name: 'playerFrame2',
        frame: 0,
        width: 9,
        height: 9,
        baseColour: undefined,
        layers: [
            {
                colour: {r: 227,g: 16,b: 149},
                points: [
                    {x: 1, y: 1},
                    {x: 4, y: 1},
                    {x: 7, y: 1},
                    {x: 3, y: 3},
                    {x: 5, y: 3},
                    {x: 1, y: 4},
                    {x: 4, y: 4},
                    {x: 3, y: 5},
                    {x: 5, y: 5},
                    {x: 1, y: 7},
                    {x: 4, y: 7},
                    {x: 7, y: 7}
                ]
            },
            {
                colour: {r: 72,g: 137,b: 227},
                points: [
                    {x: 7, y: 4}
                ]
            },
            {
                colour: {r: 85,g: 98,b: 113},
                points: [
                    {x: 0, y: 0},
                    {x: 8, y: 0},
                    {x: 2, y: 2},
                    {x: 6, y: 2},
                    {x: 2, y: 6},
                    {x: 6, y: 6},
                    {x: 0, y: 8},
                    {x: 8, y: 8},
                ]
            }
        ]
    }
    export const playerFrame3: MG.IAnimationFrameData = {
        name: 'playerFrame3',
        frame: 0,
        width: 9,
        height: 9,
        baseColour: undefined,
        layers: [
            {
                colour: {r: 227,g: 16,b: 149},
                points: [
                    {x: 1, y: 1},
                    {x: 4, y: 1},
                    {x: 7, y: 1},
                    {x: 2, y: 2},
                    {x: 6, y: 2},
                    {x: 3, y: 3},
                    {x: 5, y: 3},
                    {x: 1, y: 4},
                    {x: 4, y: 4},
                    {x: 7, y: 4},
                    {x: 3, y: 5},
                    {x: 5, y: 5},
                    {x: 2, y: 6},
                    {x: 1, y: 7},
                    {x: 4, y: 7},
                    {x: 7, y: 7}
                ]
            },
            {
                colour: {r: 72,g: 137,b: 227},
                points: [
                    {x: 6, y: 6}
                ]
            },
            {
                colour: {r: 85,g: 98,b: 113},
                points: [
                    {x: 2, y: 0},
                    {x: 6, y: 0},
                    {x: 0, y: 2},
                    {x: 8, y: 2},
                    {x: 0, y: 6},
                    {x: 8, y: 6},
                    {x: 2, y: 8},
                    {x: 6, y: 8}
                ]
            }
        ]
    }
    export const playerFrame4: MG.IAnimationFrameData = {
        name: 'playerFrame4',
        frame: 0,
        width: 9,
        height: 9,
        baseColour: undefined,
        layers: [
            {
                colour: {r: 227,g: 16,b: 149},
                points: [
                    {x: 1, y: 1},
                    {x: 4, y: 1},
                    {x: 7, y: 1},
                    {x: 3, y: 3},
                    {x: 5, y: 3},
                    {x: 1, y: 4},
                    {x: 4, y: 4},
                    {x: 7, y: 4},
                    {x: 3, y: 5},
                    {x: 5, y: 5},
                    {x: 1, y: 7},
                    {x: 7, y: 7}
                ]
            },
            {
                colour: {r: 72,g: 137,b: 227},
                points: [
                    {x: 4, y: 7}
                ]
            },
            {
                colour: {r: 85,g: 98,b: 113},
                points: [
                    {x: 0, y: 0},
                    {x: 8, y: 0},
                    {x: 2, y: 2},
                    {x: 6, y: 2},
                    {x: 2, y: 6},
                    {x: 6, y: 6},
                    {x: 0, y: 8},
                    {x: 8, y: 8},
                ]
            }
        ]
    }
    export const playerFrame5: MG.IAnimationFrameData = {
        name: 'playerFrame5',
        frame: 0,
        width: 9,
        height: 9,
        baseColour: undefined,
        layers: [
            {
                colour: {r: 227,g: 16,b: 149},
                points: [
                    {x: 1, y: 1},
                    {x: 4, y: 1},
                    {x: 7, y: 1},
                    {x: 2, y: 2},
                    {x: 6, y: 2},
                    {x: 3, y: 3},
                    {x: 5, y: 3},
                    {x: 1, y: 4},
                    {x: 4, y: 4},
                    {x: 7, y: 4},
                    {x: 3, y: 5},
                    {x: 5, y: 5},
                    {x: 6, y: 6},
                    {x: 1, y: 7},
                    {x: 4, y: 7},
                    {x: 7, y: 7}
                ]
            },
            {
                colour: {r: 72,g: 137,b: 227},
                points: [
                    {x: 2, y: 6}
                ]
            },
            {
                colour: {r: 85,g: 98,b: 113},
                points: [
                    {x: 2, y: 0},
                    {x: 6, y: 0},
                    {x: 0, y: 2},
                    {x: 8, y: 2},
                    {x: 0, y: 6},
                    {x: 8, y: 6},
                    {x: 2, y: 8},
                    {x: 6, y: 8}
                ]
            }
        ]
    }
    export const playerFrame6: MG.IAnimationFrameData = {
        name: 'playerFrame6',
        frame: 0,
        width: 9,
        height: 9,
        baseColour: undefined,
        layers: [
            {
                colour: {r: 227,g: 16,b: 149},
                points: [
                    {x: 1, y: 1},
                    {x: 4, y: 1},
                    {x: 7, y: 1},
                    {x: 3, y: 3},
                    {x: 5, y: 3},
                    {x: 4, y: 4},
                    {x: 7, y: 4},
                    {x: 3, y: 5},
                    {x: 5, y: 5},
                    {x: 1, y: 7},
                    {x: 4, y: 7},
                    {x: 7, y: 7}
                ]
            },
            {
                colour: {r: 72,g: 137,b: 227},
                points: [
                    {x: 1, y: 4}
                ]
            },
            {
                colour: {r: 85,g: 98,b: 113},
                points: [
                    {x: 0, y: 0},
                    {x: 8, y: 0},
                    {x: 2, y: 2},
                    {x: 6, y: 2},
                    {x: 2, y: 6},
                    {x: 6, y: 6},
                    {x: 0, y: 8},
                    {x: 8, y: 8},
                ]
            }
        ]
    }
    export const playerFrame7: MG.IAnimationFrameData = {
        name: 'playerFrame7',
        frame: 0,
        width: 9,
        height: 9,
        baseColour: undefined,
        layers: [
            {
                colour: {r: 227,g: 16,b: 149},
                points: [
                    {x: 1, y: 1},
                    {x: 4, y: 1},
                    {x: 7, y: 1},
                    {x: 6, y: 2},
                    {x: 3, y: 3},
                    {x: 5, y: 3},
                    {x: 1, y: 4},
                    {x: 4, y: 4},
                    {x: 7, y: 4},
                    {x: 3, y: 5},
                    {x: 5, y: 5},
                    {x: 2, y: 6},
                    {x: 6, y: 6},
                    {x: 1, y: 7},
                    {x: 4, y: 7},
                    {x: 7, y: 7}
                ]
            },
            {
                colour: {r: 72,g: 137,b: 227},
                points: [
                    {x: 2, y: 2}
                ]
            },
            {
                colour: {r: 85,g: 98,b: 113},
                points: [
                    {x: 2, y: 0},
                    {x: 6, y: 0},
                    {x: 0, y: 2},
                    {x: 8, y: 2},
                    {x: 0, y: 6},
                    {x: 8, y: 6},
                    {x: 2, y: 8},
                    {x: 6, y: 8}
                ]
            }
        ]
    }

    export const testObjectTexture: MG.ITextureData = {
        name: 'testObjectTexture',
        width: 1,
        height: 1,
        baseColour: {r: 255,g: 0,b: 255},
        layers: undefined
    }
    export const TILE_WALL_POST: MG.ITextureData = {
        name: 'TILE_WALL_POST',
        width: 7,
        height: 7,
        baseColour: undefined,
        layers: [
            {
                colour: {r: 255,g: 200,b: 0},
                points: [
                    {x: 0, y: 0},
                    {x: 1, y: 0},
                    {x: 2, y: 0},
                    {x: 3, y: 0},
                    {x: 4, y: 0},
                    {x: 5, y: 0},
                    {x: 6, y: 0},
                    {x: 0, y: 6},
                    {x: 1, y: 6},
                    {x: 2, y: 6},
                    {x: 3, y: 6},
                    {x: 4, y: 6},
                    {x: 5, y: 6},
                    {x: 6, y: 6},
                    {x: 0, y: 1},
                    {x: 0, y: 2},
                    {x: 0, y: 3},
                    {x: 0, y: 4},
                    {x: 0, y: 5},
                    {x: 6, y: 1},
                    {x: 6, y: 2},
                    {x: 6, y: 3},
                    {x: 6, y: 4},
                    {x: 6, y: 5},
                ]
            }
        ]
    }
    export const TILE_WALL_DOUBLE: MG.ITextureData = {
        name: 'TILE_WALL_DOUBLE',
        width: 7,
        height: 7,
        baseColour: undefined,
        layers: [
            {
                colour: {r: 255,g: 200,b: 0},
                points: [
                    {x: 0, y: 0},
                    {x: 1, y: 0},
                    {x: 2, y: 0},
                    {x: 3, y: 0},
                    {x: 4, y: 0},
                    {x: 5, y: 0},
                    {x: 6, y: 0},
                    {x: 0, y: 6},
                    {x: 1, y: 6},
                    {x: 2, y: 6},
                    {x: 3, y: 6},
                    {x: 4, y: 6},
                    {x: 5, y: 6},
                    {x: 6, y: 6}
                ]
            }
        ]
    }
    export const TILE_WALL_SINGLE: MG.ITextureData = {
        name: 'TILE_WALL_SINGLE',
        width: 7,
        height: 7,
        baseColour: undefined,
        layers: [
            {
                colour: {r: 255,g: 200,b: 0},
                points: [
                    {x: 0, y: 0},
                    {x: 1, y: 0},
                    {x: 2, y: 0},
                    {x: 3, y: 0},
                    {x: 4, y: 0},
                    {x: 5, y: 0},
                    {x: 6, y: 0}
                ]
            }
        ]
    }
    export const TILE_WALL_END: MG.ITextureData = {
        name: 'TILE_WALL_END',
        width: 7,
        height: 7,
        baseColour: undefined,
        layers: [
            {
                colour: {r: 255,g: 200,b: 0},
                points: [
                    {x: 0, y: 0},
                    {x: 1, y: 0},
                    {x: 2, y: 0},
                    {x: 3, y: 0},
                    {x: 4, y: 0},
                    {x: 5, y: 0},
                    {x: 6, y: 0},
                    {x: 0, y: 6},
                    {x: 1, y: 6},
                    {x: 2, y: 6},
                    {x: 3, y: 6},
                    {x: 4, y: 6},
                    {x: 5, y: 6},
                    {x: 6, y: 6},
                    {x: 6, y: 1},
                    {x: 6, y: 2},
                    {x: 6, y: 3},
                    {x: 6, y: 4},
                    {x: 6, y: 5}
                ]
            }
        ]
    }
    export const TILE_WALL_DOUBLE_CORNER: MG.ITextureData = {
        name: 'TILE_WALL_DOUBLE_CORNER',
        width: 7,
        height: 7,
        baseColour: undefined,
        layers: [
            {
                colour: {r: 255,g: 200,b: 0},
                points: [
                    {x: 0, y: 0},
                    {x: 1, y: 0},
                    {x: 2, y: 0},
                    {x: 3, y: 0},
                    {x: 4, y: 0},
                    {x: 5, y: 0},
                    {x: 6, y: 0},
                    {x: 6, y: 1},
                    {x: 6, y: 2},
                    {x: 6, y: 3},
                    {x: 6, y: 4},
                    {x: 6, y: 5},
                    {x: 6, y: 6},
                    {x: 0, y: 6}
                ]
            }
        ]
    }
    export const TILE_WALL_SINGLE_CORNER_INTERIOR: MG.ITextureData = {
        name: 'TILE_WALL_SINGLE_CORNER_INTERIOR',
        width: 7,
        height: 7,
        baseColour: undefined,
        layers: [
            {
                colour: {r: 255,g: 200,b: 0},
                points: [
                    {x: 0, y: 0}
                ]
            }
        ]
    }
    export const TILE_WALL_SINGLE_CORNER_INTERIOR_DOUBLE: MG.ITextureData = {
        name: 'TILE_WALL_SINGLE_CORNER_INTERIOR_DOUBLE',
        width: 7,
        height: 7,
        baseColour: undefined,
        layers: [
            {
                colour: {r: 255,g: 200,b: 0},
                points: [
                    {x: 0, y: 0},
                    {x: 6, y: 0}
                ]
            }
        ]
    }
    export const TILE_WALL_SINGLE_CORNER_INTERIOR_FULL: MG.ITextureData = {
        name: 'TILE_WALL_SINGLE_CORNER_INTERIOR_FULL',
        width: 7,
        height: 7,
        baseColour: undefined,
        layers: [
            {
                colour: {r: 255,g: 200,b: 0},
                points: [
                    {x: 0, y: 0},
                    {x: 6, y: 0},
                    {x: 6, y: 6},
                    {x: 0, y: 6},
                ]
            }
        ]
    }
    export const TILE_WALL_SINGLE_CORNER_INTERIOR_WALLA: MG.ITextureData = {
        name: 'TILE_WALL_SINGLE_CORNER_INTERIOR_WALLA',
        width: 7,
        height: 7,
        baseColour: undefined,
        layers: [
            {
                colour: {r: 255,g: 200,b: 0},
                points: [
                    {x: 0, y: 0},
                    {x: 1, y: 0},
                    {x: 2, y: 0},
                    {x: 3, y: 0},
                    {x: 4, y: 0},
                    {x: 5, y: 0},
                    {x: 6, y: 0},
                    {x: 0, y: 6}
                ]
            }
        ]
    }
    export const TILE_WALL_SINGLE_CORNER_INTERIOR_WALLB: MG.ITextureData = {
        name: 'TILE_WALL_SINGLE_CORNER_INTERIOR_WALLB',
        width: 7,
        height: 7,
        baseColour: undefined,
        layers: [
            {
                colour: {r: 255,g: 200,b: 0},
                points: [
                    {x: 0, y: 0},
                    {x: 1, y: 0},
                    {x: 2, y: 0},
                    {x: 3, y: 0},
                    {x: 4, y: 0},
                    {x: 5, y: 0},
                    {x: 6, y: 0},
                    {x: 6, y: 6}
                ]
            }
        ]
    }
    export const TILE_WALL_SINGLE_CORNER_INTERIOR_WALLC: MG.ITextureData = {
        name: 'TILE_WALL_SINGLE_CORNER_INTERIOR_WALLC',
        width: 7,
        height: 7,
        baseColour: undefined,
        layers: [
            {
                colour: {r: 255,g: 200,b: 0},
                points: [
                    {x: 0, y: 0},
                    {x: 1, y: 0},
                    {x: 2, y: 0},
                    {x: 3, y: 0},
                    {x: 4, y: 0},
                    {x: 5, y: 0},
                    {x: 6, y: 0},
                    {x: 0, y: 6},
                    {x: 6, y: 6}
                ]
            }
        ]
    }
    export const TILE_WALL_SINGLE_CORNER_EXTERIOR: MG.ITextureData = {
        name: 'TILE_WALL_SINGLE_CORNER_EXTERIOR',
        width: 7,
        height: 7,
        baseColour: undefined,
        layers: [
            {
                colour: {r: 255,g: 200,b: 0},
                points: [
                    {x: 0, y: 0},
                    {x: 1, y: 0},
                    {x: 2, y: 0},
                    {x: 3, y: 0},
                    {x: 4, y: 0},
                    {x: 5, y: 0},
                    {x: 6, y: 0},
                    {x: 6, y: 1},
                    {x: 6, y: 2},
                    {x: 6, y: 3},
                    {x: 6, y: 4},
                    {x: 6, y: 5},
                    {x: 6, y: 6}
                ]
            }
        ]
    }
    export const TILE_FLOOR_TEST: MG.ITextureData = {
        name: 'TILE_FLOOR_TEST',
        width: 7,
        height: 7,
        baseColour: undefined,
        layers: [
            {
                colour: {r: 255,g: 200,b: 255},
                points: [
                    {x: 3, y: 3},
                    {x: 1, y: 1},
                    {x: 1, y: 2},
                    {x: 1, y: 3},
                    {x: 1, y: 4},
                    {x: 1, y: 5},
                    {x: 5, y: 1},
                    {x: 5, y: 2},
                    {x: 5, y: 3},
                    {x: 5, y: 4},
                    {x: 5, y: 5},
                    {x: 2, y: 1},
                    {x: 3, y: 1},
                    {x: 4, y: 1},
                    {x: 2, y: 5},
                    {x: 3, y: 5},
                    {x: 4, y: 5},
                ]
            }
        ]
    }

    export const SPAWNPOINT: MG.ITextureData = {
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
            },
            {
                colour: {r: 175,g: 200,b: 255},
                points: [
                    {x: 5, y: 4},
                    {x: 4, y: 5},
                    {x: 6, y: 5},
                    {x: 5, y: 6},
                ]
            }
        ]
    }
    export const SPAWNPOINT_CHECKPOINT: MG.ITextureData = {
        name: 'SPAWNPOINT_CHECKPOINT',
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
            },
            {
                colour: {r: 255,g: 0,b: 0},
                points: [
                    {x: 4, y: 4},
                    {x: 5, y: 5},
                    {x: 6, y: 6}
                ]
            },
            {
                colour: {r: 0,g: 100,b: 0},
                points: [
                    {x: 6, y: 4},
                    {x: 4, y: 6}
                ]
            }
        ]
    }
    export const SPAWNPOINT_CHECKPOINT_ACTIVE: MG.ITextureData = {
        name: 'SPAWNPOINT_CHECKPOINT_ACTIVE',
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
            },
            {
                colour: {r: 100,g: 0,b: 0},
                points: [
                    {x: 4, y: 4},
                    {x: 6, y: 6}
                ]
            },
            {
                colour: {r: 0,g: 255,b: 0},
                points: [
                    {x: 6, y: 4},
                    {x: 5, y: 5},
                    {x: 4, y: 6}
                ]
            }
        ]
    }
    export const SPAWNPOINT_END: MG.ITextureData = {
        name: 'SPAWNPOINT_END',
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
            },
            {
                colour: {r: 220,g: 235,b: 87},
                points: [
                    {x: 5, y: 4},
                    {x: 4, y: 5},
                    {x: 6, y: 5},
                    {x: 5, y: 6},
                ]
            }
        ]
    }

    export const loadList: MG.ITextureData[] = [
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
        TILE_WALL_SINGLE_CORNER_INTERIOR_WALLA,
        TILE_WALL_SINGLE_CORNER_INTERIOR_WALLB,
        TILE_WALL_SINGLE_CORNER_INTERIOR_WALLC,
        TILE_WALL_SINGLE_CORNER_INTERIOR_DOUBLE,
        TILE_WALL_SINGLE_CORNER_INTERIOR_FULL,
        TILE_WALL_SINGLE_CORNER_EXTERIOR,
        TILE_FLOOR_TEST,
        SPAWNPOINT,
        SPAWNPOINT_CHECKPOINT,
        SPAWNPOINT_CHECKPOINT_ACTIVE,
        SPAWNPOINT_END,

        sunset0_0
    ]

    export const playerFrames: MG.IAnimationFrameData[] = [
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

namespace Assets.Objects {
    export const testLevelCentre: MG.IoObjectBuildData = {
        name: 'testLevelCentre',
        components: [
            <MG.ISpriteComponentBuildData>{
                type: 'sprite',
                name: 'centreSprite',
                textureName: Assets.Textures.testObjectTexture.name,
                width: 50
            },
            <MG.ICollisionComponentBuildData>{
                type: 'collision',
                name: 'centreSprite_CC',
                spriteName: 'centreSprite',
                width: undefined,
                height: undefined,
                bStatic: true
            }
        ]
    }
}

namespace Assets.Levels {
    export const testLevel0: MG.ILevelBuildData = {
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
            spType: MG.SpawnPointType.SPAWN,
            textureN: Assets.Textures.SPAWNPOINT.name,
            activeTextureN: undefined,
            x: 5,
            y: 5
        },
        tiles: [
            /*{
                textureName: Assets.Textures.sunset0_0.name,
                collisionType: undefined,
                instances: [{x: 8, y: 8, rotation: 0}]
            },*/

            {
                textureName: Assets.Textures.TILE_WALL_SINGLE_CORNER_INTERIOR.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 0, y: 0, rotation: 180},
                    {x: 10, y: 9, rotation: 270},
                    {x: 10, y: 15, rotation: 0},
                    {x: 14, y: 11, rotation: 270},
                    {x: 14, y: 13, rotation: 0},
                    {x: 0, y: 19, rotation: 90},
                    {x: 19, y: 19, rotation: 0},
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_SINGLE_CORNER_INTERIOR_DOUBLE.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 0, y: 8, rotation: 90}
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_SINGLE_CORNER_INTERIOR_WALLA.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 16, y: 2, rotation: 270},
                    {x: 1, y: 0, rotation: 180},
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_SINGLE_CORNER_INTERIOR_WALLB.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 3, y: 7, rotation: 270},
                    {x: 3, y: 8, rotation: 180},
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_SINGLE_CORNER_EXTERIOR.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 4, y: 8, rotation: 90},
                    {x: 4, y: 7, rotation: 0},
                    {x: 8, y: 8, rotation: 270},
                    {x: 16, y: 8, rotation: 0},
                    {x: 16, y: 16, rotation: 90},
                    {x: 8, y: 16, rotation: 180},
                    {x: 8, y: 9, rotation: 180},
                    {x: 8, y: 15, rotation: 270},
                    {x: 10, y: 11, rotation: 180},
                    {x: 10, y: 13, rotation: 270},
                    {x: 17, y: 2, rotation: 90},
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_SINGLE.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 0, y: 1, rotation: 90},
                    {x: 0, y: 2, rotation: 90},
                    {x: 0, y: 3, rotation: 90},
                    {x: 0, y: 4, rotation: 90},
                    {x: 0, y: 5, rotation: 90},
                    {x: 0, y: 6, rotation: 90},
                    {x: 0, y: 7, rotation: 90},
                    {x: 0, y: 9, rotation: 90},
                    {x: 9, y: 8, rotation: 0},
                    {x: 10, y: 8, rotation: 0},
                    {x: 11, y: 8, rotation: 0},
                    {x: 12, y: 8, rotation: 0},
                    {x: 13, y: 8, rotation: 0},
                    {x: 14, y: 8, rotation: 0},
                    {x: 15, y: 8, rotation: 0},
                    {x: 16, y: 9, rotation: 90},
                    {x: 16, y: 10, rotation: 90},
                    {x: 16, y: 11, rotation: 90},
                    {x: 16, y: 12, rotation: 90},
                    {x: 16, y: 13, rotation: 90},
                    {x: 16, y: 14, rotation: 90},
                    {x: 16, y: 15, rotation: 90},
                    {x: 15, y: 16, rotation: 180},
                    {x: 14, y: 16, rotation: 180},
                    {x: 13, y: 16, rotation: 180},
                    {x: 12, y: 16, rotation: 180},
                    {x: 11, y: 16, rotation: 180},
                    {x: 10, y: 16, rotation: 180},
                    {x: 9, y: 16, rotation: 180},
                    {x: 9, y: 9, rotation: 180},
                    {x: 10, y: 10, rotation: 270},
                    {x: 9, y: 15, rotation: 0},
                    {x: 10, y: 14, rotation: 270},
                    {x: 11, y: 11, rotation: 180},
                    {x: 12, y: 11, rotation: 180},
                    {x: 13, y: 11, rotation: 180},
                    {x: 11, y: 13, rotation: 0},
                    {x: 12, y: 13, rotation: 0},
                    {x: 13, y: 13, rotation: 0},
                    {x: 14, y: 12, rotation: 270},
                    {x: 0, y: 10, rotation: 90},
                    {x: 0, y: 11, rotation: 90},
                    {x: 0, y: 12, rotation: 90},
                    {x: 0, y: 13, rotation: 90},
                    {x: 0, y: 14, rotation: 90},
                    {x: 0, y: 15, rotation: 90},
                    {x: 0, y: 16, rotation: 90},
                    {x: 0, y: 17, rotation: 90},
                    {x: 0, y: 18, rotation: 90},
                    {x: 1, y: 19, rotation: 0},
                    {x: 2, y: 19, rotation: 0},
                    {x: 3, y: 19, rotation: 0},
                    {x: 4, y: 19, rotation: 0},
                    {x: 5, y: 19, rotation: 0},
                    {x: 6, y: 19, rotation: 0},
                    {x: 7, y: 19, rotation: 0},
                    {x: 8, y: 19, rotation: 0},
                    {x: 9, y: 19, rotation: 0},
                    {x: 10, y: 19, rotation: 0},
                    {x: 11, y: 19, rotation: 0},
                    {x: 12, y: 19, rotation: 0},
                    {x: 13, y: 19, rotation: 0},
                    {x: 14, y: 19, rotation: 0},
                    {x: 15, y: 19, rotation: 0},
                    {x: 16, y: 19, rotation: 0},
                    {x: 17, y: 19, rotation: 0},
                    {x: 18, y: 19, rotation: 0},
                    {x: 19, y: 18, rotation: 270},
                    {x: 19, y: 17, rotation: 270},
                    {x: 19, y: 16, rotation: 270},
                    {x: 19, y: 15, rotation: 270},
                    {x: 19, y: 14, rotation: 270},
                    {x: 19, y: 13, rotation: 270},
                    {x: 19, y: 12, rotation: 270},
                    {x: 19, y: 11, rotation: 270},
                    {x: 19, y: 10, rotation: 270},
                    {x: 19, y: 9, rotation: 270},
                    {x: 19, y: 8, rotation: 270},
                    {x: 19, y: 7, rotation: 270},
                    {x: 19, y: 6, rotation: 270},
                    {x: 19, y: 5, rotation: 270},
                    {x: 19, y: 4, rotation: 270},
                    {x: 19, y: 3, rotation: 270},
                    {x: 19, y: 2, rotation: 270},
                    {x: 19, y: 1, rotation: 270},
                    {x: 19, y: 0, rotation: 270},
                    {x: 17, y: 1, rotation: 90},
                    {x: 17, y: 0, rotation: 90},
                    {x: 16, y: 1, rotation: 270},
                    {x: 16, y: 0, rotation: 270},
                ]
            },
            {
                textureName: Assets.Textures.TILE_FLOOR_TEST.name,
                collisionType: MG.CollisionType.NON_BLOCKING,
                instances: [
                    {x: 1, y: 1, rotation: 0}
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_DOUBLE.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 2, y: 0, rotation: 0},
                    {x: 3, y: 4, rotation: 90},
                    {x: 3, y: 5, rotation: 90},
                    {x: 3, y: 6, rotation: 90},
                    {x: 7, y: 4, rotation: 90},
                    {x: 7, y: 5, rotation: 90},
                    {x: 7, y: 6, rotation: 90},
                    {x: 1, y: 8, rotation: 0},
                    {x: 2, y: 8, rotation: 0},
                    // {x: 5, y: 1, rotation: 0},
                    {x: 6, y: 1, rotation: 0},
                    {x: 7, y: 1, rotation: 0},
                    {x: 8, y: 1, rotation: 0},
                    {x: 9, y: 2, rotation: 90},
                    {x: 9, y: 3, rotation: 90},
                    {x: 9, y: 4, rotation: 90},
                    {x: 9, y: 5, rotation: 90},
                    {x: 10, y: 6, rotation: 0},
                    {x: 11, y: 6, rotation: 0},
                    {x: 12, y: 6, rotation: 0},
                    {x: 16, y: 5, rotation: 90},
                    {x: 16, y: 4, rotation: 90},
                    {x: 16, y: 3, rotation: 90},
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_DOUBLE_CORNER.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 3, y: 3, rotation: 270},
                    {x: 7, y: 3, rotation: 0},
                    {x: 7, y: 7, rotation: 90},
                    {x: 9, y: 1, rotation: 0},
                    {x: 9, y: 6, rotation: 180},
                    {x: 16, y: 6, rotation: 90},
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_END.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 4, y: 3, rotation: 0},
                    {x: 6, y: 3, rotation: 180},
                    {x: 6, y: 7, rotation: 180},
                    {x: 3, y: 0, rotation: 0},
                    {x: 4, y: 1, rotation: 180},
                    {x: 13, y: 6, rotation: 0},
                    {x: 15, y: 6, rotation: 180},
                ]
            }
        ],
        objects: []
    }
    export const testLevel1: MG.ILevelBuildData = {
        name: 'testLevel1',
        width: 1000,
        height: 1000,
        gridSize: 50,
        colour: 'white',
        x: 0,
        y: -1000,
        borderCollisions: [false, false, false, true],
        spawnPoint: {
            name: 'tl1_Checkpoint_001',
            spType: MG.SpawnPointType.CHECKPOINT,
            textureN: Assets.Textures.SPAWNPOINT_CHECKPOINT.name,
            activeTextureN: Assets.Textures.SPAWNPOINT_CHECKPOINT_ACTIVE.name,
            x: 3,
            y: 18
        },
        tiles: [
            {
                textureName: Assets.Textures.TILE_WALL_POST.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 13, y: 6, rotation: 0},
                    {x: 7, y: 12, rotation: 0},
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_SINGLE_CORNER_EXTERIOR.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 19, y: 19, rotation: 270},
                    {x: 8, y: 8, rotation: 270},
                    {x: 11, y: 8, rotation: 0},
                    {x: 11, y: 11, rotation: 90},
                    {x: 5, y: 15, rotation: 270},
                    {x: 6, y: 15, rotation: 0},
                    {x: 14, y: 15, rotation: 270},
                    {x: 15, y: 15, rotation: 0},
                    {x: 14, y: 13, rotation: 180},
                    {x: 15, y: 13, rotation: 90},
                    {x: 15, y: 7, rotation: 0},
                    {x: 14, y: 7, rotation: 270},
                    {x: 14, y: 5, rotation: 180},
                    {x: 15, y: 5, rotation: 90},
                    {x: 6, y: 13, rotation: 90},
                    {x: 5, y: 13, rotation: 180},
                    {x: 5, y: 7, rotation: 270},
                    {x: 1, y: 15, rotation: 0},
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_SINGLE_CORNER_INTERIOR.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 16, y: 19, rotation: 270},
                    {x: 15, y: 17, rotation: 90},
                    {x: 0, y: 15, rotation: 90},
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_SINGLE_CORNER_INTERIOR_WALLA.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 8, y: 11, rotation: 270},
                    {x: 5, y: 17, rotation: 270},
                    {x: 6, y: 17, rotation: 180},
                    {x: 14, y: 3, rotation: 0},
                    {x: 6, y: 7, rotation: 90},
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_SINGLE_CORNER_INTERIOR_WALLB.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 17, y: 17, rotation: 0},
                    {x: 14, y: 19, rotation: 180},
                    {x: 15, y: 3, rotation: 0},
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_SINGLE_CORNER_INTERIOR_WALLC.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 15, y: 1, rotation: 180},
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_DOUBLE_CORNER.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 5, y: 19, rotation: 180},
                    {x: 10, y: 17, rotation: 90},
                    {x: 8, y: 6, rotation: 180},
                    {x: 8, y: 3, rotation: 270},
                    {x: 6, y: 1, rotation: 270},
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_SINGLE.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 15, y: 19, rotation: 180},
                    {x: 17, y: 19, rotation: 90},
                    {x: 17, y: 18, rotation: 90},
                    {x: 1, y: 19, rotation: 90},
                    {x: 1, y: 18, rotation: 90},
                    {x: 1, y: 17, rotation: 90},
                    {x: 1, y: 16, rotation: 90},
                    {x: 5, y: 16, rotation: 270},
                    // P
                    {x: 9, y: 8, rotation: 0},
                    {x: 10, y: 8, rotation: 0},
                    {x: 9, y: 11, rotation: 180},
                    {x: 10, y: 11, rotation: 180},
                    {x: 8, y: 9, rotation: 270},
                    {x: 8, y: 10, rotation: 270},
                    {x: 11, y: 9, rotation: 90},
                    {x: 11, y: 10, rotation: 90},
                    // P - end
                    {x: 6, y: 16, rotation: 90},
                    {x: 7, y: 17, rotation: 0},
                    {x: 8, y: 17, rotation: 0},
                    {x: 9, y: 17, rotation: 0},
                    {x: 14, y: 18, rotation: 270},
                    {x: 14, y: 17, rotation: 270},
                    {x: 14, y: 16, rotation: 270},
                    {x: 15, y: 16, rotation: 90},
                    {x: 16, y: 17, rotation: 0},
                    {x: 15, y: 8, rotation: 90},
                    {x: 15, y: 9, rotation: 90},
                    {x: 15, y: 10, rotation: 90},
                    {x: 15, y: 11, rotation: 90},
                    {x: 15, y: 12, rotation: 90},
                    {x: 14, y: 8, rotation: 270},
                    {x: 14, y: 9, rotation: 270},
                    {x: 14, y: 10, rotation: 270},
                    {x: 14, y: 11, rotation: 270},
                    {x: 14, y: 12, rotation: 270},
                    {x: 15, y: 4, rotation: 90},
                    {x: 14, y: 4, rotation: 270},
                    {x: 6, y: 12, rotation: 90},
                    {x: 6, y: 11, rotation: 90},
                    {x: 6, y: 10, rotation: 90},
                    {x: 6, y: 9, rotation: 90},
                    {x: 6, y: 8, rotation: 90},
                    {x: 5, y: 8, rotation: 270},
                    {x: 5, y: 9, rotation: 270},
                    {x: 5, y: 10, rotation: 270},
                    {x: 5, y: 11, rotation: 270},
                    {x: 5, y: 12, rotation: 270},
                    {x: 0, y: 14, rotation: 90},
                    {x: 0, y: 13, rotation: 90},
                    {x: 0, y: 12, rotation: 90},
                    {x: 0, y: 11, rotation: 90},
                    {x: 0, y: 10, rotation: 90},
                    {x: 0, y: 9, rotation: 90},
                    {x: 0, y: 8, rotation: 90},
                    {x: 0, y: 7, rotation: 90},
                    {x: 0, y: 6, rotation: 90},
                    {x: 0, y: 5, rotation: 90},
                    {x: 0, y: 4, rotation: 90},
                    {x: 0, y: 3, rotation: 90},
                    {x: 0, y: 2, rotation: 90},
                    {x: 0, y: 1, rotation: 90},
                    {x: 0, y: 0, rotation: 90},
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_DOUBLE.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 8, y: 12, rotation: 90},
                    {x: 8, y: 13, rotation: 90},
                    {x: 8, y: 14, rotation: 90},
                    {x: 18, y: 17, rotation: 0},
                    {x: 19, y: 17, rotation: 0},
                    {x: 10, y: 16, rotation: 90},
                    {x: 10, y: 15, rotation: 90},
                    {x: 10, y: 14, rotation: 90},
                    {x: 5, y: 18, rotation: 90},
                    {x: 6, y: 19, rotation: 0},
                    {x: 13, y: 19, rotation: 0},
                    {x: 12, y: 19, rotation: 0},
                    {x: 11, y: 19, rotation: 0},
                    {x: 10, y: 19, rotation: 0},
                    {x: 9, y: 19, rotation: 0},
                    {x: 8, y: 19, rotation: 0},
                    {x: 7, y: 19, rotation: 0},
                    {x: 7, y: 17, rotation: 0},
                    {x: 8, y: 17, rotation: 0},
                    {x: 9, y: 17, rotation: 0},
                    {x: 16, y: 3, rotation: 0},
                    {x: 17, y: 3, rotation: 0},
                    {x: 18, y: 3, rotation: 0},
                    {x: 19, y: 3, rotation: 0},
                    {x: 16, y: 1, rotation: 0},
                    {x: 17, y: 1, rotation: 0},
                    {x: 18, y: 1, rotation: 0},
                    {x: 19, y: 1, rotation: 0},
                    {x: 13, y: 3, rotation: 0},
                    {x: 10, y: 6, rotation: 0},
                    {x: 9, y: 6, rotation: 0},
                    {x: 8, y: 4, rotation: 90},
                    {x: 8, y: 5, rotation: 90},
                    {x: 9, y: 3, rotation: 0},
                    {x: 10, y: 3, rotation: 0},
                    {x: 11, y: 3, rotation: 0},
                    {x: 12, y: 3, rotation: 0},
                    {x: 19, y: 15, rotation: 0},
                    {x: 18, y: 15, rotation: 0},
                    {x: 3, y: 12, rotation: 90},
                    {x: 3, y: 11, rotation: 90},
                    {x: 3, y: 10, rotation: 90},
                    {x: 3, y: 9, rotation: 90},
                    {x: 3, y: 8, rotation: 90},
                    {x: 3, y: 7, rotation: 90},
                    {x: 3, y: 6, rotation: 90},
                    {x: 3, y: 5, rotation: 90},
                    {x: 3, y: 4, rotation: 90},
                    {x: 3, y: 3, rotation: 90},
                    {x: 3, y: 2, rotation: 90},
                    {x: 3, y: 1, rotation: 90},
                    {x: 3, y: 0, rotation: 90},
                    {x: 6, y: 6, rotation: 90},
                    {x: 6, y: 5, rotation: 90},
                    {x: 6, y: 4, rotation: 90},
                    {x: 6, y: 3, rotation: 90},
                    {x: 6, y: 2, rotation: 90},
                    {x: 15, y: 0, rotation: 90},
                    {x: 7, y: 1, rotation: 0},
                    {x: 8, y: 1, rotation: 0},
                    {x: 9, y: 1, rotation: 0},
                    {x: 10, y: 1, rotation: 0},
                    {x: 11, y: 1, rotation: 0},
                    {x: 12, y: 1, rotation: 0},
                    {x: 13, y: 1, rotation: 0},
                    {x: 14, y: 1, rotation: 0},
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_END.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 8, y: 15, rotation: 90},
                    {x: 10, y: 13, rotation: 270},
                    {x: 11, y: 6, rotation: 0},
                    {x: 17, y: 15, rotation: 180},
                    {x: 3, y: 13, rotation: 90},
                ]
            }
        ],
        objects: [
            {
                objectBuildData: Assets.Objects.testLevelCentre,
                x: 0,
                y: 0
            },
            /*{
                objectBuildData: Assets.Objects.testLevelCentre,
                x: -200,
                y: 100
            }*/
        ]
    }
    export const testLevel2: MG.ILevelBuildData = {
        name: 'testLevel2',
        width: 1000,
        height: 1000,
        gridSize: 50,
        colour: 'white',
        x: 1000,
        y: -1000,
        borderCollisions: [false, true, true, false],
        spawnPoint: {
            name: 'tl2_Checkpoint_001',
            spType: MG.SpawnPointType.CHECKPOINT,
            textureN: Assets.Textures.SPAWNPOINT_CHECKPOINT.name,
            activeTextureN: Assets.Textures.SPAWNPOINT_CHECKPOINT_ACTIVE.name,
            x: 3,
            y: 2
        },
        tiles: [
            {
                textureName: Assets.Textures.TILE_WALL_SINGLE_CORNER_INTERIOR.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 19, y: 19, rotation: 0},
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_SINGLE_CORNER_EXTERIOR.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 15, y: 15, rotation: 90},
                    {x: 15, y: 11, rotation: 0},
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_DOUBLE_CORNER.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 17, y: 17, rotation: 90},
                    {x: 2, y: 1, rotation: 0},
                    {x: 17, y: 1, rotation: 0},
                    {x: 6, y: 1, rotation: 270},
                    {x: 15, y: 5, rotation: 0},
                    {x: 13, y: 7, rotation: 0},
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_SINGLE_CORNER_INTERIOR_WALLB.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 13, y: 11, rotation: 270},
                    {x: 13, y: 15, rotation: 180},
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_SINGLE_CORNER_INTERIOR_WALLC.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 6, y: 3, rotation: 180},
                    {x: 4, y: 5, rotation: 270},
                    {x: 4, y: 7, rotation: 270},
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_SINGLE_CORNER_INTERIOR_FULL.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 2, y: 3, rotation: 0},
                    {x: 4, y: 3, rotation: 0},
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_END.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 15, y: 3, rotation: 0},
                    {x: 15, y: 9, rotation: 90},
                    {x: 2, y: 13, rotation: 90},
                    {x: 4, y: 13, rotation: 90},
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_SINGLE.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 0, y: 19, rotation: 0},
                    {x: 1, y: 19, rotation: 0},
                    {x: 2, y: 19, rotation: 0},
                    {x: 3, y: 19, rotation: 0},
                    {x: 4, y: 19, rotation: 0},
                    {x: 5, y: 19, rotation: 0},
                    {x: 6, y: 19, rotation: 0},
                    {x: 7, y: 19, rotation: 0},
                    {x: 8, y: 19, rotation: 0},
                    {x: 9, y: 19, rotation: 0},
                    {x: 10, y: 19, rotation: 0},
                    {x: 11, y: 19, rotation: 0},
                    {x: 12, y: 19, rotation: 0},
                    {x: 13, y: 19, rotation: 0},
                    {x: 14, y: 19, rotation: 0},
                    {x: 15, y: 19, rotation: 0},
                    {x: 16, y: 19, rotation: 0},
                    {x: 17, y: 19, rotation: 0},
                    {x: 18, y: 19, rotation: 0},
                    {x: 19, y: 18, rotation: 270},
                    {x: 19, y: 17, rotation: 270},
                    {x: 19, y: 16, rotation: 270},
                    {x: 19, y: 15, rotation: 270},
                    {x: 19, y: 14, rotation: 270},
                    {x: 19, y: 13, rotation: 270},
                    {x: 19, y: 12, rotation: 270},
                    {x: 19, y: 11, rotation: 270},
                    {x: 19, y: 10, rotation: 270},
                    {x: 19, y: 9, rotation: 270},
                    {x: 19, y: 8, rotation: 270},
                    {x: 19, y: 7, rotation: 270},
                    {x: 19, y: 6, rotation: 270},
                    {x: 19, y: 5, rotation: 270},
                    {x: 19, y: 4, rotation: 270},
                    {x: 19, y: 3, rotation: 270},
                    {x: 19, y: 2, rotation: 270},
                    {x: 19, y: 1, rotation: 270},
                    {x: 19, y: 0, rotation: 270},
                    {x: 15, y: 12, rotation: 90},
                    {x: 15, y: 13, rotation: 90},
                    {x: 15, y: 14, rotation: 90},
                    {x: 14, y: 11, rotation: 0},
                    {x: 13, y: 12, rotation: 270},
                    {x: 13, y: 13, rotation: 270},
                    {x: 13, y: 14, rotation: 270},
                    {x: 14, y: 15, rotation: 180},
                ]
            },
            {
                textureName: Assets.Textures.TILE_WALL_DOUBLE.name,
                collisionType: MG.CollisionType.BLOCKING,
                instances: [
                    {x: 0, y: 17, rotation: 0},
                    {x: 1, y: 17, rotation: 0},
                    {x: 2, y: 17, rotation: 0},
                    {x: 3, y: 17, rotation: 0},
                    {x: 4, y: 17, rotation: 0},
                    {x: 5, y: 17, rotation: 0},
                    {x: 6, y: 17, rotation: 0},
                    {x: 7, y: 17, rotation: 0},
                    {x: 8, y: 17, rotation: 0},
                    {x: 9, y: 17, rotation: 0},
                    {x: 10, y: 17, rotation: 0},
                    {x: 11, y: 17, rotation: 0},
                    {x: 12, y: 17, rotation: 0},
                    {x: 13, y: 17, rotation: 0},
                    {x: 14, y: 17, rotation: 0},
                    {x: 15, y: 17, rotation: 0},
                    {x: 16, y: 17, rotation: 0},
                    {x: 17, y: 16, rotation: 90},
                    {x: 17, y: 15, rotation: 90},
                    {x: 17, y: 14, rotation: 90},
                    {x: 17, y: 13, rotation: 90},
                    {x: 17, y: 12, rotation: 90},
                    {x: 17, y: 11, rotation: 90},
                    {x: 17, y: 10, rotation: 90},
                    {x: 17, y: 9, rotation: 90},
                    {x: 17, y: 8, rotation: 90},
                    {x: 17, y: 7, rotation: 90},
                    {x: 17, y: 6, rotation: 90},
                    {x: 17, y: 5, rotation: 90},
                    {x: 17, y: 4, rotation: 90},
                    {x: 17, y: 3, rotation: 90},
                    {x: 17, y: 2, rotation: 90},
                    {x: 2, y: 2, rotation: 90},
                    {x: 0, y: 3, rotation: 0},
                    {x: 1, y: 3, rotation: 0},
                    {x: 3, y: 3, rotation: 0},
                    {x: 0, y: 1, rotation: 0},
                    {x: 1, y: 1, rotation: 0},
                    {x: 2, y: 4, rotation: 90},
                    {x: 4, y: 2, rotation: 90},
                    {x: 4, y: 1, rotation: 90},
                    {x: 4, y: 0, rotation: 90},
                    {x: 6, y: 2, rotation: 90},
                    {x: 5, y: 3, rotation: 0},
                    {x: 4, y: 4, rotation: 90},
                    {x: 7, y: 3, rotation: 0},
                    {x: 7, y: 1, rotation: 0},
                    {x: 8, y: 1, rotation: 0},
                    {x: 9, y: 1, rotation: 0},
                    {x: 10, y: 1, rotation: 0},
                    {x: 11, y: 1, rotation: 0},
                    {x: 12, y: 1, rotation: 0},
                    {x: 13, y: 1, rotation: 0},
                    {x: 14, y: 1, rotation: 0},
                    {x: 15, y: 1, rotation: 0},
                    {x: 16, y: 1, rotation: 0},
                    {x: 8, y: 3, rotation: 0},
                    {x: 9, y: 3, rotation: 0},
                    {x: 10, y: 3, rotation: 0},
                    {x: 11, y: 3, rotation: 0},
                    {x: 12, y: 3, rotation: 0},
                    {x: 13, y: 3, rotation: 0},
                    {x: 14, y: 3, rotation: 0},
                    {x: 15, y: 3, rotation: 0},
                    {x: 5, y: 5, rotation: 0},
                    {x: 6, y: 5, rotation: 0},
                    {x: 7, y: 5, rotation: 0},
                    {x: 8, y: 5, rotation: 0},
                    {x: 9, y: 5, rotation: 0},
                    {x: 10, y: 5, rotation: 0},
                    {x: 11, y: 5, rotation: 0},
                    {x: 12, y: 5, rotation: 0},
                    {x: 13, y: 5, rotation: 0},
                    {x: 14, y: 5, rotation: 0},
                    {x: 15, y: 6, rotation: 90},
                    {x: 15, y: 7, rotation: 90},
                    {x: 15, y: 8, rotation: 90},
                    {x: 12, y: 15, rotation: 0},
                    {x: 11, y: 15, rotation: 0},
                    {x: 10, y: 15, rotation: 0},
                    {x: 9, y: 15, rotation: 0},
                    {x: 8, y: 15, rotation: 0},
                    {x: 7, y: 15, rotation: 0},
                    {x: 6, y: 15, rotation: 0},
                    {x: 5, y: 15, rotation: 0},
                    {x: 4, y: 15, rotation: 0},
                    {x: 3, y: 15, rotation: 0},
                    {x: 2, y: 15, rotation: 0},
                    {x: 1, y: 15, rotation: 0},
                    {x: 0, y: 15, rotation: 0},
                    {x: 13, y: 10, rotation: 90},
                    {x: 13, y: 9, rotation: 90},
                    {x: 13, y: 8, rotation: 90},
                    {x: 12, y: 7, rotation: 0},
                    {x: 11, y: 7, rotation: 0},
                    {x: 10, y: 7, rotation: 0},
                    {x: 9, y: 7, rotation: 0},
                    {x: 8, y: 7, rotation: 0},
                    {x: 7, y: 7, rotation: 0},
                    {x: 6, y: 7, rotation: 0},
                    {x: 5, y: 7, rotation: 0},
                    {x: 4, y: 8, rotation: 90},
                    {x: 4, y: 9, rotation: 90},
                    {x: 4, y: 10, rotation: 90},
                    {x: 4, y: 11, rotation: 90},
                    {x: 4, y: 12, rotation: 90},
                    {x: 2, y: 5, rotation: 90},
                    {x: 2, y: 6, rotation: 90},
                    {x: 2, y: 7, rotation: 90},
                    {x: 2, y: 8, rotation: 90},
                    {x: 2, y: 9, rotation: 90},
                    {x: 2, y: 10, rotation: 90},
                    {x: 2, y: 11, rotation: 90},
                    {x: 2, y: 12, rotation: 90},
                    {x: 4, y: 6, rotation: 90},
                ]
            },
        ],
        objects: [
            {
                objectBuildData: Assets.Objects.testLevelCentre,
                x: 0,
                y: 0
            },
            {
                objectBuildData: Assets.Objects.testLevelCentre,
                x: -200,
                y: 100
            }
        ]
    }

    export const testLevel3: MG.ILevelBuildData = {
        name: 'testLevel3',
        width: 1000,
        height: 1000,
        gridSize: 50,
        colour: 'white',
        x: 0,
        y: -2000,
        borderCollisions: [true, false, false, true],
        spawnPoint: {
            name: 'tl3_Checkpoint_001',
            spType: MG.SpawnPointType.CHECKPOINT,
            textureN: Assets.Textures.SPAWNPOINT_CHECKPOINT.name,
            activeTextureN: Assets.Textures.SPAWNPOINT_CHECKPOINT_ACTIVE.name,
            x: 3,
            y: 2
        },
        tiles: [],
        objects: []
    }

    export const testLevel4: MG.ILevelBuildData = {
        name: 'testLevel4',
        width: 1000,
        height: 1000,
        gridSize: 50,
        colour: 'white',
        x: 1000,
        y: -2000,
        borderCollisions: [false, true, false, false],
        spawnPoint: {
            name: 'tl4_Checkpoint_001',
            spType: MG.SpawnPointType.CHECKPOINT,
            textureN: Assets.Textures.SPAWNPOINT_CHECKPOINT.name,
            activeTextureN: Assets.Textures.SPAWNPOINT_CHECKPOINT_ACTIVE.name,
            x: 3,
            y: 2
        },
        tiles: [],
        objects: []
    }

    export const testLevel5: MG.ILevelBuildData = {
        name: 'testLevel5',
        width: 1000,
        height: 1000,
        gridSize: 50,
        colour: 'white',
        x: 1000,
        y: -3000,
        borderCollisions: [true, true, false, true],
        spawnPoint: {
            name: 'tl5_End',
            spType: MG.SpawnPointType.END,
            textureN: Assets.Textures.SPAWNPOINT_END.name,
            x: 9,
            y: 9
        },
        tiles: [],
        objects: []
    }
    export const testLevels: MG.ILevelBuildData[] = [
        testLevel0,
        testLevel1,
        testLevel2,
        testLevel3,
        testLevel4,
        testLevel5
    ]
}