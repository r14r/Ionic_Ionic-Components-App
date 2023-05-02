import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputTypesComponentRoutingModule } from './routing.module';

import { InputTypesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputTypesComponentRoutingModule
  ],
  declarations: [InputTypesComponent]
})
export class InputTypesComponentModule {}
