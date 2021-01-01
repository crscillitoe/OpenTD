import { Injectable } from '@angular/core';
import { Editor } from 'src/lib/editor';

@Injectable({
  providedIn: 'root',
})
export class JsonService {
  private layoutKey: string = 'layout';
  layout: Editor;
  constructor() {
    this.layout = this.loadLayout();
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
    };
    return e;
  }
}
