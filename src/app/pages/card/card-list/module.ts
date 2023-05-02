import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardListComponentRoutingModule } from './routing.module';

import { CardListComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardListComponentRoutingModule
  ],
  declarations: [CardListComponent]
})
export class CardListComponentModule {}
