import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemDividerThemingColorsComponentRoutingModule } from './routing.module';

import { ItemDividerThemingColorsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDividerThemingColorsComponentRoutingModule
  ],
  declarations: [ItemDividerThemingColorsComponent]
})
export class ItemDividerThemingColorsComponentModule {}
