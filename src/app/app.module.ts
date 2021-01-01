import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TowerComponent } from './editor/tower/tower.component';
import { EnemyComponent } from './editor/enemy/enemy.component';
import { LevelComponent } from './editor/level/level.component';
import { EditorComponent } from './editor/editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DamageTypeComponent } from './editor/damage-type/damage-type.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogComponent } from './editor/dialog/dialog.component';
import { DebuffComponent } from './editor/debuff/debuff.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { TextFieldModule } from '@angular/cdk/text-field';

@NgModule({
  declarations: [
    AppComponent,
    TowerComponent,
    EnemyComponent,
    LevelComponent,
    EditorComponent,
    DamageTypeComponent,
    DialogComponent,
    DebuffComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
    TextFieldModule,
    MatMenuModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatCardModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
