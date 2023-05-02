import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimeButtonsCustomizingButtonTextsComponentRoutingModule } from './routing.module';

import { DatetimeButtonsCustomizingButtonTextsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimeButtonsCustomizingButtonTextsComponentRoutingModule
  ],
  declarations: [DatetimeButtonsCustomizingButtonTextsComponent]
})
export class DatetimeButtonsCustomizingButtonTextsComponentModule {}
