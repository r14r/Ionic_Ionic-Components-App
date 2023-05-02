import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { CardThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [CardThemingCssPropertiesComponent]
})
export class CardThemingCssPropertiesComponentModule {}
