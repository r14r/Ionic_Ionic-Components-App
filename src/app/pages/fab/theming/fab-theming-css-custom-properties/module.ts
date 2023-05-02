import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabThemingCssCustomPropertiesComponentRoutingModule } from './routing.module';

import { FabThemingCssCustomPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabThemingCssCustomPropertiesComponentRoutingModule
  ],
  declarations: [FabThemingCssCustomPropertiesComponent]
})
export class FabThemingCssCustomPropertiesComponentModule {}
