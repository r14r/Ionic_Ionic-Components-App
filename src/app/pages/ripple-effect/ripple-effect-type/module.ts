import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RippleEffectTypeComponentRoutingModule } from './routing.module';

import { RippleEffectTypeComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RippleEffectTypeComponentRoutingModule
  ],
  declarations: [RippleEffectTypeComponent]
})
export class RippleEffectTypeComponentModule {}
