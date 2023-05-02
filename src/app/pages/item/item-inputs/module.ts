import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemInputsComponentRoutingModule } from './routing.module';

import { ItemInputsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemInputsComponentRoutingModule
  ],
  declarations: [ItemInputsComponent]
})
export class ItemInputsComponentModule {}
