import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertPresentingControllerComponentRoutingModule } from './routing.module';

import { AlertPresentingControllerComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertPresentingControllerComponentRoutingModule
  ],
  declarations: [AlertPresentingControllerComponent]
})
export class AlertPresentingControllerComponentModule {}
