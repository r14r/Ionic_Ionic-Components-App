import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolbarThemingColorsComponentRoutingModule } from './routing.module';

import { ToolbarThemingColorsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolbarThemingColorsComponentRoutingModule
  ],
  declarations: [ToolbarThemingColorsComponent]
})
export class ToolbarThemingColorsComponentModule {}
