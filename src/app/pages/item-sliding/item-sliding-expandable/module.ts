import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemSlidingExpandableComponentRoutingModule } from './routing.module';

import { ItemSlidingExpandableComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemSlidingExpandableComponentRoutingModule
  ],
  declarations: [ItemSlidingExpandableComponent]
})
export class ItemSlidingExpandableComponentModule {}
