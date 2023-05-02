import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpinnerThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { SpinnerThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpinnerThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [SpinnerThemingCssPropertiesComponent]
})
export class SpinnerThemingCssPropertiesComponentModule {}
