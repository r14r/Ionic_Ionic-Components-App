import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpinnerThemingColorsComponentRoutingModule } from './routing.module';

import { SpinnerThemingColorsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpinnerThemingColorsComponentRoutingModule
  ],
  declarations: [SpinnerThemingColorsComponent]
})
export class SpinnerThemingColorsComponentModule {}
