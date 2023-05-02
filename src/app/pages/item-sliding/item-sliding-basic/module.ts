import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemSlidingBasicComponentRoutingModule } from './routing.module';

import { ItemSlidingBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemSlidingBasicComponentRoutingModule
  ],
  declarations: [ItemSlidingBasicComponent]
})
export class ItemSlidingBasicComponentModule {}
