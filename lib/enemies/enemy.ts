export interface Enemy {
    getHealth(): number;
    getArmor(): number;
    getDamage(): number;

    /**
     * Base number of ticks between advancing tiles
     */
    getSpeed(): number;
}
