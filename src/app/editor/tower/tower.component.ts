import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';
import { ConfirmationService } from 'src/app/services/editor/confirmation.service';
import { JsonService } from 'src/app/services/editor/json.service';

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
}
