import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemBasicComponentRoutingModule } from './routing.module';

import { ItemBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemBasicComponentRoutingModule
  ],
  declarations: [ItemBasicComponent]
})
export class ItemBasicComponentModule {}
