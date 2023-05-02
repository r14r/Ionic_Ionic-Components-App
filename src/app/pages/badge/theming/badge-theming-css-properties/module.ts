import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgeThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { BadgeThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgeThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [BadgeThemingCssPropertiesComponent]
})
export class BadgeThemingCssPropertiesComponentModule {}
