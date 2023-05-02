import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimeLocalizationFirstDayOfWeekComponentRoutingModule } from './routing.module';

import { DatetimeLocalizationFirstDayOfWeekComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimeLocalizationFirstDayOfWeekComponentRoutingModule
  ],
  declarations: [DatetimeLocalizationFirstDayOfWeekComponent]
})
export class DatetimeLocalizationFirstDayOfWeekComponentModule {}
