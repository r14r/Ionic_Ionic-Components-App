import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimePresentationMonthAndYearComponentRoutingModule } from './routing.module';

import { DatetimePresentationMonthAndYearComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimePresentationMonthAndYearComponentRoutingModule
  ],
  declarations: [DatetimePresentationMonthAndYearComponent]
})
export class DatetimePresentationMonthAndYearComponentModule {}
