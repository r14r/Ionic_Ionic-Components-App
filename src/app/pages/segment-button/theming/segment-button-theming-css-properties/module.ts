import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentButtonThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { SegmentButtonThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentButtonThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [SegmentButtonThemingCssPropertiesComponent]
})
export class SegmentButtonThemingCssPropertiesComponentModule {}
