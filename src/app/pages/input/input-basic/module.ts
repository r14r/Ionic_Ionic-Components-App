import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputBasicComponentRoutingModule } from './routing.module';

import { InputBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputBasicComponentRoutingModule
  ],
  declarations: [InputBasicComponent]
})
export class InputBasicComponentModule {}
