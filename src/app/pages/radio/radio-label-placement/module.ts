import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioLabelPlacementComponentRoutingModule } from './routing.module';

import { RadioLabelPlacementComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioLabelPlacementComponentRoutingModule
  ],
  declarations: [RadioLabelPlacementComponent]
})
export class RadioLabelPlacementComponentModule {}
