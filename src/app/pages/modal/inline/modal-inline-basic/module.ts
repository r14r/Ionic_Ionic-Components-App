import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalInlineBasicComponentRoutingModule } from './routing.module';

import { ModalInlineBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalInlineBasicComponentRoutingModule
  ],
  declarations: [ModalInlineBasicComponent]
})
export class ModalInlineBasicComponentModule {}
