import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckboxJustifyComponentRoutingModule } from './routing.module';

import { CheckboxJustifyComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckboxJustifyComponentRoutingModule
  ],
  declarations: [CheckboxJustifyComponent]
})
export class CheckboxJustifyComponentModule {}
