import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemLinesComponentRoutingModule } from './routing.module';

import { ItemLinesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemLinesComponentRoutingModule
  ],
  declarations: [ItemLinesComponent]
})
export class ItemLinesComponentModule {}
