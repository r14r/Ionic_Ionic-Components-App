import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentBasicComponentRoutingModule } from './routing.module';

import { SegmentBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentBasicComponentRoutingModule
  ],
  declarations: [SegmentBasicComponent]
})
export class SegmentBasicComponentModule {}
