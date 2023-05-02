import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabelThemingColorsComponentRoutingModule } from './routing.module';

import { LabelThemingColorsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabelThemingColorsComponentRoutingModule
  ],
  declarations: [LabelThemingColorsComponent]
})
export class LabelThemingColorsComponentModule {}
