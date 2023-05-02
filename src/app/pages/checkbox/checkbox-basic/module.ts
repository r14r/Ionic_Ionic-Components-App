import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckboxBasicComponentRoutingModule } from './routing.module';

import { CheckboxBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckboxBasicComponentRoutingModule
  ],
  declarations: [CheckboxBasicComponent]
})
export class CheckboxBasicComponentModule {}
