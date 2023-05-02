import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentButtonThemingCssShadowPartsComponentRoutingModule } from './routing.module';

import { SegmentButtonThemingCssShadowPartsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentButtonThemingCssShadowPartsComponentRoutingModule
  ],
  declarations: [SegmentButtonThemingCssShadowPartsComponent]
})
export class SegmentButtonThemingCssShadowPartsComponentModule {}
