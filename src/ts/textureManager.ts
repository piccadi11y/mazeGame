namespace MG {

    class TextureReferenceNode {
        public texture: Texture;
        public referenceCount: number = 1;

        public constructor (texture: Texture) {
            this.texture = texture;
        }
    }

    export class TextureManager {

        private static _textures: {[name: string]: TextureReferenceNode} = {};

        private constructor () {}

        public static getTexture (textureName: string): Texture {
            if (TextureManager._textures[textureName] === undefined) return undefined
            TextureManager._textures[textureName].referenceCount++;
            return this._textures[textureName].texture;
        }

        public static addTexture (texture: Texture): void {
            TextureManager._textures[texture.name] = new TextureReferenceNode(texture);
        }

        public static releaseTexture (textureName: string): void {
            if (TextureManager._textures[textureName] === undefined) console.warn(`A texture named ${textureName} does not exist and therefore cannot be released.`)
            else TextureManager._textures[textureName].referenceCount--;
        }
    }
}