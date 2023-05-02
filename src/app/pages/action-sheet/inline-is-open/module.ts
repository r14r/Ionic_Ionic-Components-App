import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionSheetInlineIsOpenComponentRoutingModule } from './routing.module';

import { ActionSheetInlineIsOpenComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionSheetInlineIsOpenComponentRoutingModule
  ],
  declarations: [ActionSheetInlineIsOpenComponent]
})
export class ActionSheetInlineIsOpenComponentModule {}
