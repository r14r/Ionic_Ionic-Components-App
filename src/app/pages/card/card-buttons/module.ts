import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardButtonsComponentRoutingModule } from './routing.module';

import { CardButtonsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardButtonsComponentRoutingModule
  ],
  declarations: [CardButtonsComponent]
})
export class CardButtonsComponentModule {}
