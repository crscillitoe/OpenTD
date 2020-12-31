import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ConfirmationService } from 'src/app/services/editor/confirmation.service';
import { JsonService } from 'src/app/services/editor/json.service';
import { DamageType } from 'src/lib/towers/damageTypes/damageType';

@Component({
  selector: 'app-damage-type',
  templateUrl: './damage-type.component.html',
  styleUrls: ['./damage-type.component.scss'],
})
export class DamageTypeComponent implements OnInit {
  constructor(
    public json: JsonService,
    public confirmer: ConfirmationService
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

  addDamageType(): void {
    const temp: DamageType = {
      id: 'id',
      splash: false,
      splashDamagePercentage: 0,
      splashRadius: 0,
      slow: false,
      slowDuration: 0,
      slowPercentage: 0,
    };
    this.json.layout.damageTypes.push(temp);
  }
}
