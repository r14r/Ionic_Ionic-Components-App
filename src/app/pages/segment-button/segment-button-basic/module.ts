import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentButtonBasicComponentRoutingModule } from './routing.module';

import { SegmentButtonBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentButtonBasicComponentRoutingModule
  ],
  declarations: [SegmentButtonBasicComponent]
})
export class SegmentButtonBasicComponentModule {}
