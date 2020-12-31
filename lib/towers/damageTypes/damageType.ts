import { Enemy } from "../../enemies/enemy";
import { Level } from "../../level/level";

export interface DamageType {
  applyDamage(enemy: Enemy, level: Level): void;
}
