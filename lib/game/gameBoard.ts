import { Level } from "../level/level";
import { Tile } from "../level/tiles/tile";
import { Renderable } from "../renderable";

export class GameBoard {
    private level: Level;
    private tiles: Tile[][];
    private renderables: Map<Coordinate, Renderable[]>;

    constructor(level: Level) {
        this.level = level;
        this.tiles = level.getTiles();
        this.renderables = new Map<Coordinate, Renderable[]>();
    }
}