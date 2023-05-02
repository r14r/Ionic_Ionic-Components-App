import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCanDismissFunctionComponentRoutingModule } from './routing.module';

import { ModalCanDismissFunctionComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCanDismissFunctionComponentRoutingModule
  ],
  declarations: [ModalCanDismissFunctionComponent]
})
export class ModalCanDismissFunctionComponentModule {}
