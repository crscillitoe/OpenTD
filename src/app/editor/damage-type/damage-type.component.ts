import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ColorService } from 'src/app/services/color.service';
import { ConfirmationService } from 'src/app/services/editor/confirmation.service';
import { JsonService } from 'src/app/services/editor/json.service';
import { Guid } from 'src/lib/guid';
import { DamageType } from 'src/lib/towers/damageTypes/damageType';
import { Debuff, DebuffID } from 'src/lib/towers/debuff';

@Component({
  selector: 'app-damage-type',
  templateUrl: './damage-type.component.html',
  styleUrls: ['./damage-type.component.scss'],
})
export class DamageTypeComponent implements OnInit {
  constructor(
    public color: ColorService,
    public json: JsonService,
    private confirmer: ConfirmationService
  ) {}

  ngOnInit(): void {}

  delete(index: number) {
    this.confirmer.confirm(
      'Are you sure you want to delete this Damage Type?',
      () => {
        this.json.layout.damageTypes.splice(index, 1);
      }
    );
  }

  appliesDebuff(debuff: Debuff, dt: DamageType): boolean {
    return dt.appliesDebuffs.indexOf(debuff.id) > -1;
  }

  applyDebuff(debuff: Debuff, dt: DamageType) {
    dt.appliesDebuffs.push(debuff.id);
  }

  deleteDebuff(debuff: Debuff, dt: DamageType) {
    const index = dt.appliesDebuffs.indexOf(debuff.id);
    if (index > -1) {
      dt.appliesDebuffs.splice(index, 1);
    }
  }

  addDamageType(): void {
    const temp: DamageType = {
      id: Guid.generate(),
      name: 'damage name',
      splash: false,
      splashDamagePercentage: 0,
      splashRadius: 0,
      slow: false,
      slowDuration: 0,
      slowPercentage: 0,
      appliesDebuffs: [],
      debuffDamages: [],
    };
    this.json.layout.damageTypes.push(temp);
  }
}
