import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemButtonsComponentRoutingModule } from './routing.module';

import { ItemButtonsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemButtonsComponentRoutingModule
  ],
  declarations: [ItemButtonsComponent]
})
export class ItemButtonsComponentModule {}
