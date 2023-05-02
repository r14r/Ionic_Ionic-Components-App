import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalControllerComponentRoutingModule } from './routing.module';

import { ModalControllerComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalControllerComponentRoutingModule
  ],
  declarations: [ModalControllerComponent]
})
export class ModalControllerComponentModule {}
