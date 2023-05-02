import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickerInlineIsOpenComponentRoutingModule } from './routing.module';

import { PickerInlineIsOpenComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickerInlineIsOpenComponentRoutingModule
  ],
  declarations: [PickerInlineIsOpenComponent]
})
export class PickerInlineIsOpenComponentModule {}
