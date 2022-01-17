namespace MG {

    export interface ILayerPoint {
        x: number,
        y: number
    }

    export interface ILayer {
        colour: IColour_RGB,
        points: ILayerPoint[]
    }

    export interface ITextureBuildData {
        name: string,
        width: number,
        height: number,
        baseColour: IColour_RGB,
        layers: ILayer[],

    }

    export enum TextureFit {
        DEFAULT,        // draws 1 to 1, not very visible when only a few pixels wide
        STRETCH,
        REPEAT
    }

    class Layer {
        private _colour: Colour;
        private _points: Vector2[] = [];

        public get colour (): Colour {
            return this._colour;
        }

        public set colour (colour: Colour) {
            this._colour = colour;
        }

        public get points (): Vector2[] {
            return this._points
        }

        public addPoint(point: Vector2): void {
            this._points.push(point);
        }
    }

    export class Texture {

        private _name: string;
        private _width: number;
        private _height: number;
        private _baseColour: Colour = Colour.white();
        private _layers: Layer[] = [];


        public constructor (name: string, width: number, height: number, baseColour?: Colour) {
            this._name = name;
            this._width = width;
            this._height = height;
            this._baseColour = baseColour;
        }

        public get name (): string {
            return this._name;
        }

        public addLayer (points: Vector2[], colour: Colour) {
            let layer = new Layer();
            layer.colour = colour;
            for (let p of points) layer.addPoint(p);
            this._layers.push(layer);
        }

        // TODO // refactor this abomination
        public draw (camera: Camera, bDrawCentre: boolean, bCentre: boolean, _x: number, _y: number, rotation: number = 0, width?: number, height?: number, fit: TextureFit = TextureFit.STRETCH): void {
            let x: number = _x - (bCentre?(width?width:this._width)/2:0) - camera.view.position.x;
            let y: number = _y - (bCentre?(height?height:this._height)/2:0) - camera.view.position.y;

            let drawBaseRect = (vec: Vector2, width: number, height: number, rot: number) => {
                let normalised: Vector2 = new Vector2(-(width/2), -(height/2))
                let points: Vector2[] = [new Vector2(normalised.x, normalised.y), new Vector2(normalised.x + width, normalised.y), new Vector2(normalised.x + width, normalised.y + height), new Vector2(normalised.x, normalised.y + height)];

                points[0] = Vector2.rotate(points[0], rot);
                points[1] = Vector2.rotate(points[1], rot);
                points[2] = Vector2.rotate(points[2], rot);
                points[3] = Vector2.rotate(points[3], rot);


                points[0].x += vec.x + width / 2;
                points[0].y += vec.y + height / 2;
                points[1].x += vec.x + width / 2;
                points[1].y += vec.y + height / 2;
                points[2].x += vec.x + width / 2;
                points[2].y += vec.y + height / 2;
                points[3].x += vec.x + width / 2;
                points[3].y += vec.y + height / 2;

                ctx.fillStyle = this._baseColour.hex();
                let path = new Path2D();
                path.moveTo(points[0].x, points[0].y);
                path.lineTo(points[1].x, points[1].y);
                path.lineTo(points[2].x, points[2].y);
                path.lineTo(points[3].x, points[3].y);
                path.closePath();
                ctx.fill(path);
            }

            if (this._baseColour) drawBaseRect(new Vector2(x, y), width?width:this._width, height?height:this._height, rotation);

            if (this._layers[0] !== undefined) {
                let scaleX: number = 1;
                let scaleY: number = 1;
                // does this need defining, or can the commented out logic below work in place?
                if (fit === TextureFit.STRETCH) {
                    scaleX = width / this._width;
                    scaleY = height / this._height;
                }
                // let scaleX: number = width?width / this._width:1;
                // let scaleY: number = height?height / this._height:1;
                if (fit !== TextureFit.REPEAT) {

                    // render with scale and xy offsets!!!
                    for (let l of this._layers) {
                        ctx.fillStyle = l.colour.hex();
                        let path = new Path2D();
                        for (let p of l.points) {
                            // this should all be happening in a shader, ik, but I haven't implemented it in webgl yet, so the cpu will have to do...
                            // transform, rotate, scale

                            // TODO // offload some of this logic to layer creation so it isn't being called each draw (maybe just creating the points array??)
                            // let bp: Vector2 = bCentre?new Vector2(-(scaleX/2), -(scaleY/2)):new Vector2(scaleX/4, scaleY/4);
                            let bp: Vector2 = new Vector2(-(scaleX/2), -(scaleY/2));
                            let points: Vector2[] = [new Vector2(bp.x, bp.y), new Vector2(bp.x + scaleX, bp.y), new Vector2(bp.x + scaleX, bp.y + scaleY), new Vector2(bp.x, bp.y + scaleY)];
                            let halfSize: Vector2 = bCentre?new Vector2(this._width/2,this._height/2):Vector2.Zero;
                            points[0].x += ((-halfSize.x + p.x) * scaleX) + scaleX / 2;
                            points[0].y += ((-halfSize.y + p.y) * scaleY) + scaleY / 2;
                            points[1].x += ((-halfSize.x + p.x) * scaleX) + scaleX / 2;
                            points[1].y += ((-halfSize.y + p.y) * scaleY) + scaleY / 2;
                            points[2].x += ((-halfSize.x + p.x) * scaleX) + scaleX / 2;
                            points[2].y += ((-halfSize.y + p.y) * scaleY) + scaleY / 2;
                            points[3].x += ((-halfSize.x + p.x) * scaleX) + scaleX / 2;
                            points[3].y += ((-halfSize.y + p.y) * scaleY) + scaleY / 2;
                            points[0] = Vector2.rotate(points[0], rotation);
                            points[1] = Vector2.rotate(points[1], rotation);
                            points[2] = Vector2.rotate(points[2], rotation);
                            points[3] = Vector2.rotate(points[3], rotation);
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
                        ctx.fill(path);
                    }

                } else console.warn('Repeated texture rendering is not yet implemented');
                // 26/10/2021 - 1851: TODO // implment repeat functionality, if needed, otherwise remove option (?)
            }
            // draw object centre for debugging
            if (bDrawCentre) {
                ctx.fillStyle = 'orange';
                ctx.fillRect(_x - 2.5 - camera.view.position.x, _y - 2.5 - camera.view.position.y, 5, 5);
            }
        }

        public static load (data: object): Texture {
            let temp: Texture = new Texture(data['name'], data['width'], data['height'], data['baseColour']?new Colour(data['baseColour']['r'], data['baseColour']['g'], data['baseColour']['b']):undefined)
            if (data['layers'] !== undefined) {
                for (let l of data['layers']) {
                    let tempPoints: Vector2[] = [];
                    for (let p of l['points']) {
                        tempPoints.push(new Vector2(p['x'], p['y']))
                    }
                    temp.addLayer(tempPoints, new Colour(l['colour']['r'], l['colour']['g'], l['colour']['b']))
                }
            }
            return temp;
        }
    }
    
}