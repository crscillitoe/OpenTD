import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';
import { ConfirmationService } from 'src/app/services/editor/confirmation.service';
import { JsonService } from 'src/app/services/editor/json.service';
import { Guid } from 'src/lib/guid';
import { Debuff } from 'src/lib/towers/debuff';
import { Tower } from 'src/lib/towers/tower';

@Component({
  selector: 'app-tower',
  templateUrl: './tower.component.html',
  styleUrls: ['./tower.component.scss'],
})
export class TowerComponent implements OnInit {
  constructor(
    public color: ColorService,
    public json: JsonService,
    private confirmer: ConfirmationService
  ) {}

  ngOnInit(): void {}

  delete(index: number) {
    this.confirmer.confirm(
      'Are you sure you want to delete this Tower?',
      () => {
        this.json.layout.towers.splice(index, 1);
      }
    );
  }

  appliesDebuff(debuff: Debuff, t: Tower): boolean {
    if (t.damageType === '') return false;

    const dt = this.json.getDamageTypeByID(t.damageType);
    if (dt) {
      return dt.appliesDebuffs.indexOf(debuff.id) > -1;
    }

    return false;
  }

  addTower(): void {
    const temp: Tower = {
      id: Guid.generate(),
      name: 'Tower Name',
      description: 'Tower Description',
      cost: 0,
      width: 1,
      height: 1,
      validTiles: [], // TODO
      availableUpgrades: [],
      appliedUpgrades: [], // Always blank in editor
      attackSpeed: 0,
      attackDistance: 0,
      canShootOverWalls: false,
      damage: 0,
      armorPenetration: 0,
      damageType: '',
      buffs: [],
    };

    this.json.layout.towers.push(temp);
  }
}
