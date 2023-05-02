import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemThemingCssShadowPartsComponentRoutingModule } from './routing.module';

import { ItemThemingCssShadowPartsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemThemingCssShadowPartsComponentRoutingModule
  ],
  declarations: [ItemThemingCssShadowPartsComponent]
})
export class ItemThemingCssShadowPartsComponentModule {}
