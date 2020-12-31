export interface Enemy {
    health: number;
    armor: number;
    damage: number;

    /**
     * Base number of ticks between advancing tiles
     */
    speed: number;

    /**
     * Initialize fresh instance of enemy
     */
    init(): void;
}
