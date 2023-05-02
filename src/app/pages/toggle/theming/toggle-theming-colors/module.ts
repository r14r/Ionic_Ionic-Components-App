import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToggleThemingColorsComponentRoutingModule } from './routing.module';

import { ToggleThemingColorsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToggleThemingColorsComponentRoutingModule
  ],
  declarations: [ToggleThemingColorsComponent]
})
export class ToggleThemingColorsComponentModule {}
