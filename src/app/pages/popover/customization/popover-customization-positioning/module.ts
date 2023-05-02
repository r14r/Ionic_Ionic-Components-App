import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverCustomizationPositioningComponentRoutingModule } from './routing.module';

import { PopoverCustomizationPositioningComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverCustomizationPositioningComponentRoutingModule
  ],
  declarations: [PopoverCustomizationPositioningComponent]
})
export class PopoverCustomizationPositioningComponentModule {}
