import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardBasicComponentRoutingModule } from './routing.module';

import { CardBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardBasicComponentRoutingModule
  ],
  declarations: [CardBasicComponent]
})
export class CardBasicComponentModule {}
