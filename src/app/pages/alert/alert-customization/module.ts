import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertCustomizationComponentRoutingModule } from './routing.module';

import { AlertCustomizationComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertCustomizationComponentRoutingModule
  ],
  declarations: [AlertCustomizationComponent]
})
export class AlertCustomizationComponentModule {}
