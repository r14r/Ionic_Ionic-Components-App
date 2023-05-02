import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputCounterComponentRoutingModule } from './routing.module';

import { InputCounterComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputCounterComponentRoutingModule
  ],
  declarations: [InputCounterComponent]
})
export class InputCounterComponentModule {}
