import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemMediaComponentRoutingModule } from './routing.module';

import { ItemMediaComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemMediaComponentRoutingModule
  ],
  declarations: [ItemMediaComponent]
})
export class ItemMediaComponentModule {}
