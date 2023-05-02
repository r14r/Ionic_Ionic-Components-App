import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentScrollableComponentRoutingModule } from './routing.module';

import { SegmentScrollableComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentScrollableComponentRoutingModule
  ],
  declarations: [SegmentScrollableComponent]
})
export class SegmentScrollableComponentModule {}
