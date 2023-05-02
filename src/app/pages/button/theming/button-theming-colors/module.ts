import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonThemingColorsComponentRoutingModule } from './routing.module';

import { ButtonThemingColorsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonThemingColorsComponentRoutingModule
  ],
  declarations: [ButtonThemingColorsComponent]
})
export class ButtonThemingColorsComponentModule {}
