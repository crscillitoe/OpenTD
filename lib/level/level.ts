import { Wave } from "../enemies/wave";
import { Tower } from "../towers/tower";
import { Tile } from "./tiles/tile";

export abstract class Level {
  getWidth(): number {
    return 0;
  }

  getHeight(): number {
    return 0;
  }

  getTiles(): Array<Array<Tile>> {
    return [];
  }

  getWaves(): Array<Wave> {
    return [];
  }

  /**
   * If true, waves after the final wave
   * will be auto-generated with scaling
   * difficulty until the player loses.
   */
  supportsFreeplay(): boolean {
    return false;
  }

  /**
   * Returns a list of towers that can be
   * built on this level.
   */
  legalTowers(): Array<Tower> {
    return [];
  }

  /**
   * Override method, if true, all towers
   * in the game are legal on this level.
   *
   * default false.
   */
  allTowersLegal(): boolean {
    return false;
  }
}
