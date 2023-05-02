import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvatarThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { AvatarThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [AvatarThemingCssPropertiesComponent]
})
export class AvatarThemingCssPropertiesComponentModule {}
