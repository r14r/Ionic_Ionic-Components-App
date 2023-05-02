import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalInlineIsOpenComponentRoutingModule } from './routing.module';

import { ModalInlineIsOpenComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalInlineIsOpenComponentRoutingModule
  ],
  declarations: [ModalInlineIsOpenComponent]
})
export class ModalInlineIsOpenComponentModule {}
