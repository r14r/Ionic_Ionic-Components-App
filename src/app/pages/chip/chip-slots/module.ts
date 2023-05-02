import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChipSlotsComponentRoutingModule } from './routing.module';

import { ChipSlotsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChipSlotsComponentRoutingModule
  ],
  declarations: [ChipSlotsComponent]
})
export class ChipSlotsComponentModule {}
