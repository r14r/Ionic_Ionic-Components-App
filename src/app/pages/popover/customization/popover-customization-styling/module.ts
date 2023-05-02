import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverCustomizationStylingComponentRoutingModule } from './routing.module';

import { PopoverCustomizationStylingComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverCustomizationStylingComponentRoutingModule
  ],
  declarations: [PopoverCustomizationStylingComponent]
})
export class PopoverCustomizationStylingComponentModule {}
