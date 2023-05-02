import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteThemingColorsComponentRoutingModule } from './routing.module';

import { NoteThemingColorsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteThemingColorsComponentRoutingModule
  ],
  declarations: [NoteThemingColorsComponent]
})
export class NoteThemingColorsComponentModule {}
