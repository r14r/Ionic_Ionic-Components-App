import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonIconsComponentRoutingModule } from './routing.module';

import { ButtonIconsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonIconsComponentRoutingModule
  ],
  declarations: [ButtonIconsComponent]
})
export class ButtonIconsComponentModule {}
