import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertButtonsComponentRoutingModule } from './routing.module';

import { AlertButtonsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertButtonsComponentRoutingModule
  ],
  declarations: [AlertButtonsComponent]
})
export class AlertButtonsComponentModule {}
