import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { SegmentThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [SegmentThemingCssPropertiesComponent]
})
export class SegmentThemingCssPropertiesComponentModule {}
