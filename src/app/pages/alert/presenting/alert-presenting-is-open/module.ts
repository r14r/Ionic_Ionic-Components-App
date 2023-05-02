import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertPresentingIsOpenComponentRoutingModule } from './routing.module';

import { AlertPresentingIsOpenComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertPresentingIsOpenComponentRoutingModule
  ],
  declarations: [AlertPresentingIsOpenComponent]
})
export class AlertPresentingIsOpenComponentModule {}
