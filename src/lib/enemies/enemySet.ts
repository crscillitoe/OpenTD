import { EnemyID } from './enemy';

export interface EnemySet {
  spawnCount: number;
  waitTicks: number;
  enemyId: EnemyID;
}
