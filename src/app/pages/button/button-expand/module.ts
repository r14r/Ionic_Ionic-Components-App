import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonExpandComponentRoutingModule } from './routing.module';

import { ButtonExpandComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonExpandComponentRoutingModule
  ],
  declarations: [ButtonExpandComponent]
})
export class ButtonExpandComponentModule {}
