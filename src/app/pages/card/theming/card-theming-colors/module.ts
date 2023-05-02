import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardThemingColorsComponentRoutingModule } from './routing.module';

import { CardThemingColorsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardThemingColorsComponentRoutingModule
  ],
  declarations: [CardThemingColorsComponent]
})
export class CardThemingColorsComponentModule {}
