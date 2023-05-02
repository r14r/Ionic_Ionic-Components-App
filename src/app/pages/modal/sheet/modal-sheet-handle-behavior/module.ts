import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSheetHandleBehaviorComponentRoutingModule } from './routing.module';

import { ModalSheetHandleBehaviorComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSheetHandleBehaviorComponentRoutingModule
  ],
  declarations: [ModalSheetHandleBehaviorComponent]
})
export class ModalSheetHandleBehaviorComponentModule {}
