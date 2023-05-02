import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectCustomizationButtonTextComponentRoutingModule } from './routing.module';

import { SelectCustomizationButtonTextComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectCustomizationButtonTextComponentRoutingModule
  ],
  declarations: [SelectCustomizationButtonTextComponent]
})
export class SelectCustomizationButtonTextComponentModule {}
