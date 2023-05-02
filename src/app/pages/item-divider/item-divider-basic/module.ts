import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemDividerBasicComponentRoutingModule } from './routing.module';

import { ItemDividerBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDividerBasicComponentRoutingModule
  ],
  declarations: [ItemDividerBasicComponent]
})
export class ItemDividerBasicComponentModule {}
