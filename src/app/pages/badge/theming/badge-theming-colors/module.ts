import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgeThemingColorsComponentRoutingModule } from './routing.module';

import { BadgeThemingColorsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgeThemingColorsComponentRoutingModule
  ],
  declarations: [BadgeThemingColorsComponent]
})
export class BadgeThemingColorsComponentModule {}
