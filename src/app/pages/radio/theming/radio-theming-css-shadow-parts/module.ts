import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioThemingCssShadowPartsComponentRoutingModule } from './routing.module';

import { RadioThemingCssShadowPartsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioThemingCssShadowPartsComponentRoutingModule
  ],
  declarations: [RadioThemingCssShadowPartsComponent]
})
export class RadioThemingCssShadowPartsComponentModule {}
