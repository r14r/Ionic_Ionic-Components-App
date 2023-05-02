import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemDividerThemingCssPropertiesComponentRoutingModule } from './routing.module';

import { ItemDividerThemingCssPropertiesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDividerThemingCssPropertiesComponentRoutingModule
  ],
  declarations: [ItemDividerThemingCssPropertiesComponent]
})
export class ItemDividerThemingCssPropertiesComponentModule {}
