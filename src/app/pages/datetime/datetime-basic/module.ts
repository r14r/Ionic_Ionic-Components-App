import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimeBasicComponentRoutingModule } from './routing.module';

import { DatetimeBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimeBasicComponentRoutingModule
  ],
  declarations: [DatetimeBasicComponent]
})
export class DatetimeBasicComponentModule {}
