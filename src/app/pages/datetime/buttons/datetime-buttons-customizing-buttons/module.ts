import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimeButtonsCustomizingButtonsComponentRoutingModule } from './routing.module';

import { DatetimeButtonsCustomizingButtonsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimeButtonsCustomizingButtonsComponentRoutingModule
  ],
  declarations: [DatetimeButtonsCustomizingButtonsComponent]
})
export class DatetimeButtonsCustomizingButtonsComponentModule {}
