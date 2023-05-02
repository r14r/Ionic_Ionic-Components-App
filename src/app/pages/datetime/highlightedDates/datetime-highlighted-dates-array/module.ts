import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimeHighlightedDatesArrayComponentRoutingModule } from './routing.module';

import { DatetimeHighlightedDatesArrayComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimeHighlightedDatesArrayComponentRoutingModule
  ],
  declarations: [DatetimeHighlightedDatesArrayComponent]
})
export class DatetimeHighlightedDatesArrayComponentModule {}
