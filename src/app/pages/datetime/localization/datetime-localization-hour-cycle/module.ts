import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimeLocalizationHourCycleComponentRoutingModule } from './routing.module';

import { DatetimeLocalizationHourCycleComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimeLocalizationHourCycleComponentRoutingModule
  ],
  declarations: [DatetimeLocalizationHourCycleComponent]
})
export class DatetimeLocalizationHourCycleComponentModule {}
