import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimeDateConstraintsValuesComponentRoutingModule } from './routing.module';

import { DatetimeDateConstraintsValuesComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimeDateConstraintsValuesComponentRoutingModule
  ],
  declarations: [DatetimeDateConstraintsValuesComponent]
})
export class DatetimeDateConstraintsValuesComponentModule {}
