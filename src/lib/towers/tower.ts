import { TileMatcher } from "../level/tiles/tileMatcher";
import { TowerUpgrade } from "./towerUpgrade";

export interface Tower {
  /**
   * Internal name used for references
   */
  id: string;

  /**
   * Name displayed to the player
   */
  name: string;
  cost: number;
  width: number;
  height: number;

  /**
   * All tiles occupied by the tower in the world
   * must be matched by this array of `TileMatchers`
   */
  validTiles: Array<TileMatcher>;

  /**
   * Contains a list of available upgrades for this
   * tower.
   */
  availableUpgrades: Array<TowerUpgrade>;

  /**
   * List of applied tower upgrade names.
   */
  appliedUpgrades: Array<string>;

  /**
   * Ticks per attack.
   *
   * There are 30 game ticks per second.
   */
  attackSpeed: number;

  /**
   * Euclidian distance is used for
   * range calculations.
   */
  attackDistance: number;

  /**
   * If false, this tower will be
   * incapable of firing at enemies
   * that are behind a wall.
   */
  canShootOverWalls: boolean;

  /**
   * Damage applied to the enemy.
   */
  damage: number;

  /**
   * If the enemy has armor, armor penetration
   * will increase damage done to enemy.
   */
  armorPenetration: number;

  /**
   * ID of the damageType to use for this tower.
   *
   * Default empty, damage is basic single-target.
   */
  damageType: string;
}
