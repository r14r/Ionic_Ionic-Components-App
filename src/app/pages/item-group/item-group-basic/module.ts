import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemGroupBasicComponentRoutingModule } from './routing.module';

import { ItemGroupBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemGroupBasicComponentRoutingModule
  ],
  declarations: [ItemGroupBasicComponent]
})
export class ItemGroupBasicComponentModule {}
