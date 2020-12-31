import { DamageType } from "../damageTypes/damageType";
import { Tower } from "../tower";
import { NeutralTileMatcher } from "../../level/tiles/neutral/neutral";
import { TileMatcher } from "../../level/tiles/tileMatcher";
import { SingularDamage } from "../damageTypes/singular";
import { BasicTowerv2 } from "./basicTower2";
import { Renderable } from "../../renderable";
import { Asset } from "../../asset";

export class BasicTower implements Tower, Renderable {
  getAsset(): Asset {
    throw new Error("Method not implemented.");
  }
  getCost(): number {
    return 100;
  }
  getWidth(): number {
    return 1;
  }
  getHeight(): number {
    return 1;
  }
  validTiles(): TileMatcher[] {
    return [new NeutralTileMatcher()];
  }
  canUpgrade(): boolean {
    return true;
  }
  upgrade(): Tower {
    return new BasicTowerv2();
  }
  getAttackSpeed(): number {
    return 30;
  }
  getAttackDistance(): number {
    return 5;
  }
  canShootOverWalls(): boolean {
    return false;
  }
  getDamageType(): DamageType {
    return new SingularDamage(10);
  }
}
