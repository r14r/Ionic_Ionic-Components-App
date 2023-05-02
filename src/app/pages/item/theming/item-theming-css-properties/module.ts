import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { ItemThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [ItemThemingCssPropertiesComponent]
})
export class ItemThemingCssPropertiesComponentModule {}
