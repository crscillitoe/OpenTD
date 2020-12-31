import { Asset } from "../../asset";
import { Renderable } from "../../renderable";
import { Enemy } from "../enemy";

export class BasicEnemy implements Enemy, Renderable {
    health: number;
    armor: number;
    damage: number;
    speed: number;
    init(): void {
        this.health = 100;
        this.armor = 0;
        this.damage = 1;
        this.speed = 30;
    }

    getAsset(): Asset {
        throw new Error("Method not implemented.");
    }
}