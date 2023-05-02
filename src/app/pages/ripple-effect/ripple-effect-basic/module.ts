import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RippleEffectBasicComponentRoutingModule } from './routing.module';

import { RippleEffectBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RippleEffectBasicComponentRoutingModule
  ],
  declarations: [RippleEffectBasicComponent]
})
export class RippleEffectBasicComponentModule {}
