import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimeDateConstraintsMaxMinComponentRoutingModule } from './routing.module';

import { DatetimeDateConstraintsMaxMinComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimeDateConstraintsMaxMinComponentRoutingModule
  ],
  declarations: [DatetimeDateConstraintsMaxMinComponent]
})
export class DatetimeDateConstraintsMaxMinComponentModule {}
