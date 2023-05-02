import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCanDismissBooleanComponentRoutingModule } from './routing.module';

import { ModalCanDismissBooleanComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCanDismissBooleanComponentRoutingModule
  ],
  declarations: [ModalCanDismissBooleanComponent]
})
export class ModalCanDismissBooleanComponentModule {}
