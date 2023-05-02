import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonsPlacementComponentRoutingModule } from './routing.module';

import { ButtonsPlacementComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonsPlacementComponentRoutingModule
  ],
  declarations: [ButtonsPlacementComponent]
})
export class ButtonsPlacementComponentModule {}
