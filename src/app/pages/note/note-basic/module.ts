import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteBasicComponentRoutingModule } from './routing.module';

import { NoteBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteBasicComponentRoutingModule
  ],
  declarations: [NoteBasicComponent]
})
export class NoteBasicComponentModule {}
