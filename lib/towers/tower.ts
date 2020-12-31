import { TileMatcher } from "../level/tiles/tileMatcher";
import { DamageType } from "./damageTypes/damageType";

export interface Tower {
  getCost(): number;
  getWidth(): number;
  getHeight(): number;
  canUpgrade(): boolean;

  /**
   * All tiles occupied by the tower in the world
   * must be matched by this array of `TileMatchers`
   */
  validTiles(): Array<TileMatcher>;

  /**
   * If `canUpgrade()` is true, the `upgrade()`
   * function will return the upgraded version
   * of this tower class.
   */
  upgrade(): Tower;

  /**
   * Ticks per attack.
   *
   * There are 30 game ticks per second.
   */
  getAttackSpeed(): number;

  /**
   * Euclidian distance is used for
   * range calculations.
   */
  getAttackDistance(): number;

  /**
   * If false, this tower will be
   * incapable of firing at enemies
   * that are behind a wall.
   */
  canShootOverWalls(): boolean;

  /**
   * Determines how to apply the damage
   * from this tower to the enemy being
   * targeted.
   */
  getDamageType(): DamageType;
}
