import { DamageTypeID } from './damageTypes/damageType';

export interface TowerUpgrade {
  id: TowerUpgradeID;
  name: string;
  cost: number;
  attackDistanceDelta: number;
  attackSpeedDelta: number;
  damageDelta: number;
  armorPenetrationDelta: number;
  canShootOverWalls: boolean;
  newDamageType: DamageTypeID;

  /**
   * Upgrade cannot be applied unless the required
   * upgrades are already present.
   */
  requires: Array<TowerUpgradeID>;
}

export type TowerUpgradeID = string;
