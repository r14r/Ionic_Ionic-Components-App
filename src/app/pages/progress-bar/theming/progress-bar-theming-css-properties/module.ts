import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressBarThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { ProgressBarThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressBarThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [ProgressBarThemingCssPropertiesComponent]
})
export class ProgressBarThemingCssPropertiesComponentModule {}
