import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RangeDualKnobsComponentRoutingModule } from './routing.module';

import { RangeDualKnobsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RangeDualKnobsComponentRoutingModule
  ],
  declarations: [RangeDualKnobsComponent]
})
export class RangeDualKnobsComponentModule {}
