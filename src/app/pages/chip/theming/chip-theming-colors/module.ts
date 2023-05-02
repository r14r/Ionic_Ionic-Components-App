import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChipThemingColorsComponentRoutingModule } from './routing.module';

import { ChipThemingColorsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChipThemingColorsComponentRoutingModule
  ],
  declarations: [ChipThemingColorsComponent]
})
export class ChipThemingColorsComponentModule {}
