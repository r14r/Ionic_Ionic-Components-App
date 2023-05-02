import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputClearComponentRoutingModule } from './routing.module';

import { InputClearComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputClearComponentRoutingModule
  ],
  declarations: [InputClearComponent]
})
export class InputClearComponentModule {}
