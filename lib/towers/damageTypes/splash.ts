import { Enemy } from "../../enemies/enemy";
import { Level } from "../../level/level";
import { DamageType } from "./damageType";

/**
 * Splash damage is a damage type which applies
 * damage to enemies in a radius around the target
 * enemy.
 */
export class SplashDamage implements DamageType {
  applyDamage(enemy: Enemy, level: Level): void {
    throw new Error("Method not implemented.");
  }
}
