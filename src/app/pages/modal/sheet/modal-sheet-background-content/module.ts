import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSheetBackgroundContentComponentRoutingModule } from './routing.module';

import { ModalSheetBackgroundContentComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSheetBackgroundContentComponentRoutingModule
  ],
  declarations: [ModalSheetBackgroundContentComponent]
})
export class ModalSheetBackgroundContentComponentModule {}
