import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToggleThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { ToggleThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToggleThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [ToggleThemingCssPropertiesComponent]
})
export class ToggleThemingCssPropertiesComponentModule {}
