import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolbarThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { ToolbarThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolbarThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [ToolbarThemingCssPropertiesComponent]
})
export class ToolbarThemingCssPropertiesComponentModule {}
