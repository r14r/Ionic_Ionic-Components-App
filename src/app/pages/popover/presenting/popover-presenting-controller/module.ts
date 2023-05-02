import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverPresentingControllerComponentRoutingModule } from './routing.module';

import { PopoverPresentingControllerComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverPresentingControllerComponentRoutingModule
  ],
  declarations: [PopoverPresentingControllerComponent]
})
export class PopoverPresentingControllerComponentModule {}
