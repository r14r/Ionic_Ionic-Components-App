import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonFillComponentRoutingModule } from './routing.module';

import { ButtonFillComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonFillComponentRoutingModule
  ],
  declarations: [ButtonFillComponent]
})
export class ButtonFillComponentModule {}
