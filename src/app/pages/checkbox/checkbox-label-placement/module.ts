import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckboxLabelPlacementComponentRoutingModule } from './routing.module';

import { CheckboxLabelPlacementComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckboxLabelPlacementComponentRoutingModule
  ],
  declarations: [CheckboxLabelPlacementComponent]
})
export class CheckboxLabelPlacementComponentModule {}
