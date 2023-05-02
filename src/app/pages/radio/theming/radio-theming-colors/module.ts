import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioThemingColorsComponentRoutingModule } from './routing.module';

import { RadioThemingColorsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioThemingColorsComponentRoutingModule
  ],
  declarations: [RadioThemingColorsComponent]
})
export class RadioThemingColorsComponentModule {}
