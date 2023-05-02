import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToggleThemingCssShadowPartsComponentRoutingModule } from './routing.module';

import { ToggleThemingCssShadowPartsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToggleThemingCssShadowPartsComponentRoutingModule
  ],
  declarations: [ToggleThemingCssShadowPartsComponent]
})
export class ToggleThemingCssShadowPartsComponentModule {}
