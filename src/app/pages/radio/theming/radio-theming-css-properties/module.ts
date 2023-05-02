import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { RadioThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [RadioThemingCssPropertiesComponent]
})
export class RadioThemingCssPropertiesComponentModule {}
