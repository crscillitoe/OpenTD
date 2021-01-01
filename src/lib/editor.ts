import { Enemy } from './enemies/enemy';
import { Level } from './level/level';
import { Buff } from './towers/buff';
import { DamageType } from './towers/damageTypes/damageType';
import { Debuff } from './towers/debuff';
import { Tower } from './towers/tower';
import { TowerUpgrade } from './towers/towerUpgrade';

export interface Editor {
  enemies: Array<Enemy>;
  towers: Array<Tower>;
  levels: Array<Level>;
  damageTypes: Array<DamageType>;
  debuffs: Array<Debuff>;
  buffs: Array<Buff>;
  towerUpgrades: Array<TowerUpgrade>;
}
