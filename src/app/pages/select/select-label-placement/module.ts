import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectLabelPlacementComponentRoutingModule } from './routing.module';

import { SelectLabelPlacementComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectLabelPlacementComponentRoutingModule
  ],
  declarations: [SelectLabelPlacementComponent]
})
export class SelectLabelPlacementComponentModule {}
