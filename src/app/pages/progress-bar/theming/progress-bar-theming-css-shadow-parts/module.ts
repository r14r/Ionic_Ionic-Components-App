import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressBarThemingCssShadowPartsComponentRoutingModule } from './routing.module';

import { ProgressBarThemingCssShadowPartsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressBarThemingCssShadowPartsComponentRoutingModule
  ],
  declarations: [ProgressBarThemingCssShadowPartsComponent]
})
export class ProgressBarThemingCssShadowPartsComponentModule {}
