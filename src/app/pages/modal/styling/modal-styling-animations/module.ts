import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalStylingAnimationsComponentRoutingModule } from './routing.module';

import { ModalStylingAnimationsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalStylingAnimationsComponentRoutingModule
  ],
  declarations: [ModalStylingAnimationsComponent]
})
export class ModalStylingAnimationsComponentModule {}
