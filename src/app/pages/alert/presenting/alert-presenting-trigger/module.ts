import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertPresentingTriggerComponentRoutingModule } from './routing.module';

import { AlertPresentingTriggerComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertPresentingTriggerComponentRoutingModule
  ],
  declarations: [AlertPresentingTriggerComponent]
})
export class AlertPresentingTriggerComponentModule {}
