import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimeTitleCustomizingTitleComponentRoutingModule } from './routing.module';

import { DatetimeTitleCustomizingTitleComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimeTitleCustomizingTitleComponentRoutingModule
  ],
  declarations: [DatetimeTitleCustomizingTitleComponent]
})
export class DatetimeTitleCustomizingTitleComponentModule {}
