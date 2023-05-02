import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemClickableComponentRoutingModule } from './routing.module';

import { ItemClickableComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemClickableComponentRoutingModule
  ],
  declarations: [ItemClickableComponent]
})
export class ItemClickableComponentModule {}
