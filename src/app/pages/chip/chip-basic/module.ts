import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChipBasicComponentRoutingModule } from './routing.module';

import { ChipBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChipBasicComponentRoutingModule
  ],
  declarations: [ChipBasicComponent]
})
export class ChipBasicComponentModule {}
