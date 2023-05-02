import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimePresentationTimeComponentRoutingModule } from './routing.module';

import { DatetimePresentationTimeComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimePresentationTimeComponentRoutingModule
  ],
  declarations: [DatetimePresentationTimeComponent]
})
export class DatetimePresentationTimeComponentModule {}
