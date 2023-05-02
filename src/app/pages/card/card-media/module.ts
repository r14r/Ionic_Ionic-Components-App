import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardMediaComponentRoutingModule } from './routing.module';

import { CardMediaComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardMediaComponentRoutingModule
  ],
  declarations: [CardMediaComponent]
})
export class CardMediaComponentModule {}
