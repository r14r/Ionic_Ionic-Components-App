import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonsBasicComponentRoutingModule } from './routing.module';

import { ButtonsBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonsBasicComponentRoutingModule
  ],
  declarations: [ButtonsBasicComponent]
})
export class ButtonsBasicComponentModule {}
