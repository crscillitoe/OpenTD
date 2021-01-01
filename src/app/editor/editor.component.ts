import { Component, OnInit } from '@angular/core';
import { JsonService } from '../services/editor/json.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  importString: string = '';
  constructor(public json: JsonService) {}

  import() {
    this.json.layout = JSON.parse(this.importString);
  }

  ngOnInit(): void {}
}
