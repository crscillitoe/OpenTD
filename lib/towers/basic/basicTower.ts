import { DamageType } from "../damageTypes/damageType";
import { Tower } from "../tower";
import { NeutralTileMatcher } from "../../level/tiles/neutral/neutral";
import { TileMatcher } from "../../level/tiles/tileMatcher";
import { SingularDamage } from "../damageTypes/singular";

export class BasicTower implements Tower {
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
    return false;
  }
  upgrade(): Tower {
    return null;
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
    return new SingularDamage();
  }
}
