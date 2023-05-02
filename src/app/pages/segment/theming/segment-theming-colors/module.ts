import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentThemingColorsComponentRoutingModule } from './routing.module';

import { SegmentThemingColorsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentThemingColorsComponentRoutingModule
  ],
  declarations: [SegmentThemingColorsComponent]
})
export class SegmentThemingColorsComponentModule {}
