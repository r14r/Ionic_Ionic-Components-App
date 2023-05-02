import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputLabelPlacementComponentRoutingModule } from './routing.module';

import { InputLabelPlacementComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputLabelPlacementComponentRoutingModule
  ],
  declarations: [InputLabelPlacementComponent]
})
export class InputLabelPlacementComponentModule {}
