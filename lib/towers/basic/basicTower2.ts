import { DamageType } from "../damageTypes/damageType";
import { Tower } from "../tower";
import { NeutralTileMatcher } from "../../level/tiles/neutral/neutral";
import { TileMatcher } from "../../level/tiles/tileMatcher";
import { SingularDamage } from "../damageTypes/singular";
import { Renderable } from "../../renderable";
import { Asset } from "../../asset";

export class BasicTowerv2 implements Tower, Renderable {
  getAsset(): Asset {
    throw new Error("Method not implemented.");
  }
  getCost(): number {
    return 200;
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
    return false;
  }
  upgrade(): Tower {
    return null;
  }
  getAttackSpeed(): number {
    return 15;
  }
  getAttackDistance(): number {
    return 6;
  }
  canShootOverWalls(): boolean {
    return false;
  }
  getDamageType(): DamageType {
    return new SingularDamage(15);
  }
}
