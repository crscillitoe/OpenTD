import { Enemy } from "./enemies/enemy";
import { Level } from "./level/level";
import { Tower } from "./towers/tower";

export interface Editor {
  enemies: Array<Enemy>;
  towers: Array<Tower>;

  levels: Array<Level>;
}
