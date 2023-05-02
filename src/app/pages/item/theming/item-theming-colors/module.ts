import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemThemingColorsComponentRoutingModule } from './routing.module';

import { ItemThemingColorsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemThemingColorsComponentRoutingModule
  ],
  declarations: [ItemThemingColorsComponent]
})
export class ItemThemingColorsComponentModule {}
