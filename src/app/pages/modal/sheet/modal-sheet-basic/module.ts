import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSheetBasicComponentRoutingModule } from './routing.module';

import { ModalSheetBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSheetBasicComponentRoutingModule
  ],
  declarations: [ModalSheetBasicComponent]
})
export class ModalSheetBasicComponentModule {}
