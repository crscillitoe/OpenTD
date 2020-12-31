export interface DamageType {
  id: string;

  /**
   * Indicates this type of damage can harm
   * enemies that are not directly targeted.
   */
  splash: boolean;

  /**
   * % of original damage to apply to splashed
   * targets. 0-100.
   */
  splashDamagePercentage: number;

  /**
   * Euclidean distance splash radius.
   */
  splashRadius: number;

  /**
   * Indicates this type of damage will slow
   * enemies.
   */
  slow: boolean;

  /**
   * % of enemy speed reduction. 0-100.
   *
   * 100: enemies will be unable to move.
   */
  slowPercentage: number;

  /**
   * # of ticks for the slow.
   */
  slowDuration: number;
}
