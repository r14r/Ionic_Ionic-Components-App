import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverCustomizationSizingComponentRoutingModule } from './routing.module';

import { PopoverCustomizationSizingComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverCustomizationSizingComponentRoutingModule
  ],
  declarations: [PopoverCustomizationSizingComponent]
})
export class PopoverCustomizationSizingComponentModule {}
