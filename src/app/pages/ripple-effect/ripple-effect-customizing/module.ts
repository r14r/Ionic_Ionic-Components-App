import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RippleEffectCustomizingComponentRoutingModule } from './routing.module';

import { RippleEffectCustomizingComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RippleEffectCustomizingComponentRoutingModule
  ],
  declarations: [RippleEffectCustomizingComponent]
})
export class RippleEffectCustomizingComponentModule {}
