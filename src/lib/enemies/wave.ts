import { Enemy } from "./enemy";
import { EnemySet } from "./enemySet";

export interface Wave {
    /**
     * Cash given to player on successful completion
     */
    reward: number;
    enemySets: Array<EnemySet>;
}
