import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteItemComponentRoutingModule } from './routing.module';

import { NoteItemComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteItemComponentRoutingModule
  ],
  declarations: [NoteItemComponent]
})
export class NoteItemComponentModule {}
