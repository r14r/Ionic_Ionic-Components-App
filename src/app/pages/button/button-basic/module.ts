import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonBasicComponentRoutingModule } from './routing.module';

import { ButtonBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonBasicComponentRoutingModule
  ],
  declarations: [ButtonBasicComponent]
})
export class ButtonBasicComponentModule {}
