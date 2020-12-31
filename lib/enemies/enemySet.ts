import { Enemy } from "./enemy";

export interface EnemySet {
    spawnCount: number;
    waitTicks: number;

    buildEnemy(): Enemy;
}