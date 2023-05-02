import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RangeSlotsComponentRoutingModule } from './routing.module';

import { RangeSlotsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RangeSlotsComponentRoutingModule
  ],
  declarations: [RangeSlotsComponent]
})
export class RangeSlotsComponentModule {}
