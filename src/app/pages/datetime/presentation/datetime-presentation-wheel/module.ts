import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimePresentationWheelComponentRoutingModule } from './routing.module';

import { DatetimePresentationWheelComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimePresentationWheelComponentRoutingModule
  ],
  declarations: [DatetimePresentationWheelComponent]
})
export class DatetimePresentationWheelComponentModule {}
