import { Enemy } from "../../enemies/enemy";
import { Level } from "../../level/level";
import { DamageType } from "./damageType";

/**
 * Singular damage is the simplest form of damage.
 *
 * Damage is applied exclusively to the target being
 * attacked.
 */
export class SingularDamage implements DamageType {
  constructor(damage: number) {}
  applyDamage(enemy: Enemy, level: Level): void {
    throw new Error("Method not implemented.");
  }
}
