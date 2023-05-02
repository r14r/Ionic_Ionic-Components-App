import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverPresentingInlineTriggerComponentRoutingModule } from './routing.module';

import { PopoverPresentingInlineTriggerComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverPresentingInlineTriggerComponentRoutingModule
  ],
  declarations: [PopoverPresentingInlineTriggerComponent]
})
export class PopoverPresentingInlineTriggerComponentModule {}
