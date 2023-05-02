import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputFillComponentRoutingModule } from './routing.module';

import { InputFillComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputFillComponentRoutingModule
  ],
  declarations: [InputFillComponent]
})
export class InputFillComponentModule {}
