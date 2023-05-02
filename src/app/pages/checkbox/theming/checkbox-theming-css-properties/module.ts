import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckboxThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { CheckboxThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckboxThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [CheckboxThemingCssPropertiesComponent]
})
export class CheckboxThemingCssPropertiesComponentModule {}
