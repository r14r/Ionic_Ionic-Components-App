import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToastPresentingControllerComponentRoutingModule } from './routing.module';

import { ToastPresentingControllerComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToastPresentingControllerComponentRoutingModule
  ],
  declarations: [ToastPresentingControllerComponent]
})
export class ToastPresentingControllerComponentModule {}
