import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChipThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { ChipThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChipThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [ChipThemingCssPropertiesComponent]
})
export class ChipThemingCssPropertiesComponentModule {}
