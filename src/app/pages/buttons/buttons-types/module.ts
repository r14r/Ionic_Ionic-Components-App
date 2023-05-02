import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonsTypesComponentRoutingModule } from './routing.module';

import { ButtonsTypesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonsTypesComponentRoutingModule
  ],
  declarations: [ButtonsTypesComponent]
})
export class ButtonsTypesComponentModule {}
