import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { NoteThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [NoteThemingCssPropertiesComponent]
})
export class NoteThemingCssPropertiesComponentModule {}
