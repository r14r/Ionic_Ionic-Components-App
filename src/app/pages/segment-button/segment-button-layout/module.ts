import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentButtonLayoutComponentRoutingModule } from './routing.module';

import { SegmentButtonLayoutComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentButtonLayoutComponentRoutingModule
  ],
  declarations: [SegmentButtonLayoutComponent]
})
export class SegmentButtonLayoutComponentModule {}
