import { Injectable } from '@angular/core';
import { Editor } from 'src/lib/editor';
import { DamageTypeID } from 'src/lib/towers/damageTypes/damageType';

@Injectable({
  providedIn: 'root',
})
export class JsonService {
  private layoutKey: string = 'layout';
  layout: Editor;
  constructor() {
    this.layout = this.loadLayout();
  }

  getDamageTypeByID(id: DamageTypeID) {
    for (let x = 0; x < this.layout.damageTypes.length; x++) {
      const dt = this.layout.damageTypes[x];
      if (dt.id === id) return dt;
    }

    return null;
  }

  saveChanges() {
    localStorage.setItem(this.layoutKey, JSON.stringify(this.layout));
  }

  loadLayout(): Editor {
    const layout = localStorage.getItem(this.layoutKey);
    if (layout) return JSON.parse(layout) as Editor;

    const e: Editor = {
      enemies: [],
      towers: [],
      levels: [],
      damageTypes: [],
      debuffs: [],
      buffs: [],
      towerUpgrades: [],
    };
    return e;
  }
}
