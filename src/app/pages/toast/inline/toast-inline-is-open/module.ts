import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToastInlineIsOpenComponentRoutingModule } from './routing.module';

import { ToastInlineIsOpenComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToastInlineIsOpenComponentRoutingModule
  ],
  declarations: [ToastInlineIsOpenComponent]
})
export class ToastInlineIsOpenComponentModule {}
