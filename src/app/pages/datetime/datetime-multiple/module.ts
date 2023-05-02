import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimeMultipleComponentRoutingModule } from './routing.module';

import { DatetimeMultipleComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimeMultipleComponentRoutingModule
  ],
  declarations: [DatetimeMultipleComponent]
})
export class DatetimeMultipleComponentModule {}
