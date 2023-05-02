import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabThemingColorsComponentRoutingModule } from './routing.module';

import { FabThemingColorsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabThemingColorsComponentRoutingModule
  ],
  declarations: [FabThemingColorsComponent]
})
export class FabThemingColorsComponentModule {}
