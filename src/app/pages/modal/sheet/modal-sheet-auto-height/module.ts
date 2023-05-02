import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSheetAutoHeightComponentRoutingModule } from './routing.module';

import { ModalSheetAutoHeightComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSheetAutoHeightComponentRoutingModule
  ],
  declarations: [ModalSheetAutoHeightComponent]
})
export class ModalSheetAutoHeightComponentModule {}
