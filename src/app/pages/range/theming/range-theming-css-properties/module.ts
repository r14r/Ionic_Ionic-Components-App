import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RangeThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { RangeThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RangeThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [RangeThemingCssPropertiesComponent]
})
export class RangeThemingCssPropertiesComponentModule {}
