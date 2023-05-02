import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertInputsRadiosComponentRoutingModule } from './routing.module';

import { AlertInputsRadiosComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertInputsRadiosComponentRoutingModule
  ],
  declarations: [AlertInputsRadiosComponent]
})
export class AlertInputsRadiosComponentModule {}
