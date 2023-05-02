import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemIconsComponentRoutingModule } from './routing.module';

import { ItemIconsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemIconsComponentRoutingModule
  ],
  declarations: [ItemIconsComponent]
})
export class ItemIconsComponentModule {}
