import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimeHighlightedDatesCallbackComponentRoutingModule } from './routing.module';

import { DatetimeHighlightedDatesCallbackComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimeHighlightedDatesCallbackComponentRoutingModule
  ],
  declarations: [DatetimeHighlightedDatesCallbackComponent]
})
export class DatetimeHighlightedDatesCallbackComponentModule {}
