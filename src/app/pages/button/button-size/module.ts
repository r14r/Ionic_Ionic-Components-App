import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonSizeComponentRoutingModule } from './routing.module';

import { ButtonSizeComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonSizeComponentRoutingModule
  ],
  declarations: [ButtonSizeComponent]
})
export class ButtonSizeComponentModule {}
