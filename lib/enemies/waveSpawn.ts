import { Enemy } from "./enemy";

export interface WaveSpawn {
    spawnCount: number;
    waitTicks: number;

    buildEnemy(): Enemy;
}