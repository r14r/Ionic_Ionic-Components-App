import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RangeIonKnobMoveEventComponentRoutingModule } from './routing.module';

import { RangeIonKnobMoveEventComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RangeIonKnobMoveEventComponentRoutingModule
  ],
  declarations: [RangeIonKnobMoveEventComponent]
})
export class RangeIonKnobMoveEventComponentModule {}
