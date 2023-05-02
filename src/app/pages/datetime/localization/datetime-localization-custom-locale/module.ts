import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimeLocalizationCustomLocaleComponentRoutingModule } from './routing.module';

import { DatetimeLocalizationCustomLocaleComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimeLocalizationCustomLocaleComponentRoutingModule
  ],
  declarations: [DatetimeLocalizationCustomLocaleComponent]
})
export class DatetimeLocalizationCustomLocaleComponentModule {}
