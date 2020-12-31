import { DamageTypeID } from '../towers/damageTypes/damageType';

export interface Enemy {
  /**
   * Internal name used for references
   */
  id: EnemyID;

  /**
   * Name displayed to the player
   */
  name: string;

  health: number;

  /**
   * Reduces damage taken from towers with lower armor
   * penetration than this number
   */
  armor: number;

  /**
   * How much health the player loses if the enemy
   * reaches the end without dying
   */
  damage: number;

  /**
   * Base number of ticks between advancing tiles
   */
  speed: number;

  /**
   * Reward given to player upon killing this enemy
   */
  deathReward: number;

  /**
   * Array of damageType IDs that can hurt this enemy.
   *
   * If empty, all damage types can hurt this enemy.
   */
  weakTo: Array<DamageTypeID>;
}

export type EnemyID = string;
