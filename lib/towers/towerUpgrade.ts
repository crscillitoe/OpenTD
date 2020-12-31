export interface TowerUpgrade {
  name: string;
  cost: number;
  attackDistanceDelta: number;
  attackSpeedDelta: number;
  damageDelta: number;
  armorPenetrationDelta: number;
  canShootOverWalls: boolean;
  newDamageType: string;
}
