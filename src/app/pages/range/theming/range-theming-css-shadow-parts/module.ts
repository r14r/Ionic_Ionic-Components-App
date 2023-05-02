import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RangeThemingCssShadowPartsComponentRoutingModule } from './routing.module';

import { RangeThemingCssShadowPartsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RangeThemingCssShadowPartsComponentRoutingModule
  ],
  declarations: [RangeThemingCssShadowPartsComponent]
})
export class RangeThemingCssShadowPartsComponentModule {}
