import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';
import { ConfirmationService } from 'src/app/services/editor/confirmation.service';
import { JsonService } from 'src/app/services/editor/json.service';
import { Guid } from 'src/lib/guid';
import { DamageType } from 'src/lib/towers/damageTypes/damageType';
import { Debuff } from 'src/lib/towers/debuff';

@Component({
  selector: 'app-debuff',
  templateUrl: './debuff.component.html',
  styleUrls: ['./debuff.component.scss'],
})
export class DebuffComponent implements OnInit {
  constructor(
    public color: ColorService,
    public json: JsonService,
    private confirmer: ConfirmationService
  ) {}

  ngOnInit(): void {}

  delete(index: number) {
    this.confirmer.confirm(
      'Are you sure you want to delete this Debuff?',
      () => {
        this.json.layout.debuffs.splice(index, 1);
      }
    );
  }

  weakAgainst(debuff: Debuff, thisDebuff: Debuff) {
    return thisDebuff.weakTo.indexOf(debuff.id) > -1;
  }

  applyWeakness(debuff: Debuff, thisDebuff: Debuff) {
    thisDebuff.weakTo.push(debuff.id);
  }

  removeWeakness(debuff: Debuff, thisDebuff: Debuff) {
    const index = thisDebuff.weakTo.indexOf(debuff.id);
    if (index > -1) {
      thisDebuff.weakTo.splice(index, 1);
    }
  }

  addDebuff(): void {
    const temp: Debuff = {
      id: Guid.generate(),
      name: 'Debuff name',
      color: '#000000',
      weakTo: [],
    };
    this.json.layout.debuffs.push(temp);
  }
}
