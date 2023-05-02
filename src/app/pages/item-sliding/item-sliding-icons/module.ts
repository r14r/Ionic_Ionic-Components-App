import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemSlidingIconsComponentRoutingModule } from './routing.module';

import { ItemSlidingIconsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemSlidingIconsComponentRoutingModule
  ],
  declarations: [ItemSlidingIconsComponent]
})
export class ItemSlidingIconsComponentModule {}
