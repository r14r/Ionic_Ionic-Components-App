import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabThemingCssShadowPartsComponentRoutingModule } from './routing.module';

import { FabThemingCssShadowPartsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabThemingCssShadowPartsComponentRoutingModule
  ],
  declarations: [FabThemingCssShadowPartsComponent]
})
export class FabThemingCssShadowPartsComponentModule {}
