import { Wave } from "../enemies/wave";
import { Tower } from "../towers/tower";
import { Tile } from "./tiles/tile";

export interface Level {
  width: number;
  height: number;

  tiles: Array<Array<Tile>>;

  waves: Array<Wave>;

  /**
   * If true, waves after the final wave
   * will be auto-generated with scaling
   * difficulty until the player loses.
   */
  supportsFreeplay: boolean;

  /**
   * List of all legal tower IDs
   */
  legalTowers: Array<string>;

  /**
   * Override method, if true, all towers
   * in the game are legal on this level.
   *
   * default false.
   */
  allTowersLegal: boolean;
}
