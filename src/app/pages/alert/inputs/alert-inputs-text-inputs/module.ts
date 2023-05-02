import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertInputsTextInputsComponentRoutingModule } from './routing.module';

import { AlertInputsTextInputsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertInputsTextInputsComponentRoutingModule
  ],
  declarations: [AlertInputsTextInputsComponent]
})
export class AlertInputsTextInputsComponentModule {}
