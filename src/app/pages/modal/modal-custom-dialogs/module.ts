import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCustomDialogsComponentRoutingModule } from './routing.module';

import { ModalCustomDialogsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCustomDialogsComponentRoutingModule
  ],
  declarations: [ModalCustomDialogsComponent]
})
export class ModalCustomDialogsComponentModule {}
