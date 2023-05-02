import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressBarThemingColorsComponentRoutingModule } from './routing.module';

import { ProgressBarThemingColorsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressBarThemingColorsComponentRoutingModule
  ],
  declarations: [ProgressBarThemingColorsComponent]
})
export class ProgressBarThemingColorsComponentModule {}
