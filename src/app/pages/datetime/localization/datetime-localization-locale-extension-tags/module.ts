import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimeLocalizationLocaleExtensionTagsComponentRoutingModule } from './routing.module';

import { DatetimeLocalizationLocaleExtensionTagsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimeLocalizationLocaleExtensionTagsComponentRoutingModule
  ],
  declarations: [DatetimeLocalizationLocaleExtensionTagsComponent]
})
export class DatetimeLocalizationLocaleExtensionTagsComponentModule {}
