import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCardBasicComponentRoutingModule } from './routing.module';

import { ModalCardBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCardBasicComponentRoutingModule
  ],
  declarations: [ModalCardBasicComponent]
})
export class ModalCardBasicComponentModule {}
