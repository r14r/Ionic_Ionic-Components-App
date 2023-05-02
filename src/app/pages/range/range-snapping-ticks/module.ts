import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RangeSnappingTicksComponentRoutingModule } from './routing.module';

import { RangeSnappingTicksComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RangeSnappingTicksComponentRoutingModule
  ],
  declarations: [RangeSnappingTicksComponent]
})
export class RangeSnappingTicksComponentModule {}
