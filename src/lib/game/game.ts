import { EnemySet } from "../enemies/enemySet";
import { Level } from "../level/level";

export class Game {
  private level: Level;
  private currTick = 0;
  private currWave = 0;
  private currEnemySet = 0;
  private lastSpawnTick = 0;

  constructor(level: Level) {
    this.level = level;
    this.resetGame();
  }

  doTick(): void {
    if (this.shouldSpawnEnemySet()) {
      this.spawnNextEnemySet();
    }
    this.currTick++;
  }

  /**
   * Returns true if the game should spawn the next
   * enemy set defined by the current level
   */
  shouldSpawnEnemySet(): boolean {
    if (this.currWave === 0) {
      return true;
    }
    const currEnemySet = this.getCurrentEnemySet();
    return this.currTick - this.lastSpawnTick >= currEnemySet.waitTicks;
  }

  spawnNextEnemySet(): void {
    const currEnemySet = this.getCurrentEnemySet();
    // TODO: ACTUALLY SPAWN ENEMIES
    this.currEnemySet++;
  }

  getCurrentEnemySet(): EnemySet {
    const currWave = this.level.waves[this.currWave];
    return currWave.enemySets[this.currEnemySet];
  }

  endWave(): void {
    this.currTick = 0;
    this.currEnemySet = 0;
    this.lastSpawnTick = 0;
    this.currWave++;
  }

  resetGame(): void {
    this.currTick = 0;
    this.currEnemySet = 0;
    this.lastSpawnTick = 0;
    this.currWave = 0;
  }
}
