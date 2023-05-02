import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemGroupSlidingItemsComponentRoutingModule } from './routing.module';

import { ItemGroupSlidingItemsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemGroupSlidingItemsComponentRoutingModule
  ],
  declarations: [ItemGroupSlidingItemsComponent]
})
export class ItemGroupSlidingItemsComponentModule {}
