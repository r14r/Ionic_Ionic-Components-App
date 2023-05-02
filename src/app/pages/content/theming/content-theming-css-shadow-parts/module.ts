import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentThemingCssShadowPartsComponentRoutingModule } from './routing.module';

import { ContentThemingCssShadowPartsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentThemingCssShadowPartsComponentRoutingModule
  ],
  declarations: [ContentThemingCssShadowPartsComponent]
})
export class ContentThemingCssShadowPartsComponentModule {}
