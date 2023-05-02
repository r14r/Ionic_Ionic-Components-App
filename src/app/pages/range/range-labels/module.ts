import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RangeLabelsComponentRoutingModule } from './routing.module';

import { RangeLabelsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RangeLabelsComponentRoutingModule
  ],
  declarations: [RangeLabelsComponent]
})
export class RangeLabelsComponentModule {}
