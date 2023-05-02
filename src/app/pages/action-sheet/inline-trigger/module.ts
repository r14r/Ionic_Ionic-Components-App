import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionSheetInlineTriggerComponentRoutingModule } from './routing.module';

import { ActionSheetInlineTriggerComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionSheetInlineTriggerComponentRoutingModule
  ],
  declarations: [ActionSheetInlineTriggerComponent]
})
export class ActionSheetInlineTriggerComponentModule {}
