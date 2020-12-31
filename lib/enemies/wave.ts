import { Enemy } from "./enemy";
import { WaveSpawn } from "./waveSpawn";

export interface Wave {
    /**
     * Cash given to player on successful completion
     */
    reward: number;
    waveSpawns: Array<WaveSpawn>;
}
