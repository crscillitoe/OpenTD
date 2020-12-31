import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TowerComponent } from './editor/tower/tower.component';
import { EnemyComponent } from './editor/enemy/enemy.component';
import { LevelComponent } from './editor/level/level.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    TowerComponent,
    EnemyComponent,
    LevelComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
