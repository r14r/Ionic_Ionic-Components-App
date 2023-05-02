import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickerMultipleColumnComponentRoutingModule } from './routing.module';

import { PickerMultipleColumnComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickerMultipleColumnComponentRoutingModule
  ],
  declarations: [PickerMultipleColumnComponent]
})
export class PickerMultipleColumnComponentModule {}
